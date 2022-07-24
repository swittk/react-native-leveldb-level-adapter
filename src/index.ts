// import { AbstractBatchOperation, AbstractBatchOptions, AbstractClearOptions, AbstractDatabaseOptions, AbstractDelOptions, AbstractGetManyOptions, AbstractGetOptions, AbstractIterator, AbstractIteratorOptions, AbstractKeyIterator, AbstractKeyIteratorOptions, AbstractLevel, AbstractOpenOptions, AbstractPutOptions, AbstractSeekOptions, NodeCallback } from 'abstract-level';
// import { LevelDB, LevelDBIterator, } from '@switt/react-native-leveldb';
// import ModuleError from 'module-error';
// import type { NextCallback } from 'abstract-level/types/abstract-iterator';
// import { arrayBufferEqual } from './arrayBufferEqual';
export { SKReactNativeLevel } from './level';
// export { SKReactNativeLevelDown } from './leveldown';
export const SKReactNativeLevelAdapterOptions = {
  maxSyncOperations: 100
}

type StOrArr = string | ArrayBuffer;