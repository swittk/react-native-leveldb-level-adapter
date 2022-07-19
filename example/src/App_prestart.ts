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
  global.Buffer = require('buffer').Buffer;
}