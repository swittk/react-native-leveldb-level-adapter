// Thanks to https://stackoverflow.com/a/52181275/4469172 answer
/**
* compare two binary arrays for equality
* @param {(ArrayBuffer|ArrayBufferView)} a
* @param {(ArrayBuffer|ArrayBufferView)} b 
*/
export function arrayBufferEqual(a: ArrayBuffer | ArrayBufferView, b: ArrayBuffer | ArrayBufferView) {
  if (a instanceof ArrayBuffer) a = new Uint8Array(a, 0);
  if (b instanceof ArrayBuffer) b = new Uint8Array(b, 0);
  if (a.byteLength != b.byteLength) return false;
  if (aligned32(a as ArrayBufferView) && aligned32(b as ArrayBufferView))
    return equal32(a as ArrayBufferView, b as ArrayBufferView);
  if (aligned16(a as ArrayBufferView) && aligned16(b as ArrayBufferView))
    return equal16(a as ArrayBufferView, b as ArrayBufferView);
  return equal8(a as ArrayBufferView, b as ArrayBufferView);
}

function equal8(a: ArrayBufferView, b: ArrayBufferView) {
  const ua = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  const ub = new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
  return compare(ua, ub);
}
function equal16(a: ArrayBufferView, b: ArrayBufferView) {
  const ua = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
  const ub = new Uint16Array(b.buffer, b.byteOffset, b.byteLength / 2);
  return compare(ua, ub);
}
function equal32(a: ArrayBufferView, b: ArrayBufferView) {
  const ua = new Uint32Array(a.buffer, a.byteOffset, a.byteLength / 4);
  const ub = new Uint32Array(b.buffer, b.byteOffset, b.byteLength / 4);
  return compare(ua, ub);
}

function compare(a: Uint8Array | Uint16Array | Uint32Array, b: Uint8Array | Uint16Array | Uint32Array) {
  for (let i = a.length; -1 < i; i -= 1) {
    if ((a[i] !== b[i])) return false;
  }
  return true;
}

function aligned16(a: ArrayBufferView) {
  return (a.byteOffset % 2 === 0) && (a.byteLength % 2 === 0);
}

function aligned32(a: ArrayBufferView) {
  return (a.byteOffset % 4 === 0) && (a.byteLength % 4 === 0);
}
