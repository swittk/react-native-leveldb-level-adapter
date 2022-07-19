import { LevelDB, LevelDBIterator } from '@switt/react-native-leveldb';
import * as ALD from 'abstract-leveldown';
const supports = require("level-supports");
import ModuleError from 'module-error';
import fs from 'react-native-fs';

type StOrArr = string | ArrayBuffer;

export class SKReactNativeLevelDownIterator extends ALD.AbstractIterator<StOrArr, StOrArr> {
  it: LevelDBIterator;
  valid: boolean = true;
  options: ALD.AbstractIteratorOptions<StOrArr>;
  hasLimit: boolean;
  isReversed: boolean;
  readsKeys: boolean;
  readsValues: boolean;
  startingBoundIsOpen: boolean = false;
  endingBoundIsOpen: boolean = false;
  stepCount = 0;
  startingBound?: StOrArr;
  endingBound?: StOrArr;

  keyIsBuf = false;
  valueIsBuf = false;

  busy = false;

  startedReading = false;

  constructor(
    db: ALD.AbstractLevelDOWN,
    options: ALD.AbstractIteratorOptions<StOrArr>
  ) {
    super(db);
    const level = this.db._db! as LevelDB;
    console.log('iterator options was', options);
    this.it = level.newIterator();
    this.options = options;
    this.hasLimit = (options.limit != undefined) && (options.limit != -1);
    this.isReversed = options.reverse || false;
    this.readsKeys = (options.keys != undefined ? options.keys : true);
    this.readsValues = (options.values != undefined) ? options.values : true;

    this.keyIsBuf = (options.keyAsBuffer == undefined ? false : options.keyAsBuffer);
    this.valueIsBuf = (options.valueAsBuffer == undefined ? false : options.valueAsBuffer);

    let lowerBound: StOrArr | undefined;
    let upperBound: StOrArr | undefined;
    let lowerBoundIsOpen = true;
    let upperBoundIsOpen = true;

    // Counter-intuitively, you don't need to check if gt >= gte, or lt <= lte
    // Because according to the test suite... there's a priority!
    // gte has higher priority than gt, and lte has higher priority than lt!
    // so we just check them later that's all
    if (options.gt != undefined) {
      lowerBound = options.gt;
      lowerBoundIsOpen = false;
    }
    if (options.gte != undefined) {
      lowerBound = options.gte;
      lowerBoundIsOpen = true;
    }
    if (options.lt != undefined) {
      upperBound = options.lt;
      upperBoundIsOpen = false;
    }
    if (options.lte != undefined) {
      upperBound = options.lte;
      upperBoundIsOpen = true;
    }
    // }
    const startingBound = options.reverse ? upperBound : lowerBound;
    if (startingBound != undefined) {
      this.startingBoundIsOpen = this.isReversed ? upperBoundIsOpen : lowerBoundIsOpen;
      this.it.seek(startingBound);
      this.startingBound = startingBound;
      if (this.it.valid()) {
        const comparison = this.it.compareKey(startingBound);
        if ((!(this.isReversed ? upperBoundIsOpen : lowerBoundIsOpen) && comparison == 0) || (this.isReversed && comparison > 0)) {
          this.isReversed ? this.it.prev() : this.it.next();
        }
      } else if (this.isReversed) {
        // We must have seeked past the end.
        this.it.seekLast();
      }
    }
    else {
      if (this.isReversed) {
        this.it.seekLast();
      }
      else {
        // Just... assume it's at first?
        this.it.seekToFirst();
      }
      // this.isReversed ? this.it.seekLast() : this.it.seekToFirst();
    }

    const endingBound = options.reverse ? lowerBound : upperBound;
    if (endingBound != undefined) {
      this.endingBoundIsOpen = this.isReversed ? lowerBoundIsOpen : upperBoundIsOpen;
      this.endingBound = endingBound;
      // self.endingSliceStorage = ...
    }
    else {
      // nothing?
      // self.endingSliceStorage = NULL
    }
  }

  current(): [StOrArr | undefined, StOrArr | undefined] | undefined {
    if (this.isEnded()) {
      return undefined;
    }
    let key: StOrArr | undefined = this.readsKeys ? (this.keyIsBuf ? this.it.keyBuf() : this.it.keyStr()) : undefined;
    let val: StOrArr | undefined = this.readsValues ? (this.valueIsBuf ? this.it.valueBuf() : this.it.valueStr()) : undefined;
    return [key, val];
  }

  // An empty array signifies the natural end of the iterator
  // so simply yielding a non-empty array signifies non-end
  protected _next(callback: ALD.ErrorKeyValueCallback<StOrArr | undefined, StOrArr | undefined>): void {
    if (this.busy) {
      callback(new ModuleError('Iterator is busy', { code: 'LEVEL_ITERATOR_BUSY' }), undefined, undefined);
      return;
    }
    else if (!this.valid) {
      callback(new ModuleError('Iterator is not open', { code: 'LEVEL_ITERATOR_NOT_OPEN' }), undefined, undefined);
      return;
    }
    // need to set busy to pass compliance
    this.busy = true;
    try {
      let gotKey: StOrArr | undefined;
      let gotValue: StOrArr | undefined;

      if (this.it.valid()) {
        // If already started reading, then next() should move the iterator
        if (this.startedReading) {
          if (this.options.reverse) {
            this.it.prev();
          }
          else {
            this.it.next();
          }
        }
        else {
          // never started reading yet; just use the same pos.
          this.startedReading = true;
        }
        if (this.isEnded()) {
          gotKey = undefined;
          gotValue = undefined;
        }
        else {
          if (this.readsKeys) {
            gotKey = this.keyIsBuf ? this.it.keyBuf() : this.it.keyStr();
          }
          if (this.readsValues) {
            gotValue = this.valueIsBuf ? this.it.valueBuf() : this.it.valueStr();
          }
        }
      }
      else {
        gotKey = undefined;
        gotValue = undefined;
      }
      this.db.nextTick(callback, null, gotKey, gotValue);
      this.busy = false;
    } catch (e) {
      this.busy = false;
      this.db.nextTick(callback, e);
    }
  }

  protected _seek(target: StOrArr): void {
    if (!this.valid) {
      return;
    }
    // Reference : https://github.com/andymatuschak/react-native-leveldown/blob/e7d14cfdf81558d15ecec76e956269081d12a40b/ios/RNLeveldown.mm#L388
    this.it.seek(target);
    if (this.isReversed) {
      if (!this.it.valid()) {
        // We must have seeked past the end.
        this.it.seekLast();
      }
      // TODO: Change this back once package is patched
      else if (this.it.compareKey(target) > 0) {
        // We seeked past the target; step back.
        if (this.isReversed) {
          this.it.prev();
        }
        else {
          this.it.next();
        }
      }
    }
    this.startedReading = false;
  }
  protected _close(callback: ALD.ErrorCallback): void {
    this.valid = false;
    this.it.close();
    this.db._openIterators.delete(this);
    this.db.nextTick(callback);
  }
  // ..

  protected isEnded(): boolean {
    // following https://github.com/andymatuschak/react-native-leveldown/blob/e7d14cfdf81558d15ecec76e956269081d12a40b/ios/RNLeveldown.mm#L162
    if (!this.it.valid()) {
      return true;
    }
    if (this.hasLimit && this.stepCount >= this.limit) {
      return true;
    }
    if (this.endingBound != undefined) {
      const comparison = this.it.compareKey(this.endingBound)
      if ((comparison < 0 && this.isReversed) || (comparison > 0 && !this.isReversed) || (comparison == 0 && !this.endingBoundIsOpen)) {
        return true;
      }
    }
    if (this.startingBound != undefined) {
      const comparison = this.it.compareKey(this.startingBound);
      if ((comparison > 0 && this.isReversed) || (comparison < 0 && !this.isReversed) || (comparison == 0 && !this.startingBoundIsOpen)) {
        return true;
      }
    }
    return false;
  }
}


export class SKReactNativeLevelDown extends ALD.AbstractLevelDOWN {
  databaseName: string;
  _db?: LevelDB;
  _openIterators: Set<SKReactNativeLevelDownIterator> = new Set();
  nextTick = (callback: (...args: any[]) => void, ...params: any[]) => {
    if (!params.length) {
      setImmediate(callback);
    }
    else {
      setImmediate(() => {
        callback(...params);
      });
    }
  }

  constructor(databaseName: string) {
    const supportsObj = supports({
      snapshots: true,
      permanence: true,
      seek: true,
      // clear: true,
      createIfMissing: true,
      errorIfExists: true,
    })
    console.log('bout to call super');
    super(
      // {
      //   snapshots: false,
      //   permanence: true,
      //   seek: true,
      //   // clear: true,
      //   createIfMissing: true,
      //   errorIfExists: true,
      // } as any
      //supportsObj as any
      databaseName
    );
    this.databaseName = databaseName;
  }
  protected async _open(options: ALD.AbstractOpenOptions, callback: ALD.ErrorCallback): Promise<void> {
    console.log('called with options', options);
    const {
      createIfMissing = true, errorIfExists = false,
    } = options;
    try {
      if (errorIfExists && await fs.exists(fs.DocumentDirectoryPath + `/` + this.databaseName)) {
        throw { message: 'File already exists' };
      }
      this._db = new LevelDB(this.databaseName, createIfMissing, errorIfExists);

      console.log('no error');
      this.nextTick(callback, null);
    } catch (e: any) {
      const msg = ((e as any).message as string);
      if (msg.includes('does not exist')) {
        const err = new ModuleError(msg, { code: 'LEVEL_DATABASE_NOT_OPEN' })
        this.nextTick(callback, err);
      }
      else if (msg.includes('exists')) {
        console.log('exists error');
        const err = new ModuleError(msg, { code: 'LEVEL_DATABASE_NOT_OPEN' })
        this.nextTick(callback, err);
      }
      else {
        console.error('open error', 'type', typeof e, e.code, e.message);
        throw e;
      }
    }
  }
  protected _close(callback: ALD.ErrorValueCallback<void>): void {
    try {
      if (this._openIterators.size) {
        for (const it of this._openIterators) {
          it.valid = false;
          it.it.close();
        }
      }
      if (!this._db!.closed) {
        this._db!.close();
      }
      this.nextTick(callback, null);
    } catch (e) {
      this.nextTick(callback, e);
    }
  }
  protected _get(
    key: StOrArr,
    options: { asBuffer: boolean },
    callback: ALD.ErrorValueCallback<StOrArr>
  ): void {
    let res: ArrayBuffer | string | null;
    console.log('get with opts', options);
    if (options.asBuffer) {
      res = this._db!.getBuf(key);
      console.log('res is', res?.byteLength);
    }
    else {
      res = this._db!.getStr(key);
    }
    if (res == null) {
      this.nextTick(
        callback,
        new ModuleError(`Key ${key} was not found`, { code: 'LEVEL_NOT_FOUND' })
      );
    }
    else {
      this.nextTick(
        callback,
        null,
        res
      )
    }
  }

  protected _getMany(
    keys: (StOrArr)[],
    options: ALD.AbstractGetOptions,
    callback: ALD.ErrorValueCallback<(StOrArr)[]>
  ): void {
    try {
      if (options.valueEncoding == 'buffer') {
        const values = keys.map((k) => {
          const res = this._db!.getBuf(k);
          if (res == null) {
            return undefined;
          }
          return res;
        })
        this.nextTick(callback, null, values);
      }
      else {
        const values = keys.map((k) => {
          const res = this._db!.getStr(k);
          if (res == null) {
            return undefined;
          }
          return res;
        })
        this.nextTick(callback, null, values);
      }
    } catch (e) {
      this.nextTick(callback, e);
    }
  }

  protected _put(
    key: StOrArr,
    value: StOrArr,
    options: ALD.AbstractOptions,
    callback: ALD.ErrorCallback
  ): void {
    try {
      this._db!.put(key, value);
      this.nextTick(callback, null);
    } catch (e) {
      this.nextTick(callback, e);
    }
  }
  protected _del(
    key: StOrArr,
    options: ALD.AbstractOptions,
    callback: ALD.ErrorCallback
  ): void {
    try {
      this._db!.delete(key);
      this.nextTick(callback, null);
    } catch (e) {
      this.nextTick(callback, e);
    }
  }
  protected _batch(
    operations: ReadonlyArray<ALD.AbstractBatch<StOrArr, StOrArr>>,
    options: ALD.AbstractOptions,
    callback: ALD.ErrorCallback
  ): void {
    // TODO: Maybe see if we can add batch to actual react-native-leveldb?
    // Or just doing this is enough...
    try {
      for (const op of operations) {
        if (op.type == 'put') {
          console.log('put in', op.key, op.value);
          this._db!.put(op.key, op.value);
        }
        else {
          this._db!.delete(op.key);
        }
        // TODO: What to do with sublevels?
        // op.sublevel?.batch();
      }
      this.nextTick(callback, null);
    } catch (e) {
      this.nextTick(callback, e);
    }
  }

  protected _iterator(options: ALD.AbstractIteratorOptions<StOrArr>) {
    const it = new SKReactNativeLevelDownIterator(this, options);
    this._openIterators.add(it);
    return it;
  }

  // Hopefully can do this better later with native implementaion?
  // protected async _clear(options: <StOrArr>, callback: NodeCallback<void>) {
  //   // Since the native code has no clear() we just use our own iterator to get stuff then..
  //   const it = this.iterator({ ...options, values: false }); //new SKReactNativeLevelIterator(this, { ...options, values: false });
  //   try {
  //     const keys: StOrArr[] = [];
  //     while (true) {
  //       const kv = await it.next();
  //       if (!kv) {
  //         break;
  //       }
  //       keys.push(kv[0]);
  //     }
  //     for (const k of keys) {
  //       this._db!.delete(k);
  //     }
  //     this.nextTick(callback, null);
  //   } catch (e) {
  //     this.nextTick(callback, e);
  //   }
  //   it.close();
  //   // for (const a of this.iterator() as any as SKReactNativeLevelIterator) {

  //   // }
  // }
}