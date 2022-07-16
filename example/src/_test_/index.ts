import test from 'tape'
const suite = require('abstract-level/test')
import { SKReactNativeLevel } from '../../../src';

// (global as any).__dirname = 'mydir';
// (global as any).process.cwd = ()=>'mycwd';
const currentID = {
  num:0
}
function nextID() {
  currentID.num++;
  return `${currentID.num}`;
}
export function testLevelDown() {
  console.log('testing');
  suite({
    test,
    factory: (options: any) => {
      return new SKReactNativeLevel(nextID(), options)
    }
  })
  // runtest();
}