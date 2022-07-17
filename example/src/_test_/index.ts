import test from 'tape'
const suite = require('abstract-level/test')
import { SKReactNativeLevel } from '../../../src';
import fs from 'react-native-fs';
// (global as any).__dirname = 'mydir';
// (global as any).process.cwd = ()=>'mycwd';
const currentID = {
  num: 0
}
function nextID() {
  currentID.num++;
  return `${currentID.num}`;
}
export async function testLevelDown() {
  const docsDirContent = await fs.readdir(fs.DocumentDirectoryPath);
  console.log('removing files...');
  for (const dirContent of docsDirContent) {
    // `unlink` is equivalent to rm -rf in this library
    await fs.unlink(fs.DocumentDirectoryPath + `/` + dirContent);
  }
  console.log('removed files...');
  // RNFS.unlink()
  console.log('testing');
  suite({
    test,
    factory: (options: any) => {
      console.log('factory opts', options);
      return new SKReactNativeLevel(nextID(), options)
    }
  })
  // runtest();
}