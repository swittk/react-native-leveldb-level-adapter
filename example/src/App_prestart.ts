import 'fast-text-encoding';
// (global as any).TextEncoder = TextEncoder;
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
if (!(global as any).Buffer) {
  console.log('There is no global buffer')
  global.Buffer = require('buffer').Buffer;
  (global.Buffer.constructor as any).isBuffer = global.Buffer.isBuffer;
  // console.log('is Buffer compatible with ArrayBuffer?');
}
else {
  console.log('global buffer is', global.Buffer, 'while it is equal to..?', global.Buffer == require('buffer').Buffer)
}