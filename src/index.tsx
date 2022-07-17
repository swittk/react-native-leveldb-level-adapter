import { AbstractBatchOperation, AbstractBatchOptions, AbstractDatabaseOptions, AbstractDelOptions, AbstractGetManyOptions, AbstractGetOptions, AbstractIterator, AbstractIteratorOptions, AbstractKeyIterator, AbstractKeyIteratorOptions, AbstractLevel, AbstractOpenOptions, AbstractPutOptions, AbstractSeekOptions, NodeCallback } from 'abstract-level';
import type { IManifest } from 'level-supports';
import { LevelDB, LevelDBIterator, } from '@switt/react-native-leveldb';
import ModuleError from 'module-error';
import type { NextCallback } from 'abstract-level/types/abstract-iterator';
import { arrayBufferEqual } from './arrayBufferEqual';

if (!(global as any).process) {
  (global as any).process = {};
}
if (!global.process.nextTick) {
  global.process.nextTick = (callback: (...args: any[]) => void, ...params: any[]) => {
    if (!params.length) {
      setImmediate(callback);
    }
    else {
      setImmediate(() => {
        callback(...params);
      });
    }
  }
}
if (!global.process.cwd) {
  global.process.cwd = () => {
    return '.';
  }
}
if (!(global as any).__dirname) {
  (global as any).__dirname = '.';
}

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
const db = new LevelDB('data', true, false);

export const SKReactNativeLevelAdapterOptions = {
  maxSyncOperations: 100
}

type StOrArr = string | ArrayBuffer;


export class SKReactNativeLevelIterator extends AbstractIterator<SKReactNativeLevel, StOrArr, StOrArr> {
  it: LevelDBIterator;
  valid: boolean = true;
  options: AbstractIteratorOptions<StOrArr, StOrArr>;
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



  constructor(db: any, options: AbstractIteratorOptions<StOrArr, StOrArr>) {
    super(db, options);
    const level = this.db._db!;
    console.log('iterator options was', options);

    this.it = level.newIterator();
    this.options = options;
    this.hasLimit = (options.limit != undefined) && (options.limit != -1);
    this.isReversed = options.reverse || false;
    this.readsKeys = (options.keys != undefined ? options.keys : true);
    this.readsValues = (options.values != undefined) ? options.values : true;

    this.keyIsBuf = options.keyEncoding == 'buffer';
    this.valueIsBuf = options.valueEncoding == 'buffer';

    let lowerBound: StOrArr | undefined;
    let upperBound: StOrArr | undefined;
    let lowerBoundIsOpen = true;
    let upperBoundIsOpen = true;
    if (options.gt != undefined) {
      lowerBound = options.gt;
      lowerBoundIsOpen = false;
    }
    else if (options.gte != undefined) {
      lowerBound = options.gte;
      lowerBoundIsOpen = true;
    }
    if (options.lt != undefined) {
      upperBound = options.lt;
      upperBoundIsOpen = false;
    }
    else if (options.lte != undefined) {
      upperBound = options.lte;
      upperBoundIsOpen = true;
    }
    const startingBound = options.reverse ? upperBound : lowerBound;
    if (startingBound) {
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
    if (endingBound) {
      this.endingBoundIsOpen = this.isReversed ? lowerBoundIsOpen : upperBoundIsOpen;
      this.endingBound = endingBound;
      // self.endingSliceStorage = ...
    }
    else {
      // nothing?
      // self.endingSliceStorage = NULL
    }
    // const {
    //   keys,
    //   values,
    //   valueEncoding,
    //   gt, gte,
    //   lt, lte,
    //   reverse, limit,
    // } = options;

    // this.it.
  }
  // An empty array signifies the natural end of the iterator
  // so simply yielding a non-empty array signifies non-end
  _next(callback: NextCallback<StOrArr, StOrArr>): void {
    console.log('next called');
    if (this.busy) {
      callback(new ModuleError('Iterator is busy', { code: 'LEVEL_ITERATOR_BUSY' }));
      return;
    }
    else if (!this.valid) {
      callback(new ModuleError('Iterator is not open', { code: 'LEVEL_ITERATOR_NOT_OPEN' }));
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
  _nextv(size: number, options: {}, callback: NodeCallback<[[StOrArr, StOrArr]]>): void {
    console.log('nextv called');
    if (this.busy) {
      callback(new ModuleError('Iterator is busy', { code: 'LEVEL_ITERATOR_BUSY' }));
      return;
    }
    else if (!this.valid) {
      callback(new ModuleError('Iterator is not open', { code: 'LEVEL_ITERATOR_NOT_OPEN' }));
      return;
    }
    // need to set busy to pass compliance
    this.busy = true;

    const it = this.it;
    const nextFn = this.options.reverse ? () => it.prev() : () => it.next();
    try {
      const outVal: [StOrArr, StOrArr][] = [];
      for (let i = 0; i < size && !this.isEnded(); i++, nextFn()) {
        let key: StOrArr = this.keyIsBuf ? it.keyBuf() : it.keyStr();
        let value: StOrArr = this.valueIsBuf ? it.valueBuf() : it.valueStr();
        outVal.push([key, value]);
      }
      this.busy = false;
      this.db.nextTick(callback, null, outVal);
    } catch (e) {
      this.busy = false;
      this.db.nextTick(callback, e);
    }
  }
  _seek(target: StOrArr, options: AbstractSeekOptions<StOrArr>): void {
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
  _close(callback: NodeCallback<void>): void {
    this.valid = false;
    this.it.close();
    this.db._openIterators.delete(this);
    this.db.nextTick(callback);
  }
  // ..

  isEnded(): boolean {
    // following https://github.com/andymatuschak/react-native-leveldown/blob/e7d14cfdf81558d15ecec76e956269081d12a40b/ios/RNLeveldown.mm#L162
    if (!this.it.valid()) {
      return true;
    }
    if (this.hasLimit && this.stepCount >= this.limit) {
      return true;
    }
    if (this.endingBound) {
      const comparison = this.it.compareKey(this.endingBound)
      if ((comparison < 0 && this.isReversed) || (comparison > 0 && !this.isReversed) || (comparison == 0 && !this.endingBoundIsOpen)) {
        return true;
      }
    }
    if (this.startingBound) {
      const comparison = this.it.compareKey(this.startingBound);
      if ((comparison > 0 && this.isReversed) || (comparison < 0 && !this.isReversed) || (comparison == 0 && !this.startingBoundIsOpen)) {
        return true;
      }
    }
    return false;
  }
}


export class SKReactNativeLevel extends AbstractLevel<string, string, string> {
  _db?: LevelDB;
  location: string;
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
  _openIterators: Set<SKReactNativeLevelIterator> = new Set();

  constructor(
    location: string,
    options?: AbstractDatabaseOptions<string, string> | undefined
  ) {
    super({
      encodings: { utf8: true },
      seek: true,
      streams: false,
      createIfMissing: true,
      errorIfExists: true,
      permanence: true,
      snapshots: false
    }, options);
    this.location = location;
  }
  _open(options: AbstractOpenOptions, callback: NodeCallback<void>): void {
    console.log('called with options', options);
    const {
      createIfMissing = true, errorIfExists = false
    } = options;
    try {
      this._db = new LevelDB(this.location, createIfMissing, errorIfExists);
      this.nextTick(callback, null);
    } catch (e: any) {
      const msg = ((e as any).message as string);
      if (msg.includes('does not exist')) {
        const err = new ModuleError(msg, { code: 'LEVEL_DATABASE_NOT_OPEN' })
        console.log('msg has does not exist');
        this.nextTick(callback, err);
      }
      else if (msg.includes('exists')) {
        const err = new ModuleError(msg, { code: 'LEVEL_DATABASE_NOT_OPEN' })
        console.log('msg has already exists');
        this.nextTick(callback, err);
        // this.nextTick(callback, e);
      }
      else {
        console.log('open error', 'type', typeof e, e.code, e.message);
        throw e;
      }
    }
  }
  _close(callback: NodeCallback<void>): void {
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
  _get(
    key: StOrArr,
    options: AbstractGetOptions<StOrArr, StOrArr>,
    callback: NodeCallback<StOrArr>
  ): void {
    let res: ArrayBuffer | string | null;

    // For abstract-level, the valueEncoding is how we check (read https://github.com/Level/abstract-level/blob/main/UPGRADING.md#100)
    if (options.valueEncoding == 'buffer') {
      res = this._db!.getBuf(key);
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

  _getMany(
    keys: (StOrArr)[],
    options: AbstractGetManyOptions<string, StOrArr>,
    callback: NodeCallback<(StOrArr)[]>
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

  _put(
    key: StOrArr,
    value: StOrArr,
    options: AbstractPutOptions<StOrArr, StOrArr>,
    callback: NodeCallback<void>
  ): void {
    try {
      this._db!.put(key, value);
      this.nextTick(callback, null);
    } catch (e) {
      this.nextTick(callback, e);
    }
  }
  _del(
    key: StOrArr,
    options: AbstractDelOptions<StOrArr>,
    callback: NodeCallback<void>
  ): void {
    try {
      this._db!.delete(key);
      this.nextTick(callback, null);
    } catch (e) {
      this.nextTick(callback, e);
    }
  }
  _batch(
    operations: Array<AbstractBatchOperation<any, StOrArr, StOrArr>>,
    options: AbstractBatchOptions<StOrArr, StOrArr>,
    callback: NodeCallback<void>
  ): void {
    // TODO: Maybe see if we can add batch to actual react-native-leveldb?
    // Or just doing this is enough...
    try {
      for (const op of operations) {
        if (op.type == 'put') {
          console.log('put in', op.key, op.value);
          this._db!.put(op.key, op.value);
          op.sublevel
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

  _iterator(options: AbstractIteratorOptions<StOrArr, StOrArr>) {
    const it = new SKReactNativeLevelIterator(this, options);
    this._openIterators.add(it);
    return it;
  }
}



let encoder = new (global as any).TextEncoder();
export function toArraybuf(str: string | ArrayBuffer): ArrayBuffer {
  if (str instanceof ArrayBuffer) {
    return str;
  }
  var uint8Arr: Uint8Array = encoder.encode(str);
  return uint8Arr.buffer;
}

/**
 * Retrns true if a is greater than b
 * @param a 
 * @param b 
 * @returns 
 */
export function arraybufGt(a: ArrayBuffer, b: ArrayBuffer): boolean {
  var keyA = new Uint8Array(a);
  var keyB = new Uint8Array(b);
  for (var i = 0; i < keyA.byteLength && i < keyB.byteLength; ++i) {
    if (keyA[i]! > keyB[i]!) {
      return true;
    }
    if (keyA[i]! < keyB[i]!) {
      return false;
    }
  }

  return keyA.byteLength > keyB.byteLength;
}

/**
 * Retrns true if a is less than b
 * @param a 
 * @param b 
 * @returns 
 */
export function arraybufLt(a: ArrayBuffer, b: ArrayBuffer): boolean {
  var keyA = new Uint8Array(a);
  var keyB = new Uint8Array(b);
  for (var i = 0; i < keyA.byteLength && i < keyB.byteLength; ++i) {
    if (keyA[i]! < keyB[i]!) {
      return true;
    }
    if (keyA[i]! > keyB[i]!) {
      return false;
    }
  }

  return keyA.byteLength < keyB.byteLength;
}

export function arraybufCompare(a: ArrayBuffer, b: ArrayBuffer): number {
  const keyA = new Uint8Array(a);
  const keyB = new Uint8Array(b);
  for (let i = 0; i < keyA.byteLength && i < keyB.byteLength; ++i) {
    if (keyA[i]! > keyB[i]!) {
      return 1;
    }
    else if (keyA[i]! < keyB[i]!) {
      return -1;
    }
    else {
      // continue;
    }
  }

  // Handle if every starting byte really was same
  if (keyA.byteLength == keyB.byteLength) {
    return 0;
  }
  else if (keyA.byteLength > keyB.byteLength) {
    return 1;
  }
  else {
    return -1;
  }
}