 LOG  There is no global buffer
 LOG  Running "LeveldbLeveldownAdapterExample" with {"rootTag":1,"initialProps":{}}
 LOG  removing files...
 LOG  removed files...
 LOG  testing abstract-level
 LOG  TAP version 13
 LOG  # testCommon.factory() returns valid database
 LOG  ok 1 is an object
 LOG  ok 2 is not null
 LOG  ok 3 has open() method
 LOG  ok 4 has on() method
 LOG  ok 5 has emit() method
 LOG  ok 6 got event
 LOG  # testCommon.factory() returns a unique database
 LOG  ok 7 unique instances
 LOG  ok 8 no error while opening db1
 LOG  ok 9 no error while opening db2
 LOG  ok 10 put key in db1
 LOG  ok 11 db2 should be empty
 LOG  ok 12 db2 should be empty
 LOG  ok 13 no error while closing db1
 LOG  ok 14 no error while closing db2
 LOG  # db has manifest
 LOG  ok 15 manifest is object
 LOG  ok 16 additionalMethods is object
 LOG  ok 17 truthy: encodings
 LOG  ok 18 truthy: seek
 LOG  ok 19 false: streams
 LOG  ok 20 truthy: createIfMissing
 LOG  ok 21 truthy: errorIfExists
 LOG  ok 22 truthy: permanence
 LOG  ok 23 false: snapshots
 LOG  ok 24 truthy: status
 LOG  ok 25 truthy: promises
 LOG  ok 26 truthy: clear
 LOG  ok 27 truthy: getMany
 LOG  ok 28 truthy: deferredOpen
 LOG  ok 29 truthy: keyIterator
 LOG  ok 30 truthy: valueIterator
 LOG  ok 31 truthy: iteratorNextv
 LOG  ok 32 truthy: iteratorAll
 LOG  ok 33 truthy: events
 LOG  ok 34 truthy: additionalMethods
 LOG  ok 35 manifest has unique identity
 LOG  ok 36 manifest.encodings has unique identity
 LOG  ok 37 manifest.events has unique identity
 LOG  ok 38 manifest.additionalMethods has unique identity
 LOG  ok 39 no open error
 LOG  ok 40 manifest did not change after open
 LOG  ok 41 no close error
 LOG  ok 42 manifest did not change after close
 LOG  # manifest has expected properties
 LOG  ok 43 should be strictly equal
 LOG  ok 44 should be strictly equal
 LOG  ok 45 should be strictly equal
 LOG  ok 46 should be strictly equal
 LOG  ok 47 can be accessed via testCommon
 LOG  ok 48 supports utf8
 LOG  ok 49 supports json
 LOG  # test database open, no options
 LOG  ok 50 should be strictly equal
 LOG  ok 51 should be strictly equal
 LOG  ok 52 undefined
 LOG  ok 53 should be strictly equal
 LOG  ok 54 should be strictly equal
 LOG  # test database open, no options, with promise
 LOG  ok 55 should be strictly equal
 LOG  ok 56 should be strictly equal
 LOG  ok 57 should be strictly equal
 LOG  # test database open, options and callback
 LOG  ok 58 undefined
 LOG  # test database open, options with promise
 LOG  # test database open, close and open
 LOG  ok 59 undefined
 LOG  ok 60 undefined
 LOG  ok 61 should be strictly equal
 LOG  ok 62 undefined
 LOG  ok 63 should be strictly equal
 LOG  # test database open, close and open with promise
 LOG  ok 64 undefined
 LOG  # test database open and close in same tick
 LOG  ok 65 is opening
 LOG  ok 66 is still opening
 LOG  ok 67 callback (anonymous) is asynchronous
 LOG  ok 68 callback (anonymous) is asynchronous
 LOG  ok 69 callback (anonymous) is asynchronous
 LOG  ok 70 got open() error
 LOG  ok 71 is closed
 LOG  ok 72 order is correct
 LOG  ok 73 no close() error
 LOG  ok 74 is closed
 LOG  # test database open, close and open in same tick
 LOG  ok 75 is opening
 LOG  ok 76 is still opening
 LOG  ok 77 is still opening
 LOG  ok 78 callback (anonymous) is asynchronous
 LOG  ok 79 callback (anonymous) is asynchronous
 LOG  ok 80 callback (anonymous) is asynchronous
 LOG  ok 81 callback (anonymous) is asynchronous
 LOG  ok 82 no open() error (1)
 LOG  ok 83 is open
 LOG  ok 84 should be strictly equal
 LOG  ok 85 is open
 LOG  ok 86 callback order is the same as call order
 LOG  ok 87 no open() error (2)
 LOG  ok 88 is open
 LOG  # test database open if already open (sequential)
 LOG  ok 89 callback (anonymous) is asynchronous
 LOG  ok 90 no open() error (1)
 LOG  ok 91 is open
 LOG  ok 92 not reopening
 LOG  ok 93 callback (anonymous) is asynchronous
 LOG  ok 94 no open() error (2)
 LOG  ok 95 is open
 LOG  # test database open if already opening (parallel)
 LOG  ok 96 should be strictly equal
 LOG  ok 97 callback (anonymous) is asynchronous
 LOG  ok 98 callback (anonymous) is asynchronous
 LOG  ok 99 no open() error (1)
 LOG  ok 100 should be strictly equal
 LOG  ok 101 no open() error (2)
 LOG  ok 102 should be strictly equal
 LOG  # test database close if already closed
 LOG  ok 103 no open() error
 LOG  ok 104 callback (anonymous) is asynchronous
 LOG  ok 105 no close() error (1)
 LOG  ok 106 is closed
 LOG  ok 107 is closed
 LOG  ok 108 callback (anonymous) is asynchronous
 LOG  ok 109 no close() error (2)
 LOG  ok 110 is closed
 LOG  # test database close if new
 LOG  ok 111 status ok
 LOG  ok 112 status unchanged
 LOG  ok 113 callback (anonymous) is asynchronous
 LOG  ok 114 no close() error
 LOG  ok 115 status ok
 LOG  # test database close on open event
 LOG  ok 116 got open() error
 LOG  ok 117 is closed
 LOG  ok 118 order is correct
 LOG  ok 119 no close() error
 LOG  ok 120 is closed
 LOG  # test passive open()
 LOG  ok 121 should be strictly equal
 LOG  # test passive open(): ignored if set in constructor options
 LOG  # test close()
 LOG  ok 122 no open() error
 LOG  ok 123 undefined
 LOG  # test close() with promise
 LOG  ok 124 no open() error
 LOG  # test database open createIfMissing:false
 LOG  msg has does not exist
 LOG  ok 125 should be strictly equal
 LOG  ok 126 error is about dir not existing
 LOG  ok 127 callback is asynchronous
 LOG  # test database open createIfMissing:false via constructor
 LOG  msg has does not exist
 LOG  ok 128 should be strictly equal
 LOG  ok 129 error is about dir not existing
 LOG  ok 130 callback is asynchronous
 LOG  # test database open errorIfExists:true
 LOG  ok 131 undefined
 LOG  ok 132 undefined
 LOG  msg has already exists
 LOG  ok 133 should be strictly equal
 LOG  ok 134 error is about already existing
 LOG  ok 135 callback is asynchronous
 LOG  # setUp db
 LOG  # test put() with illegal keys
 LOG  ok 136 callback (anonymous) is asynchronous
 LOG  ok 137 callback (anonymous) is asynchronous
 LOG  ok 138 null key - is Error (callback)
 LOG  ok 139 null key - correct error code (callback)
 LOG  ok 140 undefined key - is Error (callback)
 LOG  ok 141 undefined key - correct error code (callback)
 LOG  ok 142 null key - is Error (promise)
 LOG  ok 143 null key - correct error code (promise)
 LOG  ok 144 undefined key - is Error (promise)
 LOG  ok 145 undefined key - correct error code (promise)
 LOG  # test put() with illegal values
 LOG  ok 146 callback (anonymous) is asynchronous
 LOG  ok 147 callback (anonymous) is asynchronous
 LOG  ok 148 null key- is Error (callback)
 LOG  ok 149 null key - correct error code (callback)
 LOG  ok 150 undefined value- is Error (callback)
 LOG  ok 151 undefined value - correct error code (callback)
 LOG  ok 152 null key - is Error (promise)
 LOG  ok 153 null key - correct error code (promise)
 LOG  ok 154 undefined value - is Error (promise)
 LOG  ok 155 undefined value - correct error code (promise)
 LOG  # test simple put()
 LOG  ok 156 callback (anonymous) is asynchronous
 LOG  ok 157 no put() error
 LOG  ok 158 no get() error
 LOG  ok 159 should be strictly equal
 LOG  ok 160 no put() error
 LOG  ok 161 no get() error
 LOG  ok 162 value was overwritten
 LOG  # test simple put() with promise
 LOG  ok 163 should be strictly equal
 LOG  # test deferred put()
 LOG  ok 164 callback (anonymous) is asynchronous
 LOG  ok 165 no put() error
 LOG  ok 166 no get() error
 LOG  ok 167 value is ok
 LOG  ok 168 undefined
 LOG  # test deferred put() with promise
 LOG  ok 169 value is ok
 LOG  # test put() emits put event
 LOG  ok 170 should be truthy
 LOG  ok 171 should be strictly equal
 LOG  ok 172 should be strictly equal
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test get() with illegal keys
 LOG  ok 173 callback (anonymous) is asynchronous
 LOG  ok 174 callback (anonymous) is asynchronous
 LOG  ok 175 null key - is Error (callback)
 LOG  ok 176 null key - correct error code (callback)
 LOG  ok 177 undefined key - is Error (callback)
 LOG  ok 178 undefined key - correct error code (callback)
 LOG  ok 179 null key - is Error (promise)
 LOG  ok 180 null key - correct error code (promise)
 LOG  ok 181 undefined key - is Error (promise)
 LOG  ok 182 undefined key - correct error code (promise)
 LOG  # test simple get()
 LOG  ok 183 undefined
 LOG  ok 184 null
 LOG  ok 185 should be strictly equal
 LOG  ok 186 null
 LOG  ok 187 should be strictly equal
 LOG  ok 188 null
 LOG  ok 189 should be strictly equal
 LOG  ok 190 null
 LOG  ok 191 should be buffer
 LOG  ok 192 should be strictly equal
 LOG  # test get() with promise
 LOG  ok 193 undefined
 LOG  ok 194 got value without options
 LOG  ok 195 should error
 LOG  ok 196 correct error
 LOG  ok 197 is buffer
 LOG  ok 198 correct value
 LOG  # test simultaneous get()
 LOG  ok 199 undefined
 LOG  ok 200 null
 LOG  ok 201 should be strictly equal
 LOG  ok 202 null
 LOG  ok 203 should be strictly equal
 LOG  ok 204 null
 LOG  ok 205 should be strictly equal
 LOG  ok 206 null
 LOG  ok 207 should be strictly equal
 LOG  ok 208 null
 LOG  ok 209 should be strictly equal
 LOG  ok 210 null
 LOG  ok 211 should be strictly equal
 LOG  ok 212 null
 LOG  ok 213 should be strictly equal
 LOG  ok 214 null
 LOG  ok 215 should be strictly equal
 LOG  ok 216 null
 LOG  ok 217 should be strictly equal
 LOG  ok 218 null
 LOG  ok 219 should be strictly equal
 LOG  ok 220 should error
 LOG  ok 221 correct error
 LOG  ok 222 value is undefined
 LOG  ok 223 should error
 LOG  ok 224 correct error
 LOG  ok 225 value is undefined
 LOG  ok 226 should error
 LOG  ok 227 correct error
 LOG  ok 228 value is undefined
 LOG  ok 229 should error
 LOG  ok 230 correct error
 LOG  ok 231 value is undefined
 LOG  ok 232 should error
 LOG  ok 233 correct error
 LOG  ok 234 value is undefined
 LOG  ok 235 should error
 LOG  ok 236 correct error
 LOG  ok 237 value is undefined
 LOG  ok 238 should error
 LOG  ok 239 correct error
 LOG  ok 240 value is undefined
 LOG  ok 241 should error
 LOG  ok 242 correct error
 LOG  ok 243 value is undefined
 LOG  ok 244 should error
 LOG  ok 245 correct error
 LOG  ok 246 value is undefined
 LOG  ok 247 should error
 LOG  ok 248 correct error
 LOG  ok 249 value is undefined
 LOG  # test get() not found error is asynchronous
 LOG  ok 250 should error
 LOG  ok 251 correct error
 LOG  ok 252 value is undefined
 LOG  ok 253 callback is asynchronous
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test del() with illegal keys
 LOG  ok 254 callback (anonymous) is asynchronous
 LOG  ok 255 callback (anonymous) is asynchronous
 LOG  ok 256 null key - is Error (callback)
 LOG  ok 257 null key - correct error code (callback)
 LOG  ok 258 undefined key - is Error (callback)
 LOG  ok 259 undefined key - correct error code (callback)
 LOG  ok 260 null key - is Error (promise)
 LOG  ok 261 null key - correct error code (callback)
 LOG  ok 262 undefined key - is Error (promise)
 LOG  ok 263 undefined key - correct error code (callback)
 LOG  # test simple del()
 LOG  ok 264 undefined
 LOG  ok 265 undefined
 LOG  ok 266 entry properly deleted
 LOG  ok 267 value is undefined
 LOG  ok 268 NotFound error
 LOG  # test simple del() with promise
 LOG  ok 269 undefined
 LOG  ok 270 undefined
 LOG  ok 271 entry properly deleted
 LOG  ok 272 value is undefined
 LOG  ok 273 NotFound error
 LOG  # test del on non-existent key
 LOG  ok 274 undefined
 LOG  # test del on non-existent key, with promise
 LOG  # test del() emits del event
 LOG  ok 275 should be truthy
 LOG  ok 276 should be strictly equal
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test put()/get()/del() with `0` key
 LOG  ok 277 undefined
 LOG  ok 278 no error, has key/value for ``0` key`
 LOG  ok 279 should be strictly equal
 LOG  ok 280 no error, deleted key/value for ``0` key`
 LOG  ok 281 entry properly deleted
 LOG  ok 282 correct error
 LOG  ok 283 value is undefined
 LOG  ok 284 callback is asynchronous
 LOG  # test put()/get()/del() with empty string key
 LOG  ok 285 undefined
 LOG  ok 286 no error, has key/value for `empty string key`
 LOG  ok 287 should be strictly equal
 LOG  ok 288 no error, deleted key/value for `empty string key`
 LOG  ok 289 entry properly deleted
 LOG  ok 290 correct error
 LOG  ok 291 value is undefined
 LOG  ok 292 callback is asynchronous
 LOG  # test put()/get()/del() with long String key
 LOG  ok 293 undefined
 LOG  ok 294 no error, has key/value for `long String key`
 LOG  ok 295 should be strictly equal
 LOG  ok 296 no error, deleted key/value for `long String key`
 LOG  ok 297 entry properly deleted
 LOG  ok 298 correct error
 LOG  ok 299 value is undefined
 LOG  ok 300 callback is asynchronous
 LOG  # test put()/get()/del() with Buffer key
 LOG  ok 301 undefined
 LOG  ok 302 no error, has key/value for `Buffer key`
 LOG  ok 303 should be strictly equal
 LOG  ok 304 no error, deleted key/value for `Buffer key`
 LOG  ok 305 entry properly deleted
 LOG  ok 306 correct error
 LOG  ok 307 value is undefined
 LOG  ok 308 callback is asynchronous
 LOG  # test put()/get()/del() with empty Buffer key
 LOG  ok 309 undefined
 LOG  ok 310 no error, has key/value for `empty Buffer key`
 LOG  ok 311 should be strictly equal
 LOG  ok 312 no error, deleted key/value for `empty Buffer key`
 LOG  ok 313 entry properly deleted
 LOG  ok 314 correct error
 LOG  ok 315 value is undefined
 LOG  ok 316 callback is asynchronous
 LOG  # test put()/get()/del() with Array value
 LOG  ok 317 undefined
 LOG  ok 318 no error, has key/value for `Array value`
 LOG  ok 319 should be strictly equal
 LOG  ok 320 no error, deleted key/value for `Array value`
 LOG  ok 321 entry properly deleted
 LOG  ok 322 correct error
 LOG  ok 323 value is undefined
 LOG  ok 324 callback is asynchronous
 LOG  # test put()/get()/del() with `false` value
 LOG  ok 325 undefined
 LOG  ok 326 no error, has key/value for ``false` value`
 LOG  ok 327 should be strictly equal
 LOG  ok 328 no error, deleted key/value for ``false` value`
 LOG  ok 329 entry properly deleted
 LOG  ok 330 correct error
 LOG  ok 331 value is undefined
 LOG  ok 332 callback is asynchronous
 LOG  # test put()/get()/del() with `0` value
 LOG  ok 333 undefined
 LOG  ok 334 no error, has key/value for ``0` value`
 LOG  ok 335 should be strictly equal
 LOG  ok 336 no error, deleted key/value for ``0` value`
 LOG  ok 337 entry properly deleted
 LOG  ok 338 correct error
 LOG  ok 339 value is undefined
 LOG  ok 340 callback is asynchronous
 LOG  # test put()/get()/del() with `NaN` value
 LOG  ok 341 undefined
 LOG  ok 342 no error, has key/value for ``NaN` value`
 LOG  ok 343 should be strictly equal
 LOG  ok 344 no error, deleted key/value for ``NaN` value`
 LOG  ok 345 entry properly deleted
 LOG  ok 346 correct error
 LOG  ok 347 value is undefined
 LOG  ok 348 callback is asynchronous
 LOG  # test put()/get()/del() with empty String value
 LOG  ok 349 undefined
 LOG  ok 350 no error, has key/value for `empty String value`
 LOG  ok 351 should be strictly equal
 LOG  ok 352 no error, deleted key/value for `empty String value`
 LOG  ok 353 entry properly deleted
 LOG  ok 354 correct error
 LOG  ok 355 value is undefined
 LOG  ok 356 callback is asynchronous
 LOG  # test put()/get()/del() with empty Buffer value
 LOG  ok 357 undefined
 LOG  ok 358 no error, has key/value for `empty Buffer value`
 LOG  ok 359 should be strictly equal
 LOG  ok 360 no error, deleted key/value for `empty Buffer value`
 LOG  ok 361 entry properly deleted
 LOG  ok 362 correct error
 LOG  ok 363 value is undefined
 LOG  ok 364 callback is asynchronous
 LOG  # test put()/get()/del() with empty Array value
 LOG  ok 365 undefined
 LOG  ok 366 no error, has key/value for `empty Array value`
 LOG  ok 367 should be strictly equal
 LOG  ok 368 no error, deleted key/value for `empty Array value`
 LOG  ok 369 entry properly deleted
 LOG  ok 370 correct error
 LOG  ok 371 value is undefined
 LOG  ok 372 callback is asynchronous
 LOG  # test put()/get()/del() with long String value
 LOG  ok 373 undefined
 LOG  ok 374 no error, has key/value for `long String value`
 LOG  ok 375 should be strictly equal
 LOG  ok 376 no error, deleted key/value for `long String value`
 LOG  ok 377 entry properly deleted
 LOG  ok 378 correct error
 LOG  ok 379 value is undefined
 LOG  ok 380 callback is asynchronous
 LOG  # test put()/get()/del() with Buffer value
 LOG  ok 381 undefined
 LOG  ok 382 no error, has key/value for `Buffer value`
 LOG  not ok 383 should be strictly equal
 LOG    ---
 LOG      operator: equal
 LOG      expected: '\x00���'
 LOG      actual:   ''
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        strictEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115833:17
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:130502:21
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:124208:19
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:137770:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 384 no error, deleted key/value for `Buffer value`
 LOG  ok 385 entry properly deleted
 LOG  ok 386 correct error
 LOG  ok 387 value is undefined
 LOG  ok 388 callback is asynchronous
 LOG  # test put()/get()/del() with Array key
 LOG  ok 389 undefined
 LOG  ok 390 no error, has key/value for `Array key`
 LOG  ok 391 should be strictly equal
 LOG  ok 392 no error, deleted key/value for `Array key`
 LOG  ok 393 entry properly deleted
 LOG  ok 394 correct error
 LOG  ok 395 value is undefined
 LOG  ok 396 callback is asynchronous
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test getMany() requires an array argument (callback)
 LOG  ok 397 callback (anonymous) is asynchronous
 LOG  ok 398 callback (anonymous) is asynchronous
 LOG  ok 399 should be strictly equal
 LOG  ok 400 should be strictly equal
 LOG  ok 401 should be strictly equal
 LOG  ok 402 should be strictly equal
 LOG  # test getMany() requires an array argument (promise)
 LOG  ok 403 should be strictly equal
 LOG  ok 404 should be strictly equal
 LOG  ok 405 should be strictly equal
 LOG  ok 406 should be strictly equal
 LOG  ok 407 should be strictly equal
 LOG  ok 408 should be strictly equal
 LOG  # test getMany() with illegal keys
 LOG  ok 409 callback (anonymous) is asynchronous
 LOG  ok 410 callback (anonymous) is asynchronous
 LOG  ok 411 callback (anonymous) is asynchronous
 LOG  ok 412 callback (anonymous) is asynchronous
 LOG  ok 413 null key - is Error (callback)
 LOG  ok 414 null key - correct error code (callback)
 LOG  ok 415 null key - is Error (callback, second key)
 LOG  ok 416 null key - correct error code (callback, second key)
 LOG  ok 417 undefined key - is Error (callback)
 LOG  ok 418 undefined key - correct error code (callback)
 LOG  ok 419 undefined key - is Error (callback, second key)
 LOG  ok 420 undefined key - correct error code (callback, second key)
 LOG  ok 421 null key - is Error (promise)
 LOG  ok 422 null key - correct error code (promise)
 LOG  ok 423 null key - is Error (promise, second key)
 LOG  ok 424 null key - correct error code (promise, second key)
 LOG  ok 425 undefined key - is Error (promise)
 LOG  ok 426 undefined key - correct error code (promise)
 LOG  ok 427 undefined key - is Error (promise, second key)
 LOG  ok 428 undefined key - correct error code (promise, second key)
 LOG  # test simple getMany()
 LOG  ok 429 undefined
 LOG  ok 430 null
 LOG  ok 431 got an array
 LOG  ok 432 array has 1 element
 LOG  ok 433 should be strictly equal
 LOG  ok 434 null
 LOG  ok 435 got an array
 LOG  ok 436 array has 1 element
 LOG  ok 437 should be strictly equal
 LOG  ok 438 null
 LOG  ok 439 should be string if not buffer
 LOG  ok 440 should be deeply equivalent
 LOG  # test getMany() with multiple keys
 LOG  ok 441 undefined
 LOG  ok 442 null
 LOG  ok 443 should be deeply equivalent
 LOG  ok 444 null
 LOG  ok 445 maintains order of input keys
 LOG  # test empty getMany()
 LOG  ok 446 callback (anonymous) is asynchronous
 LOG  ok 447 callback (anonymous) is asynchronous
 LOG  ok 448 callback (anonymous) is asynchronous
 LOG  ok 449 callback (anonymous) is asynchronous
 LOG  ok 450 callback (anonymous) is asynchronous
 LOG  ok 451 callback (anonymous) is asynchronous
 LOG  ok 452 null
 LOG  ok 453 should be deeply equivalent
 LOG  ok 454 null
 LOG  ok 455 should be deeply equivalent
 LOG  ok 456 null
 LOG  ok 457 should be deeply equivalent
 LOG  ok 458 null
 LOG  ok 459 should be deeply equivalent
 LOG  ok 460 null
 LOG  ok 461 should be deeply equivalent
 LOG  ok 462 null
 LOG  ok 463 should be deeply equivalent
 LOG  # test not-found getMany()
 LOG  ok 464 callback (anonymous) is asynchronous
 LOG  ok 465 callback (anonymous) is asynchronous
 LOG  ok 466 callback (anonymous) is asynchronous
 LOG  ok 467 callback (anonymous) is asynchronous
 LOG  ok 468 callback (anonymous) is asynchronous
 LOG  ok 469 callback (anonymous) is asynchronous
 LOG  ok 470 null
 LOG  ok 471 should be deeply equivalent
 LOG  ok 472 null
 LOG  ok 473 should be deeply equivalent
 LOG  ok 474 null
 LOG  ok 475 should be deeply equivalent
 LOG  ok 476 null
 LOG  ok 477 should be deeply equivalent
 LOG  ok 478 null
 LOG  ok 479 should be deeply equivalent
 LOG  ok 480 null
 LOG  ok 481 should be deeply equivalent
 LOG  # test getMany() with promise
 LOG  ok 482 should be deeply equivalent
 LOG  ok 483 should be deeply equivalent
 LOG  ok 484 should be deeply equivalent
 LOG  ok 485 should be deeply equivalent
 LOG  ok 486 should be deeply equivalent
 LOG  ok 487 should be deeply equivalent
 LOG  # test simultaneous getMany()
 LOG  ok 488 undefined
 LOG  ok 489 null
 LOG  ok 490 should be strictly equal
 LOG  ok 491 should be strictly equal
 LOG  ok 492 null
 LOG  ok 493 should be strictly equal
 LOG  ok 494 should be strictly equal
 LOG  ok 495 null
 LOG  ok 496 should be strictly equal
 LOG  ok 497 should be strictly equal
 LOG  ok 498 null
 LOG  ok 499 should be strictly equal
 LOG  ok 500 should be strictly equal
 LOG  ok 501 null
 LOG  ok 502 should be strictly equal
 LOG  ok 503 should be strictly equal
 LOG  ok 504 null
 LOG  ok 505 should be strictly equal
 LOG  ok 506 should be strictly equal
 LOG  ok 507 null
 LOG  ok 508 should be strictly equal
 LOG  ok 509 should be strictly equal
 LOG  ok 510 null
 LOG  ok 511 should be strictly equal
 LOG  ok 512 should be strictly equal
 LOG  ok 513 null
 LOG  ok 514 should be strictly equal
 LOG  ok 515 should be strictly equal
 LOG  ok 516 null
 LOG  ok 517 should be strictly equal
 LOG  ok 518 should be strictly equal
 LOG  ok 519 null
 LOG  ok 520 should be deeply equivalent
 LOG  ok 521 null
 LOG  ok 522 should be deeply equivalent
 LOG  ok 523 null
 LOG  ok 524 should be deeply equivalent
 LOG  ok 525 null
 LOG  ok 526 should be deeply equivalent
 LOG  ok 527 null
 LOG  ok 528 should be deeply equivalent
 LOG  ok 529 null
 LOG  ok 530 should be deeply equivalent
 LOG  ok 531 null
 LOG  ok 532 should be deeply equivalent
 LOG  ok 533 null
 LOG  ok 534 should be deeply equivalent
 LOG  ok 535 null
 LOG  ok 536 should be deeply equivalent
 LOG  ok 537 null
 LOG  ok 538 should be deeply equivalent
 LOG  # test getMany() on opening db
 LOG  ok 539 should be strictly equal
 LOG  ok 540 should be strictly equal
 LOG  ok 541 (unnamed assert)
 LOG  ok 542 should be strictly equal
 LOG  ok 543 should be strictly equal
 LOG  ok 544 (unnamed assert)
 LOG  ok 545 callback (anonymous) is asynchronous
 LOG  ok 546 callback (anonymous) is asynchronous
 LOG  ok 547 callback (anonymous) is asynchronous
 LOG  ok 548 callback (anonymous) is asynchronous
 LOG  ok 549 undefined
 LOG  ok 550 undefined
 LOG  ok 551 no error
 LOG  ok 552 should be deeply equivalent
 LOG  ok 553 no error
 LOG  ok 554 should be deeply equivalent
 LOG  ok 555 no error
 LOG  ok 556 should be deeply equivalent
 LOG  ok 557 no error
 LOG  ok 558 should be deeply equivalent
 LOG  # test getMany() on closed db
 LOG  ok 559 undefined
 LOG  ok 560 undefined
 LOG  ok 561 undefined
 LOG  ok 562 callback (anonymous) is asynchronous
 LOG  ok 563 undefined
 LOG  ok 564 callback (anonymous) is asynchronous
 LOG  ok 565 should be strictly equal
 LOG  ok 566 should be strictly equal
 LOG  # test getMany() on closing db
 LOG  ok 567 undefined
 LOG  ok 568 callback (anonymous) is asynchronous
 LOG  ok 569 undefined
 LOG  ok 570 callback (anonymous) is asynchronous
 LOG  ok 571 should be strictly equal
 LOG  ok 572 should be strictly equal
 LOG  ok 573 undefined
 LOG  ok 574 undefined
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test batch() with missing `value`
 LOG  ok 575 callback (anonymous) is asynchronous
 LOG  ok 576 correct error code (callback)
 LOG  ok 577 correct error code (promise)
 LOG  # test batch() with illegal values
 LOG  ok 578 callback (anonymous) is asynchronous
 LOG  ok 579 callback (anonymous) is asynchronous
 LOG  ok 580 null key - has error (callback)
 LOG  ok 581 null key - is Error (callback)
 LOG  ok 582 correct error code (callback)
 LOG  ok 583 undefined value - has error (callback)
 LOG  ok 584 undefined value - is Error (callback)
 LOG  ok 585 correct error code (callback)
 LOG  ok 586 null key - is Error (promise)
 LOG  ok 587 null key - correct error code (promise)
 LOG  ok 588 undefined value - is Error (promise)
 LOG  ok 589 undefined value - correct error code (promise)
 LOG  # test batch() with missing `key`
 LOG  ok 590 callback (anonymous) is asynchronous
 LOG  ok 591 correct error code (callback)
 LOG  ok 592 correct error code (promise)
 LOG  # test batch() with illegal keys
 LOG  ok 593 callback (anonymous) is asynchronous
 LOG  ok 594 callback (anonymous) is asynchronous
 LOG  ok 595 null key - has error (callback)
 LOG  ok 596 null key - is Error (callback)
 LOG  ok 597 correct error code (callback)
 LOG  ok 598 undefined key - has error (callback)
 LOG  ok 599 undefined key - is Error (callback)
 LOG  ok 600 correct error code (callback)
 LOG  ok 601 null key - is Error (promise)
 LOG  ok 602 null key - correct error code (promise)
 LOG  ok 603 undefined key - is Error (promise)
 LOG  ok 604 undefined key - correct error code (promise)
 LOG  # test batch() with missing or incorrect type
 LOG  ok 605 callback (anonymous) is asynchronous
 LOG  ok 606 callback (anonymous) is asynchronous
 LOG  ok 607 should be strictly equal
 LOG  ok 608 correct error message (callback)
 LOG  ok 609 should be strictly equal
 LOG  ok 610 correct error message (callback)
 LOG  ok 611 should be strictly equal
 LOG  ok 612 correct error message (promise)
 LOG  ok 613 should be strictly equal
 LOG  ok 614 correct error message (promise)
 LOG  # test batch() with missing or nullish operations
 LOG  ok 615 callback (anonymous) is asynchronous
 LOG  ok 616 callback (anonymous) is asynchronous
 LOG  ok 617 callback (anonymous) is asynchronous
 LOG  ok 618 should be strictly equal
 LOG  ok 619 correct error message (callback)
 LOG  ok 620 should be strictly equal
 LOG  ok 621 correct error message (callback)
 LOG  ok 622 should be strictly equal
 LOG  ok 623 correct error message (callback)
 LOG  ok 624 should be strictly equal
 LOG  ok 625 correct error message (promise)
 LOG  ok 626 should be strictly equal
 LOG  ok 627 correct error message (promise)
 LOG  # test batch() with null options
 LOG  ok 628 undefined
 LOG  ok 629 resolved
 LOG  # test batch() with null operation
 LOG  ok 630 callback (anonymous) is asynchronous
 LOG  ok 631 should be strictly equal
 LOG  ok 632 correct error message (callback)
 LOG  ok 633 should be strictly equal
 LOG  ok 634 correct error message (promise)
 LOG  # test batch() with undefined operation
 LOG  ok 635 callback (anonymous) is asynchronous
 LOG  ok 636 should be strictly equal
 LOG  ok 637 correct error message (callback)
 LOG  ok 638 should be strictly equal
 LOG  ok 639 correct error message (promise)
 LOG  # test batch() with number operation
 LOG  ok 640 callback (anonymous) is asynchronous
 LOG  ok 641 should be strictly equal
 LOG  ok 642 correct error message (callback)
 LOG  ok 643 should be strictly equal
 LOG  ok 644 correct error message (promise)
 LOG  # test batch() with boolean operation
 LOG  ok 645 callback (anonymous) is asynchronous
 LOG  ok 646 should be strictly equal
 LOG  ok 647 correct error message (callback)
 LOG  ok 648 should be strictly equal
 LOG  ok 649 correct error message (promise)
 LOG  # test batch() with empty array
 LOG  ok 650 callback (anonymous) is asynchronous
 LOG  ok 651 no error from batch()
 LOG  ok 652 resolved
 LOG  # test simple batch()
 LOG  ok 653 undefined
 LOG  ok 654 null
 LOG  ok 655 should be strictly equal
 LOG  # test simple batch() with promise
 LOG  ok 656 should be strictly equal
 LOG  # test multiple batch()
 LOG  ok 657 undefined
 LOG  ok 658 null
 LOG  ok 659 should be strictly equal
 LOG  ok 660 entry not found
 LOG  ok 661 value is undefined
 LOG  ok 662 NotFound error
 LOG  ok 663 null
 LOG  ok 664 should be strictly equal
 LOG  # empty values in batch with utf8 valueEncoding
 LOG  ok 665 should be deeply equivalent
 LOG  ok 666 should be deeply equivalent
 LOG  ok 667 should be deeply equivalent
 LOG  # empty keys in batch with utf8 keyEncoding
 LOG  ok 668 got value 0
 LOG  ok 669 got value 1
 LOG  ok 670 got value 2
 LOG  # empty values in batch with buffer valueEncoding
 LOG  not ok 671 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131263:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 672 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131263:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 673 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131263:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # empty keys in batch with buffer keyEncoding
 LOG  ok 674 got value 0
 LOG  ok 675 got value 1
 LOG  ok 676 got value 2
 LOG  # empty values in batch with view valueEncoding
 LOG  not ok 677 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131261:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 678 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131261:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 679 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131261:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # empty keys in batch with view keyEncoding
 LOG  ok 680 got value 0
 LOG  ok 681 got value 1
 LOG  ok 682 got value 2
 LOG  # test batch() is atomic
 LOG  ok 683 should error
 LOG  ok 684 callback is asynchronous
 LOG  ok 685 should not be found
 LOG  ok 686 should not be found
 LOG  # test batch([]) (array-form) emits batch event
 LOG  ok 687 should be truthy
 LOG  ok 688 should be deeply equivalent
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test batch has db reference
 LOG  ok 689 should be truthy
 LOG  # test batch#put() with missing, null or undefined `value`
 LOG  ok 690 correct error code
 LOG  ok 691 length is not incremented on error
 LOG  ok 692 correct error code
 LOG  ok 693 length is not incremented on error
 LOG  ok 694 correct error code
 LOG  ok 695 length is not incremented on error
 LOG  # test batch#put() with missing, null or undefined `key`
 LOG  ok 696 correct error code
 LOG  ok 697 length is not incremented on error
 LOG  ok 698 correct error code
 LOG  ok 699 length is not incremented on error
 LOG  ok 700 correct error code
 LOG  ok 701 length is not incremented on error
 LOG  # test batch#del() with missing, null or undefined `key`
 LOG  ok 702 correct error code
 LOG  ok 703 length is not incremented on error
 LOG  ok 704 correct error code
 LOG  ok 705 length is not incremented on error
 LOG  ok 706 correct error code
 LOG  ok 707 length is not incremented on error
 LOG  # test batch#clear() doesn't throw
 LOG  # test batch#put() after write()
 LOG  ok 708 correct error code
 LOG  # test batch#del() after write()
 LOG  ok 709 correct error code
 LOG  # test batch#clear() after write()
 LOG  ok 710 correct error code
 LOG  # test batch#write() after write()
 LOG  ok 711 correct error code
 LOG  # test batch#write() with no operations
 LOG  ok 712 no error from write()
 LOG  ok 713 callback is asynchronous
 LOG  # test batch#write() with promise and no operations
 LOG  # test twice batch#close() is idempotent
 LOG  ok 714 callback is asynchronous
 LOG  # test basic batch
 LOG  ok 715 undefined
 LOG  ok 716 length was incremented
 LOG  ok 717 length is reset
 LOG  ok 718 length was incremented
 LOG  ok 719 no write() error
 LOG  ok 720 null
 LOG  ok 721 should be deeply equivalent
 LOG  # test basic batch with promise
 LOG  ok 722 undefined
 LOG  ok 723 null
 LOG  ok 724 should be deeply equivalent
 LOG  # chained batch with per-operation encoding options
 LOG  ok 725 should be deeply equivalent
 LOG  ok 726 should be deeply equivalent
 LOG  # test chained batch() emits batch event
 LOG  ok 727 should be truthy
 LOG  ok 728 should be deeply equivalent
 LOG  # test close() on chained batch event
 LOG  # tearDown
 LOG  # setUp db
 LOG  # iterator() has db reference
 LOG  ok 729 should be truthy
 LOG  # iterator() has limit and count properties
 LOG  ok 730 defaults to infinite
 LOG  ok 731 has limit property
 LOG  ok 732 has limit property
 LOG  ok 733 has limit property
 LOG  ok 734 has limit property
 LOG  ok 735 has count property
 LOG  # iterator().nextv() yields error if size is invalid
 LOG  ok 736 should be strictly equal
 LOG  ok 737 should be strictly equal
 LOG  ok 738 should be strictly equal
 LOG  ok 739 should be strictly equal
 LOG  # keys() has db reference
 LOG  ok 740 should be truthy
 LOG  # keys() has limit and count properties
 LOG  ok 741 defaults to infinite
 LOG  ok 742 has limit property
 LOG  ok 743 has limit property
 LOG  ok 744 has limit property
 LOG  ok 745 has limit property
 LOG  ok 746 has count property
 LOG  # keys().nextv() yields error if size is invalid
 LOG  ok 747 should be strictly equal
 LOG  ok 748 should be strictly equal
 LOG  ok 749 should be strictly equal
 LOG  ok 750 should be strictly equal
 LOG  # values() has db reference
 LOG  ok 751 should be truthy
 LOG  # values() has limit and count properties
 LOG  ok 752 defaults to infinite
 LOG  ok 753 has limit property
 LOG  ok 754 has limit property
 LOG  ok 755 has limit property
 LOG  ok 756 has limit property
 LOG  ok 757 has count property
 LOG  # values().nextv() yields error if size is invalid
 LOG  ok 758 should be strictly equal
 LOG  ok 759 should be strictly equal
 LOG  ok 760 should be strictly equal
 LOG  ok 761 should be strictly equal
 LOG  # iterator().close() is idempotent
 LOG  ok 762 callback is asynchronous
 LOG  # iterator().next() after close() yields error
 LOG  ok 763 undefined
 LOG  ok 764 returned error
 LOG  ok 765 correct message
 LOG  ok 766 callback is asynchronous
 LOG  # iterator().next() while busy with next() yields error
 LOG  ok 767 null
 LOG  ok 768 returned error
 LOG  ok 769 should be strictly equal
 LOG  ok 770 callback is asynchronous
 LOG  ok 771 undefined
 LOG  # iterator().next() while busy with nextv() yields error
 LOG  ok 772 null
 LOG  ok 773 returned error
 LOG  ok 774 should be strictly equal
 LOG  ok 775 callback is asynchronous
 LOG  ok 776 undefined
 LOG  # iterator().next() while busy with all() yields error
 LOG  ok 777 returned error
 LOG  ok 778 should be strictly equal
 LOG  ok 779 callback is asynchronous
 LOG  ok 780 null
 LOG  ok 781 undefined
 LOG  # iterator().nextv() after close() yields error
 LOG  ok 782 undefined
 LOG  ok 783 returned error
 LOG  ok 784 correct message
 LOG  ok 785 callback is asynchronous
 LOG  # iterator().nextv() while busy with next() yields error
 LOG  ok 786 null
 LOG  ok 787 returned error
 LOG  ok 788 should be strictly equal
 LOG  ok 789 callback is asynchronous
 LOG  ok 790 undefined
 LOG  # iterator().nextv() while busy with nextv() yields error
 LOG  ok 791 null
 LOG  ok 792 returned error
 LOG  ok 793 should be strictly equal
 LOG  ok 794 callback is asynchronous
 LOG  ok 795 undefined
 LOG  # iterator().nextv() while busy with all() yields error
 LOG  ok 796 returned error
 LOG  ok 797 should be strictly equal
 LOG  ok 798 callback is asynchronous
 LOG  ok 799 null
 LOG  ok 800 undefined
 LOG  # iterator().all() after close() yields error
 LOG  ok 801 undefined
 LOG  ok 802 returned error
 LOG  ok 803 correct message
 LOG  ok 804 callback is asynchronous
 LOG  # iterator().all() while busy with next() yields error
 LOG  ok 805 null
 LOG  ok 806 returned error
 LOG  ok 807 should be strictly equal
 LOG  ok 808 callback is asynchronous
 LOG  ok 809 undefined
 LOG  # iterator().all() while busy with nextv() yields error
 LOG  ok 810 null
 LOG  ok 811 returned error
 LOG  ok 812 should be strictly equal
 LOG  ok 813 callback is asynchronous
 LOG  ok 814 undefined
 LOG  # iterator().all() while busy with all() yields error
 LOG  ok 815 returned error
 LOG  ok 816 should be strictly equal
 LOG  ok 817 callback is asynchronous
 LOG  ok 818 null
 LOG  ok 819 undefined
 LOG  # keys().close() is idempotent
 LOG  ok 820 callback is asynchronous
 LOG  # keys().next() after close() yields error
 LOG  ok 821 undefined
 LOG  ok 822 returned error
 LOG  ok 823 correct message
 LOG  ok 824 callback is asynchronous
 LOG  # keys().next() while busy with next() yields error
 LOG  ok 825 null
 LOG  ok 826 returned error
 LOG  ok 827 should be strictly equal
 LOG  ok 828 callback is asynchronous
 LOG  ok 829 undefined
 LOG  # keys().next() while busy with nextv() yields error
 LOG  ok 830 null
 LOG  ok 831 returned error
 LOG  ok 832 should be strictly equal
 LOG  ok 833 callback is asynchronous
 LOG  ok 834 undefined
 LOG  # keys().next() while busy with all() yields error
 LOG  ok 835 returned error
 LOG  ok 836 should be strictly equal
 LOG  ok 837 callback is asynchronous
 LOG  ok 838 null
 LOG  ok 839 undefined
 LOG  # keys().nextv() after close() yields error
 LOG  ok 840 undefined
 LOG  ok 841 returned error
 LOG  ok 842 correct message
 LOG  ok 843 callback is asynchronous
 LOG  # keys().nextv() while busy with next() yields error
 LOG  ok 844 null
 LOG  ok 845 returned error
 LOG  ok 846 should be strictly equal
 LOG  ok 847 callback is asynchronous
 LOG  ok 848 undefined
 LOG  # keys().nextv() while busy with nextv() yields error
 LOG  ok 849 null
 LOG  ok 850 returned error
 LOG  ok 851 should be strictly equal
 LOG  ok 852 callback is asynchronous
 LOG  ok 853 undefined
 LOG  # keys().nextv() while busy with all() yields error
 LOG  ok 854 returned error
 LOG  ok 855 should be strictly equal
 LOG  ok 856 callback is asynchronous
 LOG  ok 857 null
 LOG  ok 858 undefined
 LOG  # keys().all() after close() yields error
 LOG  ok 859 undefined
 LOG  ok 860 returned error
 LOG  ok 861 correct message
 LOG  ok 862 callback is asynchronous
 LOG  # keys().all() while busy with next() yields error
 LOG  ok 863 null
 LOG  ok 864 returned error
 LOG  ok 865 should be strictly equal
 LOG  ok 866 callback is asynchronous
 LOG  ok 867 undefined
 LOG  # keys().all() while busy with nextv() yields error
 LOG  ok 868 null
 LOG  ok 869 returned error
 LOG  ok 870 should be strictly equal
 LOG  ok 871 callback is asynchronous
 LOG  ok 872 undefined
 LOG  # keys().all() while busy with all() yields error
 LOG  ok 873 returned error
 LOG  ok 874 should be strictly equal
 LOG  ok 875 callback is asynchronous
 LOG  ok 876 null
 LOG  ok 877 undefined
 LOG  # values().close() is idempotent
 LOG  ok 878 callback is asynchronous
 LOG  # values().next() after close() yields error
 LOG  ok 879 undefined
 LOG  ok 880 returned error
 LOG  ok 881 correct message
 LOG  ok 882 callback is asynchronous
 LOG  # values().next() while busy with next() yields error
 LOG  ok 883 null
 LOG  ok 884 returned error
 LOG  ok 885 should be strictly equal
 LOG  ok 886 callback is asynchronous
 LOG  ok 887 undefined
 LOG  # values().next() while busy with nextv() yields error
 LOG  ok 888 null
 LOG  ok 889 returned error
 LOG  ok 890 should be strictly equal
 LOG  ok 891 callback is asynchronous
 LOG  ok 892 undefined
 LOG  # values().next() while busy with all() yields error
 LOG  ok 893 returned error
 LOG  ok 894 should be strictly equal
 LOG  ok 895 callback is asynchronous
 LOG  ok 896 null
 LOG  ok 897 undefined
 LOG  # values().nextv() after close() yields error
 LOG  ok 898 undefined
 LOG  ok 899 returned error
 LOG  ok 900 correct message
 LOG  ok 901 callback is asynchronous
 LOG  # values().nextv() while busy with next() yields error
 LOG  ok 902 null
 LOG  ok 903 returned error
 LOG  ok 904 should be strictly equal
 LOG  ok 905 callback is asynchronous
 LOG  ok 906 undefined
 LOG  # values().nextv() while busy with nextv() yields error
 LOG  ok 907 null
 LOG  ok 908 returned error
 LOG  ok 909 should be strictly equal
 LOG  ok 910 callback is asynchronous
 LOG  ok 911 undefined
 LOG  # values().nextv() while busy with all() yields error
 LOG  ok 912 returned error
 LOG  ok 913 should be strictly equal
 LOG  ok 914 callback is asynchronous
 LOG  ok 915 null
 LOG  ok 916 undefined
 LOG  # values().all() after close() yields error
 LOG  ok 917 undefined
 LOG  ok 918 returned error
 LOG  ok 919 correct message
 LOG  ok 920 callback is asynchronous
 LOG  # values().all() while busy with next() yields error
 LOG  ok 921 null
 LOG  ok 922 returned error
 LOG  ok 923 should be strictly equal
 LOG  ok 924 callback is asynchronous
 LOG  ok 925 undefined
 LOG  # values().all() while busy with nextv() yields error
 LOG  ok 926 null
 LOG  ok 927 returned error
 LOG  ok 928 should be strictly equal
 LOG  ok 929 callback is asynchronous
 LOG  ok 930 undefined
 LOG  # values().all() while busy with all() yields error
 LOG  ok 931 returned error
 LOG  ok 932 should be strictly equal
 LOG  ok 933 callback is asynchronous
 LOG  ok 934 null
 LOG  ok 935 undefined
 LOG  # iterator().next() after db.close() yields error (deferred: false)
 LOG  ok 936 Optionally succeeded
 LOG  ok 937 should be strictly equal
 LOG  # iterator().nextv() after db.close() yields error (deferred: false)
 LOG  ok 938 Optionally succeeded
 LOG  ok 939 should be strictly equal
 LOG  # iterator().all() after db.close() yields error (deferred: false)
 LOG  ok 940 Optionally succeeded
 LOG  ok 941 should be strictly equal
 LOG  # keys().next() after db.close() yields error (deferred: false)
 LOG  ok 942 Optionally succeeded
 LOG  ok 943 should be strictly equal
 LOG  # keys().nextv() after db.close() yields error (deferred: false)
 LOG  ok 944 Optionally succeeded
 LOG  ok 945 should be strictly equal
 LOG  # keys().all() after db.close() yields error (deferred: false)
 LOG  ok 946 Optionally succeeded
 LOG  ok 947 should be strictly equal
 LOG  # values().next() after db.close() yields error (deferred: false)
 LOG  ok 948 Optionally succeeded
 LOG  ok 949 should be strictly equal
 LOG  # values().nextv() after db.close() yields error (deferred: false)
 LOG  ok 950 Optionally succeeded
 LOG  ok 951 should be strictly equal
 LOG  # values().all() after db.close() yields error (deferred: false)
 LOG  ok 952 Optionally succeeded
 LOG  ok 953 should be strictly equal
 LOG  # iterator().next() after db.close() yields error (deferred: true)
 LOG  ok 954 Optionally succeeded
 LOG  ok 955 should be strictly equal
 LOG  # iterator().nextv() after db.close() yields error (deferred: true)
 LOG  ok 956 Optionally succeeded
 LOG  ok 957 should be strictly equal
 LOG  # iterator().all() after db.close() yields error (deferred: true)
 LOG  ok 958 Optionally succeeded
 LOG  ok 959 should be strictly equal
 LOG  # keys().next() after db.close() yields error (deferred: true)
 LOG  ok 960 Optionally succeeded
 LOG  ok 961 should be strictly equal
 LOG  # keys().nextv() after db.close() yields error (deferred: true)
 LOG  ok 962 Optionally succeeded
 LOG  ok 963 should be strictly equal
 LOG  # keys().all() after db.close() yields error (deferred: true)
 LOG  ok 964 Optionally succeeded
 LOG  ok 965 should be strictly equal
 LOG  # values().next() after db.close() yields error (deferred: true)
 LOG  ok 966 Optionally succeeded
 LOG  ok 967 should be strictly equal
 LOG  # values().nextv() after db.close() yields error (deferred: true)
 LOG  ok 968 Optionally succeeded
 LOG  ok 969 should be strictly equal
 LOG  # values().all() after db.close() yields error (deferred: true)
 LOG  ok 970 Optionally succeeded
 LOG  ok 971 should be strictly equal
 LOG  # test simple iterator()
 LOG  ok 972 undefined
 LOG  ok 973 null
 LOG  ok 974 correct key
 LOG  ok 975 correct value
 LOG  ok 976 null
 LOG  ok 977 correct key
 LOG  ok 978 correct value
 LOG  ok 979 null
 LOG  ok 980 correct key
 LOG  ok 981 correct value
 LOG  ok 982 null
 LOG  ok 983 err argument is nullish
 LOG  ok 984 key argument is undefined
 LOG  ok 985 value argument is undefined
 LOG  ok 986 correct number of entries
 LOG  # key-only iterator
 LOG  ok 987 no next() error
 LOG  ok 988 should be strictly equal
 LOG  ok 989 should be strictly equal
 LOG  # value-only iterator
 LOG  ok 990 no next() error
 LOG  ok 991 should be strictly equal
 LOG  ok 992 should be strictly equal
 LOG  # db.keys().next()
 LOG  ok 993 no next() error
 LOG  ok 994 should be strictly equal
 LOG  # db.values().next()
 LOG  ok 995 no next() error
 LOG  ok 996 should be strictly equal
 LOG  # iterator().nextv()
 LOG  ok 997 should be deeply equivalent
 LOG  ok 998 should be deeply equivalent
 LOG  ok 999 should be deeply equivalent
 LOG  # iterator().nextv() in reverse
 LOG  ok 1000 should be deeply equivalent
 LOG  ok 1001 should be deeply equivalent
 LOG  ok 1002 should be deeply equivalent
 LOG  # iterator().nextv() has soft minimum of 1
 LOG  ok 1003 should be deeply equivalent
 LOG  ok 1004 should be deeply equivalent
 LOG  ok 1005 should be deeply equivalent
 LOG  ok 1006 should be deeply equivalent
 LOG  # iterator().nextv() requesting more than available
 LOG  ok 1007 should be deeply equivalent
 LOG  ok 1008 should be deeply equivalent
 LOG  # iterator().nextv() honors limit
 LOG  ok 1009 should be deeply equivalent
 LOG  ok 1010 should be deeply equivalent
 LOG  # iterator().nextv() honors limit in reverse
 LOG  ok 1011 should be deeply equivalent
 LOG  ok 1012 should be deeply equivalent
 LOG  # iterator().all()
 LOG  ok 1013 should be deeply equivalent
 LOG  ok 1014 should be deeply equivalent
 LOG  # iterator().all() in reverse
 LOG  ok 1015 should be deeply equivalent
 LOG  # iterator().all() honors limit
 LOG  ok 1016 should be deeply equivalent
 LOG  ok 1017 should be deeply equivalent
 LOG  ok 1018 should be deeply equivalent
 LOG  # iterator().all() honors limit in reverse
 LOG  ok 1019 should be deeply equivalent
 LOG  ok 1020 should be deeply equivalent
 LOG  ok 1021 should be deeply equivalent
 LOG  # keys().nextv()
 LOG  ok 1022 should be deeply equivalent
 LOG  ok 1023 should be deeply equivalent
 LOG  ok 1024 should be deeply equivalent
 LOG  # keys().nextv() in reverse
 LOG  ok 1025 should be deeply equivalent
 LOG  ok 1026 should be deeply equivalent
 LOG  ok 1027 should be deeply equivalent
 LOG  # keys().nextv() has soft minimum of 1
 LOG  ok 1028 should be deeply equivalent
 LOG  ok 1029 should be deeply equivalent
 LOG  ok 1030 should be deeply equivalent
 LOG  ok 1031 should be deeply equivalent
 LOG  # keys().nextv() requesting more than available
 LOG  ok 1032 should be deeply equivalent
 LOG  ok 1033 should be deeply equivalent
 LOG  # keys().nextv() honors limit
 LOG  ok 1034 should be deeply equivalent
 LOG  ok 1035 should be deeply equivalent
 LOG  # keys().nextv() honors limit in reverse
 LOG  ok 1036 should be deeply equivalent
 LOG  ok 1037 should be deeply equivalent
 LOG  # keys().all()
 LOG  ok 1038 should be deeply equivalent
 LOG  ok 1039 should be deeply equivalent
 LOG  # keys().all() in reverse
 LOG  ok 1040 should be deeply equivalent
 LOG  # keys().all() honors limit
 LOG  ok 1041 should be deeply equivalent
 LOG  ok 1042 should be deeply equivalent
 LOG  ok 1043 should be deeply equivalent
 LOG  # keys().all() honors limit in reverse
 LOG  ok 1044 should be deeply equivalent
 LOG  ok 1045 should be deeply equivalent
 LOG  ok 1046 should be deeply equivalent
 LOG  # values().nextv()
 LOG  ok 1047 should be deeply equivalent
 LOG  ok 1048 should be deeply equivalent
 LOG  ok 1049 should be deeply equivalent
 LOG  # values().nextv() in reverse
 LOG  ok 1050 should be deeply equivalent
 LOG  ok 1051 should be deeply equivalent
 LOG  ok 1052 should be deeply equivalent
 LOG  # values().nextv() has soft minimum of 1
 LOG  ok 1053 should be deeply equivalent
 LOG  ok 1054 should be deeply equivalent
 LOG  ok 1055 should be deeply equivalent
 LOG  ok 1056 should be deeply equivalent
 LOG  # values().nextv() requesting more than available
 LOG  ok 1057 should be deeply equivalent
 LOG  ok 1058 should be deeply equivalent
 LOG  # values().nextv() honors limit
 LOG  ok 1059 should be deeply equivalent
 LOG  ok 1060 should be deeply equivalent
 LOG  # values().nextv() honors limit in reverse
 LOG  ok 1061 should be deeply equivalent
 LOG  ok 1062 should be deeply equivalent
 LOG  # values().all()
 LOG  ok 1063 should be deeply equivalent
 LOG  ok 1064 should be deeply equivalent
 LOG  # values().all() in reverse
 LOG  ok 1065 should be deeply equivalent
 LOG  # values().all() honors limit
 LOG  ok 1066 should be deeply equivalent
 LOG  ok 1067 should be deeply equivalent
 LOG  ok 1068 should be deeply equivalent
 LOG  # values().all() honors limit in reverse
 LOG  ok 1069 should be deeply equivalent
 LOG  ok 1070 should be deeply equivalent
 LOG  ok 1071 should be deeply equivalent
 LOG  # iterator() sorts lexicographically
 LOG  ok 1072 should be deeply equivalent
 LOG  ok 1073 should be deeply equivalent
 LOG  # test iterator() has byte order (buffer encoding)
 LOG  ok 1074 no open() error
 LOG  ok 1075 no batch() error
 LOG  ok 1076 no all() error
 LOG  ok 1077 order is ok
 LOG  ok 1078 no all() error
 LOG  ok 1079 order is ok
 LOG  # test iterator() with byte range (buffer encoding)
 LOG  ok 1080 should be truthy
 LOG  ok 1081 should be truthy
 LOG  ok 1082 should be deeply equivalent
 LOG  ok 1083 should be truthy
 LOG  ok 1084 should be truthy
 LOG  ok 1085 should be deeply equivalent
 LOG  ok 1086 should be truthy
 LOG  ok 1087 should be truthy
 LOG  ok 1088 should be deeply equivalent
 LOG  ok 1089 should be truthy
 LOG  ok 1090 should be truthy
 LOG  ok 1091 should be deeply equivalent
 LOG  ok 1092 should be truthy
 LOG  ok 1093 should be truthy
 LOG  ok 1094 should be deeply equivalent
 LOG  ok 1095 should be truthy
 LOG  ok 1096 should be truthy
 LOG  ok 1097 should be deeply equivalent
 LOG  ok 1098 should be truthy
 LOG  ok 1099 should be truthy
 LOG  ok 1100 should be deeply equivalent
 LOG  ok 1101 should be truthy
 LOG  ok 1102 should be truthy
 LOG  ok 1103 should be deeply equivalent
 LOG  ok 1104 should be truthy
 LOG  ok 1105 should be truthy
 LOG  ok 1106 should be deeply equivalent
 LOG  ok 1107 should be truthy
 LOG  ok 1108 should be truthy
 LOG  ok 1109 should be deeply equivalent
 LOG  ok 1110 should be truthy
 LOG  ok 1111 should be truthy
 LOG  ok 1112 should be deeply equivalent
 LOG  ok 1113 should be truthy
 LOG  ok 1114 should be truthy
 LOG  ok 1115 should be deeply equivalent
 LOG  ok 1116 should be truthy
 LOG  ok 1117 should be truthy
 LOG  ok 1118 should be deeply equivalent
 LOG  ok 1119 should be truthy
 LOG  ok 1120 should be truthy
 LOG  ok 1121 should be deeply equivalent
 LOG  ok 1122 should be truthy
 LOG  ok 1123 should be truthy
 LOG  ok 1124 should be deeply equivalent
 LOG  ok 1125 should be truthy
 LOG  ok 1126 should be truthy
 LOG  ok 1127 should be deeply equivalent
 LOG  ok 1128 should be truthy
 LOG  ok 1129 should be truthy
 LOG  ok 1130 should be deeply equivalent
 LOG  ok 1131 should be truthy
 LOG  ok 1132 should be truthy
 LOG  ok 1133 should be deeply equivalent
 LOG  ok 1134 should be truthy
 LOG  ok 1135 should be truthy
 LOG  ok 1136 should be deeply equivalent
 LOG  ok 1137 should be truthy
 LOG  ok 1138 should be truthy
 LOG  ok 1139 should be deeply equivalent
 LOG  ok 1140 should be truthy
 LOG  ok 1141 should be truthy
 LOG  ok 1142 should be deeply equivalent
 LOG  ok 1143 should be truthy
 LOG  ok 1144 should be truthy
 LOG  ok 1145 should be deeply equivalent
 LOG  ok 1146 should be truthy
 LOG  ok 1147 should be truthy
 LOG  ok 1148 should be deeply equivalent
 LOG  ok 1149 should be truthy
 LOG  ok 1150 should be truthy
 LOG  ok 1151 should be deeply equivalent
 LOG  # test iterator() has byte order (view encoding)
 LOG  ok 1152 no open() error
 LOG  ok 1153 no batch() error
 LOG  ok 1154 no all() error
 LOG  ok 1155 order is ok
 LOG  ok 1156 no all() error
 LOG  ok 1157 order is ok
 LOG  # test iterator() with byte range (view encoding)
 LOG  ok 1158 should be truthy
 LOG  ok 1159 should be truthy
 LOG  ok 1160 should be deeply equivalent
 LOG  ok 1161 should be truthy
 LOG  ok 1162 should be truthy
 LOG  ok 1163 should be deeply equivalent
 LOG  ok 1164 should be truthy
 LOG  ok 1165 should be truthy
 LOG  ok 1166 should be deeply equivalent
 LOG  ok 1167 should be truthy
 LOG  ok 1168 should be truthy
 LOG  ok 1169 should be deeply equivalent
 LOG  ok 1170 should be truthy
 LOG  ok 1171 should be truthy
 LOG  ok 1172 should be deeply equivalent
 LOG  ok 1173 should be truthy
 LOG  ok 1174 should be truthy
 LOG  ok 1175 should be deeply equivalent
 LOG  ok 1176 should be truthy
 LOG  ok 1177 should be truthy
 LOG  ok 1178 should be deeply equivalent
 LOG  ok 1179 should be truthy
 LOG  ok 1180 should be truthy
 LOG  ok 1181 should be deeply equivalent
 LOG  ok 1182 should be truthy
 LOG  ok 1183 should be truthy
 LOG  ok 1184 should be deeply equivalent
 LOG  ok 1185 should be truthy
 LOG  ok 1186 should be truthy
 LOG  ok 1187 should be deeply equivalent
 LOG  ok 1188 should be truthy
 LOG  ok 1189 should be truthy
 LOG  ok 1190 should be deeply equivalent
 LOG  ok 1191 should be truthy
 LOG  ok 1192 should be truthy
 LOG  ok 1193 should be deeply equivalent
 LOG  ok 1194 should be truthy
 LOG  ok 1195 should be truthy
 LOG  ok 1196 should be deeply equivalent
 LOG  ok 1197 should be truthy
 LOG  ok 1198 should be truthy
 LOG  ok 1199 should be deeply equivalent
 LOG  ok 1200 should be truthy
 LOG  ok 1201 should be truthy
 LOG  ok 1202 should be deeply equivalent
 LOG  ok 1203 should be truthy
 LOG  ok 1204 should be truthy
 LOG  ok 1205 should be deeply equivalent
 LOG  ok 1206 should be truthy
 LOG  ok 1207 should be truthy
 LOG  ok 1208 should be deeply equivalent
 LOG  ok 1209 should be truthy
 LOG  ok 1210 should be truthy
 LOG  ok 1211 should be deeply equivalent
 LOG  ok 1212 should be truthy
 LOG  ok 1213 should be truthy
 LOG  ok 1214 should be deeply equivalent
 LOG  ok 1215 should be truthy
 LOG  ok 1216 should be truthy
 LOG  ok 1217 should be deeply equivalent
 LOG  ok 1218 should be truthy
 LOG  ok 1219 should be truthy
 LOG  ok 1220 should be deeply equivalent
 LOG  ok 1221 should be truthy
 LOG  ok 1222 should be truthy
 LOG  ok 1223 should be deeply equivalent
 LOG  ok 1224 should be truthy
 LOG  ok 1225 should be truthy
 LOG  ok 1226 should be deeply equivalent
 LOG  ok 1227 should be truthy
 LOG  ok 1228 should be truthy
 LOG  ok 1229 should be deeply equivalent
 LOG  # iterator().next() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 1230 non-deferred
 LOG  ok 1231 should be strictly equal
 LOG  ok 1232 should be strictly equal
 LOG  ok 1233 should be strictly equal
 LOG  # iterator().next() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 1234 non-deferred
 LOG  ok 1235 should be strictly equal
 LOG  ok 1236 should be strictly equal
 LOG  ok 1237 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 1238 non-deferred
 LOG  ok 1239 should be strictly equal
 LOG  ok 1240 should be strictly equal
 LOG  ok 1241 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 1242 non-deferred
 LOG  ok 1243 should be strictly equal
 LOG  ok 1244 should be strictly equal
 LOG  ok 1245 should be strictly equal
 LOG  # iterator().all() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 1246 non-deferred
 LOG  ok 1247 should be strictly equal
 LOG  ok 1248 should be strictly equal
 LOG  ok 1249 should be strictly equal
 LOG  # iterator().all() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 1250 non-deferred
 LOG  ok 1251 should be strictly equal
 LOG  ok 1252 should be strictly equal
 LOG  ok 1253 should be strictly equal
 LOG  # keys().next() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 1254 non-deferred
 LOG  ok 1255 should be strictly equal
 LOG  ok 1256 should be strictly equal
 LOG  ok 1257 should be strictly equal
 LOG  # keys().nextv() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 1258 non-deferred
 LOG  ok 1259 should be strictly equal
 LOG  ok 1260 should be strictly equal
 LOG  ok 1261 should be strictly equal
 LOG  # keys().all() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 1262 non-deferred
 LOG  ok 1263 should be strictly equal
 LOG  ok 1264 should be strictly equal
 LOG  ok 1265 should be strictly equal
 LOG  # values().next() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 1266 non-deferred
 LOG  ok 1267 should be strictly equal
 LOG  ok 1268 should be strictly equal
 LOG  ok 1269 should be strictly equal
 LOG  # values().nextv() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 1270 non-deferred
 LOG  ok 1271 should be strictly equal
 LOG  ok 1272 should be strictly equal
 LOG  ok 1273 should be strictly equal
 LOG  # values().all() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 1274 non-deferred
 LOG  ok 1275 should be strictly equal
 LOG  ok 1276 should be strictly equal
 LOG  ok 1277 should be strictly equal
 LOG  # iterator().next() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 1278 undefined
 LOG  ok 1279 should be strictly equal
 LOG  ok 1280 should be strictly equal
 LOG  ok 1281 should be strictly equal
 LOG  # iterator().next() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 1282 undefined
 LOG  ok 1283 should be strictly equal
 LOG  ok 1284 should be strictly equal
 LOG  ok 1285 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 1286 undefined
 LOG  ok 1287 should be strictly equal
 LOG  ok 1288 should be strictly equal
 LOG  ok 1289 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 1290 undefined
 LOG  ok 1291 should be strictly equal
 LOG  ok 1292 should be strictly equal
 LOG  ok 1293 should be strictly equal
 LOG  # iterator().all() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 1294 undefined
 LOG  ok 1295 should be strictly equal
 LOG  ok 1296 should be strictly equal
 LOG  ok 1297 should be strictly equal
 LOG  # iterator().all() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 1298 undefined
 LOG  ok 1299 should be strictly equal
 LOG  ok 1300 should be strictly equal
 LOG  ok 1301 should be strictly equal
 LOG  # keys().next() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 1302 undefined
 LOG  ok 1303 should be strictly equal
 LOG  ok 1304 should be strictly equal
 LOG  ok 1305 should be strictly equal
 LOG  # keys().nextv() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 1306 undefined
 LOG  ok 1307 should be strictly equal
 LOG  ok 1308 should be strictly equal
 LOG  ok 1309 should be strictly equal
 LOG  # keys().all() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 1310 undefined
 LOG  ok 1311 should be strictly equal
 LOG  ok 1312 should be strictly equal
 LOG  ok 1313 should be strictly equal
 LOG  # values().next() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 1314 undefined
 LOG  ok 1315 should be strictly equal
 LOG  ok 1316 should be strictly equal
 LOG  ok 1317 should be strictly equal
 LOG  # values().nextv() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 1318 undefined
 LOG  ok 1319 should be strictly equal
 LOG  ok 1320 should be strictly equal
 LOG  ok 1321 should be strictly equal
 LOG  # values().all() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 1322 undefined
 LOG  ok 1323 should be strictly equal
 LOG  ok 1324 should be strictly equal
 LOG  ok 1325 should be strictly equal
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test full data collection
 LOG  ok 1326 null
 LOG  ok 1327 correct number of entries
 LOG  ok 1328 should be deeply equivalent
 LOG  # test full data collection (flipped)
 LOG  ok 1329 null
 LOG  ok 1330 correct number of entries
 LOG  ok 1331 should be deeply equivalent
 LOG  # test iterator with reverse=true
 LOG  ok 1332 null
 LOG  ok 1333 correct number of entries
 LOG  ok 1334 should be deeply equivalent
 LOG  # test iterator with gte=00
 LOG  ok 1335 null
 LOG  ok 1336 correct number of entries
 LOG  ok 1337 should be deeply equivalent
 LOG  # test iterator with gte=00 (flipped)
 LOG  ok 1338 null
 LOG  ok 1339 correct number of entries
 LOG  ok 1340 should be deeply equivalent
 LOG  # test iterator with gte=50
 LOG  ok 1341 null
 LOG  ok 1342 correct number of entries
 LOG  ok 1343 should be deeply equivalent
 LOG  # test iterator with gte=50 (flipped)
 LOG  ok 1344 null
 LOG  ok 1345 correct number of entries
 LOG  ok 1346 should be deeply equivalent
 LOG  # test iterator with lte=50 and reverse=true
 LOG  ok 1347 null
 LOG  ok 1348 correct number of entries
 LOG  ok 1349 should be deeply equivalent
 LOG  # test iterator with gte=49.5 (midway)
 LOG  ok 1350 null
 LOG  ok 1351 correct number of entries
 LOG  ok 1352 should be deeply equivalent
 LOG  # test iterator with gte=49.5 (midway) (flipped)
 LOG  ok 1353 null
 LOG  ok 1354 correct number of entries
 LOG  ok 1355 should be deeply equivalent
 LOG  # test iterator with gte=49999 (midway)
 LOG  ok 1356 null
 LOG  ok 1357 correct number of entries
 LOG  ok 1358 should be deeply equivalent
 LOG  # test iterator with gte=49999 (midway) (flipped)
 LOG  ok 1359 null
 LOG  ok 1360 correct number of entries
 LOG  ok 1361 should be deeply equivalent
 LOG  # test iterator with lte=49.5 (midway) and reverse=true
 LOG  ok 1362 null
 LOG  ok 1363 correct number of entries
 LOG  ok 1364 should be deeply equivalent
 LOG  # test iterator with lt=49.5 (midway) and reverse=true
 LOG  ok 1365 null
 LOG  ok 1366 correct number of entries
 LOG  ok 1367 should be deeply equivalent
 LOG  # test iterator with lt=50 and reverse=true
 LOG  ok 1368 null
 LOG  ok 1369 correct number of entries
 LOG  ok 1370 should be deeply equivalent
 LOG  # test iterator with lte=50
 LOG  ok 1371 null
 LOG  ok 1372 correct number of entries
 LOG  ok 1373 should be deeply equivalent
 LOG  # test iterator with lte=50 (flipped)
 LOG  ok 1374 null
 LOG  ok 1375 correct number of entries
 LOG  ok 1376 should be deeply equivalent
 LOG  # test iterator with lte=50.5 (midway)
 LOG  ok 1377 null
 LOG  ok 1378 correct number of entries
 LOG  ok 1379 should be deeply equivalent
 LOG  # test iterator with lte=50.5 (midway) (flipped)
 LOG  ok 1380 null
 LOG  ok 1381 correct number of entries
 LOG  ok 1382 should be deeply equivalent
 LOG  # test iterator with lte=50555 (midway)
 LOG  ok 1383 null
 LOG  ok 1384 correct number of entries
 LOG  ok 1385 should be deeply equivalent
 LOG  # test iterator with lte=50555 (midway) (flipped)
 LOG  ok 1386 null
 LOG  ok 1387 correct number of entries
 LOG  ok 1388 should be deeply equivalent
 LOG  # test iterator with lt=50555 (midway)
 LOG  ok 1389 null
 LOG  ok 1390 correct number of entries
 LOG  ok 1391 should be deeply equivalent
 LOG  # test iterator with lt=50555 (midway) (flipped)
 LOG  ok 1392 null
 LOG  ok 1393 correct number of entries
 LOG  ok 1394 should be deeply equivalent
 LOG  # test iterator with gte=50.5 (midway) and reverse=true
 LOG  ok 1395 null
 LOG  ok 1396 correct number of entries
 LOG  ok 1397 should be deeply equivalent
 LOG  # test iterator with gt=50.5 (midway) and reverse=true
 LOG  ok 1398 null
 LOG  ok 1399 correct number of entries
 LOG  ok 1400 should be deeply equivalent
 LOG  # test iterator with gt=50 and reverse=true
 LOG  ok 1401 null
 LOG  ok 1402 correct number of entries
 LOG  ok 1403 should be deeply equivalent
 LOG  # test iterator with lte=0
 LOG  ok 1404 null
 LOG  ok 1405 correct number of entries
 LOG  ok 1406 should be deeply equivalent
 LOG  # test iterator with lte=0 (flipped)
 LOG  ok 1407 null
 LOG  ok 1408 correct number of entries
 LOG  ok 1409 should be deeply equivalent
 LOG  # test iterator with lt=0
 LOG  ok 1410 null
 LOG  ok 1411 correct number of entries
 LOG  ok 1412 should be deeply equivalent
 LOG  # test iterator with lt=0 (flipped)
 LOG  ok 1413 null
 LOG  ok 1414 correct number of entries
 LOG  ok 1415 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70
 LOG  ok 1416 null
 LOG  ok 1417 correct number of entries
 LOG  ok 1418 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 (flipped)
 LOG  ok 1419 null
 LOG  ok 1420 correct number of entries
 LOG  ok 1421 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=40 and lt=60
 LOG  ok 1422 null
 LOG  ok 1423 correct number of entries
 LOG  ok 1424 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=40 and lt=60 (flipped)
 LOG  ok 1425 null
 LOG  ok 1426 correct number of entries
 LOG  ok 1427 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=20 and lt=80
 LOG  ok 1428 null
 LOG  ok 1429 correct number of entries
 LOG  ok 1430 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=20 and lt=80 (flipped)
 LOG  ok 1431 null
 LOG  ok 1432 correct number of entries
 LOG  ok 1433 should be deeply equivalent
 LOG  # test iterator with gt=29 and lt=71
 LOG  ok 1434 null
 LOG  ok 1435 correct number of entries
 LOG  ok 1436 should be deeply equivalent
 LOG  # test iterator with gt=29 and lt=71 (flipped)
 LOG  ok 1437 null
 LOG  ok 1438 correct number of entries
 LOG  ok 1439 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and reverse=true
 LOG  ok 1440 null
 LOG  ok 1441 correct number of entries
 LOG  ok 1442 should be deeply equivalent
 LOG  # test iterator with gt=29 and lt=71 and reverse=true
 LOG  ok 1443 null
 LOG  ok 1444 correct number of entries
 LOG  ok 1445 should be deeply equivalent
 LOG  # test iterator with limit=20
 LOG  ok 1446 null
 LOG  ok 1447 correct number of entries
 LOG  ok 1448 should be deeply equivalent
 LOG  # test iterator with limit=20 and gte=20
 LOG  ok 1449 null
 LOG  ok 1450 correct number of entries
 LOG  ok 1451 should be deeply equivalent
 LOG  # test iterator with limit=20 and reverse=true
 LOG  ok 1452 null
 LOG  ok 1453 correct number of entries
 LOG  ok 1454 should be deeply equivalent
 LOG  # test iterator with limit=20 and lte=79 and reverse=true
 LOG  ok 1455 null
 LOG  ok 1456 correct number of entries
 LOG  ok 1457 should be deeply equivalent
 LOG  # test iterator with limit=-1 should iterate over whole database
 LOG  ok 1458 null
 LOG  ok 1459 correct number of entries
 LOG  ok 1460 should be deeply equivalent
 LOG  # test iterator with limit=0 should not iterate over anything
 LOG  ok 1461 null
 LOG  ok 1462 correct number of entries
 LOG  ok 1463 should be deeply equivalent
 LOG  # test iterator with lte after limit
 LOG  ok 1464 null
 LOG  ok 1465 correct number of entries
 LOG  ok 1466 should be deeply equivalent
 LOG  # test iterator with lte before limit
 LOG  ok 1467 null
 LOG  ok 1468 correct number of entries
 LOG  ok 1469 should be deeply equivalent
 LOG  # test iterator with gte after database end
 LOG  ok 1470 null
 LOG  ok 1471 correct number of entries
 LOG  ok 1472 should be deeply equivalent
 LOG  # test iterator with gte after database end (flipped)
 LOG  ok 1473 null
 LOG  ok 1474 correct number of entries
 LOG  ok 1475 should be deeply equivalent
 LOG  # test iterator with gt after database end
 LOG  ok 1476 null
 LOG  ok 1477 correct number of entries
 LOG  ok 1478 should be deeply equivalent
 LOG  # test iterator with gt after database end (flipped)
 LOG  ok 1479 null
 LOG  ok 1480 correct number of entries
 LOG  ok 1481 should be deeply equivalent
 LOG  # test iterator with lte after database end and reverse=true
 LOG  ok 1482 null
 LOG  ok 1483 correct number of entries
 LOG  ok 1484 should be deeply equivalent
 LOG  # test iterator with lt after database end
 LOG  ok 1485 null
 LOG  ok 1486 correct number of entries
 LOG  ok 1487 should be deeply equivalent
 LOG  # test iterator with lt after database end (flipped)
 LOG  ok 1488 null
 LOG  ok 1489 correct number of entries
 LOG  ok 1490 should be deeply equivalent
 LOG  # test iterator with lt at database end
 LOG  ok 1491 null
 LOG  ok 1492 correct number of entries
 LOG  ok 1493 should be deeply equivalent
 LOG  # test iterator with lt at database end (flipped)
 LOG  ok 1494 null
 LOG  ok 1495 correct number of entries
 LOG  ok 1496 should be deeply equivalent
 LOG  # test iterator with lte at database end
 LOG  ok 1497 null
 LOG  ok 1498 correct number of entries
 LOG  ok 1499 should be deeply equivalent
 LOG  # test iterator with lte at database end (flipped)
 LOG  ok 1500 null
 LOG  ok 1501 correct number of entries
 LOG  ok 1502 should be deeply equivalent
 LOG  # test iterator with lt before database end
 LOG  ok 1503 null
 LOG  ok 1504 correct number of entries
 LOG  ok 1505 should be deeply equivalent
 LOG  # test iterator with lt before database end (flipped)
 LOG  ok 1506 null
 LOG  ok 1507 correct number of entries
 LOG  ok 1508 should be deeply equivalent
 LOG  # test iterator with lte before database end
 LOG  ok 1509 null
 LOG  ok 1510 correct number of entries
 LOG  ok 1511 should be deeply equivalent
 LOG  # test iterator with lte before database end (flipped)
 LOG  ok 1512 null
 LOG  ok 1513 correct number of entries
 LOG  ok 1514 should be deeply equivalent
 LOG  # test iterator with lte and gte after database and reverse=true
 LOG  ok 1515 null
 LOG  ok 1516 correct number of entries
 LOG  ok 1517 should be deeply equivalent
 LOG  # test iterator with lt and gt after database and reverse=true
 LOG  ok 1518 null
 LOG  ok 1519 correct number of entries
 LOG  ok 1520 should be deeply equivalent
 LOG  # gt greater than lt
 LOG  ok 1521 null
 LOG  ok 1522 correct number of entries
 LOG  ok 1523 should be deeply equivalent
 LOG  # gt greater than lt (flipped)
 LOG  ok 1524 null
 LOG  ok 1525 correct number of entries
 LOG  ok 1526 should be deeply equivalent
 LOG  # gte greater than lte
 LOG  ok 1527 null
 LOG  ok 1528 correct number of entries
 LOG  ok 1529 should be deeply equivalent
 LOG  # gte greater than lte (flipped)
 LOG  ok 1530 null
 LOG  ok 1531 correct number of entries
 LOG  ok 1532 should be deeply equivalent
 LOG  # tearDown
 LOG  # setup
 LOG  ok 1533 no open() error
 LOG  ok 1534 no batch() error
 LOG  # for await...of iterator()
 LOG  ok 1535 should be deeply equivalent
 LOG  # for await...of iterator() (deferred)
 LOG  ok 1536 should be deeply equivalent
 LOG  # for await...of iterator() (empty, deferred: false)
 LOG  ok 1537 should be deeply equivalent
 LOG  # for await...of iterator() (empty, deferred: true)
 LOG  ok 1538 should be deeply equivalent
 LOG  # for await...of iterator() does not permit reuse
 LOG  ok 1539 nexted
 LOG  ok 1540 nexted
 LOG  ok 1541 should be strictly equal
 LOG  # for await...of keys()
 LOG  ok 1542 should be deeply equivalent
 LOG  # for await...of keys() (deferred)
 LOG  ok 1543 should be deeply equivalent
 LOG  # for await...of keys() (empty, deferred: false)
 LOG  ok 1544 should be deeply equivalent
 LOG  # for await...of keys() (empty, deferred: true)
 LOG  ok 1545 should be deeply equivalent
 LOG  # for await...of keys() does not permit reuse
 LOG  ok 1546 nexted
 LOG  ok 1547 nexted
 LOG  ok 1548 should be strictly equal
 LOG  # for await...of values()
 LOG  ok 1549 should be deeply equivalent
 LOG  # for await...of values() (deferred)
 LOG  ok 1550 should be deeply equivalent
 LOG  # for await...of values() (empty, deferred: false)
 LOG  ok 1551 should be deeply equivalent
 LOG  # for await...of values() (empty, deferred: true)
 LOG  ok 1552 should be deeply equivalent
 LOG  # for await...of values() does not permit reuse
 LOG  ok 1553 nexted
 LOG  ok 1554 nexted
 LOG  ok 1555 should be strictly equal
 LOG  # teardown
 LOG  ok 1556 no close() error
 LOG  # deferred open(): put() and get() on new database
 LOG  ok 1557 should be strictly equal
 LOG  ok 1558 no put() error
 LOG  ok 1559 no put() error
 LOG  ok 1560 no put() error
 LOG  ok 1561 no get() error
 LOG  ok 1562 value is ok
 LOG  ok 1563 status is ok
 LOG  ok 1564 no get() error
 LOG  ok 1565 value is ok
 LOG  ok 1566 status is ok
 LOG  ok 1567 no get() error
 LOG  ok 1568 value is ok
 LOG  ok 1569 status is ok
 LOG  ok 1570 should be truthy
 LOG  ok 1571 undefined
 LOG  # deferred open(): batch() on new database
 LOG  ok 1572 should be strictly equal
 LOG  ok 1573 no batch() error
 LOG  ok 1574 no get() error
 LOG  ok 1575 value is ok
 LOG  ok 1576 status is ok
 LOG  ok 1577 no get() error
 LOG  ok 1578 value is ok
 LOG  ok 1579 status is ok
 LOG  ok 1580 no get() error
 LOG  ok 1581 value is ok
 LOG  ok 1582 status is ok
 LOG  ok 1583 should be truthy
 LOG  ok 1584 undefined
 LOG  # deferred open(): chained batch() on new database
 LOG  ok 1585 should be strictly equal
 LOG  ok 1586 no write() error
 LOG  ok 1587 no get() error
 LOG  ok 1588 value is ok
 LOG  ok 1589 status is ok
 LOG  ok 1590 no get() error
 LOG  ok 1591 value is ok
 LOG  ok 1592 status is ok
 LOG  ok 1593 no get() error
 LOG  ok 1594 value is ok
 LOG  ok 1595 status is ok
 LOG  ok 1596 should be truthy
 LOG  ok 1597 undefined
 LOG  # deferred open(): put() and get() on reopened database
 LOG  ok 1598 should be strictly equal
 LOG  ok 1599 should be strictly equal
 LOG  ok 1600 should be strictly equal
 LOG  ok 1601 should be strictly equal
 LOG  # deferred open(): value of queued operation is not stringified
 LOG  ok 1602 undefined
 LOG  ok 1603 null
 LOG  ok 1604 should be deeply equivalent
 LOG  ok 1605 undefined
 LOG  # deferred open(): key of queued operation is not stringified
 LOG  ok 1606 undefined
 LOG  ok 1607 no next() error
 LOG  ok 1608 should be deeply equivalent
 LOG  ok 1609 undefined
 LOG  # cannot operate on closed db
 LOG  ok 1610 undefined
 LOG  ok 1611 undefined
 LOG  ok 1612 should be strictly equal
 LOG  ok 1613 should be strictly equal
 LOG  ok 1614 should be strictly equal
 LOG  ok 1615 should be strictly equal
 LOG  # cannot operate on closing db
 LOG  ok 1616 undefined
 LOG  ok 1617 should be strictly equal
 LOG  ok 1618 should be strictly equal
 LOG  ok 1619 should be strictly equal
 LOG  ok 1620 should be strictly equal
 LOG  ok 1621 undefined
 LOG  # deferred iterator - cannot operate on closed db
 LOG  ok 1622 should be truthy
 LOG  ok 1623 no error
 LOG  ok 1624 undefined
 LOG  ok 1625 should be strictly equal
 LOG  ok 1626 should be strictly equal
 LOG  ok 1627 should be strictly equal
 LOG  ok 1628 no close() error
 LOG  ok 1629 should be strictly equal
 LOG  ok 1630 should be strictly equal
 LOG  ok 1631 should be strictly equal
 LOG  # deferred iterator - cannot operate on closing db
 LOG  ok 1632 should be truthy
 LOG  ok 1633 no error
 LOG  ok 1634 no close() error
 LOG  ok 1635 should be strictly equal
 LOG  ok 1636 should be strictly equal
 LOG  ok 1637 should be strictly equal
 LOG  ok 1638 undefined
 LOG  ok 1639 should be strictly equal
 LOG  ok 1640 should be strictly equal
 LOG  ok 1641 should be strictly equal
 LOG  # setup
 LOG  # encodings default to utf8
 LOG  ok 1642 should be strictly equal
 LOG  ok 1643 should be strictly equal
 LOG  # can set encoding options in factory
 LOG  ok 1644 should be strictly equal
 LOG  ok 1645 should be strictly equal
 LOG  ok 1646 should be strictly equal
 LOG  ok 1647 should be strictly equal
 LOG  ok 1648 should be strictly equal
 LOG  ok 1649 should be strictly equal
 LOG  ok 1650 should be strictly equal
 LOG  ok 1651 should be strictly equal
 LOG  ok 1652 should be strictly equal
 LOG  ok 1653 should be strictly equal
 LOG  ok 1654 should be strictly equal
 LOG  ok 1655 should be strictly equal
 LOG  ok 1656 should be strictly equal
 LOG  ok 1657 should be strictly equal
 LOG  ok 1658 should be strictly equal
 LOG  ok 1659 should be strictly equal
 LOG  ok 1660 should be strictly equal
 LOG  ok 1661 should be strictly equal
 LOG  ok 1662 should be strictly equal
 LOG  ok 1663 should be strictly equal
 LOG  ok 1664 should be strictly equal
 LOG  ok 1665 should be strictly equal
 LOG  ok 1666 should be strictly equal
 LOG  ok 1667 should be strictly equal
 LOG  ok 1668 should be strictly equal
 LOG  ok 1669 should be strictly equal
 LOG  ok 1670 should be strictly equal
 LOG  ok 1671 should be strictly equal
 LOG  ok 1672 should be strictly equal
 LOG  ok 1673 should be strictly equal
 LOG  ok 1674 should be strictly equal
 LOG  ok 1675 should be strictly equal
 LOG  ok 1676 should be strictly equal
 LOG  ok 1677 should be strictly equal
 LOG  ok 1678 should be strictly equal
 LOG  ok 1679 should be strictly equal
 LOG  # default utf8 encoding stringifies numbers (deferred: false)
 LOG  ok 1680 should be strictly equal
 LOG  # default utf8 encoding stringifies numbers (deferred: true)
 LOG  ok 1681 should be strictly equal
 LOG  # can decode from string to json
 LOG  ok 1682 no put() error
 LOG  ok 1683 no get() error
 LOG  ok 1684 got parsed object
 LOG  # can decode from json to string
 LOG  ok 1685 no put() error
 LOG  ok 1686 no get() error
 LOG  ok 1687 got unparsed JSON string
 LOG  # getMany() skips decoding not-found values
 LOG  ok 1688 no put() error
 LOG  ok 1689 should be strictly equal
 LOG  ok 1690 no getMany() error
 LOG  ok 1691 should be deeply equivalent
 LOG  # number keys with utf8 encoding
 LOG  ok 1692 sorts lexicographically
 LOG  # teardown
 LOG  # json encoding: simple-object values (deferred: false)
 LOG  ok 1693 no init() error
 LOG  ok 1694 no batch() error
 LOG  ok 1695 no get() error
 LOG  ok 1696 should be deeply equivalent
 LOG  ok 1697 no get() error
 LOG  ok 1698 should be deeply equivalent
 LOG  ok 1699 no get() error
 LOG  ok 1700 should be deeply equivalent
 LOG  ok 1701 no get() error
 LOG  ok 1702 should be deeply equivalent
 LOG  ok 1703 no get() error
 LOG  ok 1704 should be deeply equivalent
 LOG  ok 1705 no all() error
 LOG  ok 1706 should be deeply equivalent
 LOG  # json encoding: simple-object keys (deferred: false)
 LOG  ok 1707 no init() error
 LOG  ok 1708 no batch() error
 LOG  ok 1709 no get() error
 LOG  ok 1710 should be deeply equivalent
 LOG  ok 1711 no get() error
 LOG  ok 1712 should be deeply equivalent
 LOG  ok 1713 no get() error
 LOG  ok 1714 should be deeply equivalent
 LOG  ok 1715 no get() error
 LOG  ok 1716 should be deeply equivalent
 LOG  ok 1717 no get() error
 LOG  ok 1718 should be deeply equivalent
 LOG  ok 1719 no all() error
 LOG  ok 1720 should be deeply equivalent
 LOG  # json encoding: complex-object values (deferred: false)
 LOG  ok 1721 no init() error
 LOG  ok 1722 no batch() error
 LOG  ok 1723 no get() error
 LOG  ok 1724 should be deeply equivalent
 LOG  ok 1725 no all() error
 LOG  ok 1726 should be deeply equivalent
 LOG  # json encoding: complex-object keys (deferred: false)
 LOG  ok 1727 no init() error
 LOG  ok 1728 no batch() error
 LOG  ok 1729 no get() error
 LOG  ok 1730 should be deeply equivalent
 LOG  ok 1731 no all() error
 LOG  ok 1732 should be deeply equivalent
 LOG  # json encoding: simple-object values (deferred: true)
 LOG  ok 1733 no init() error
 LOG  ok 1734 no batch() error
 LOG  ok 1735 no get() error
 LOG  ok 1736 should be deeply equivalent
 LOG  ok 1737 no get() error
 LOG  ok 1738 should be deeply equivalent
 LOG  ok 1739 no get() error
 LOG  ok 1740 should be deeply equivalent
 LOG  ok 1741 no get() error
 LOG  ok 1742 should be deeply equivalent
 LOG  ok 1743 no get() error
 LOG  ok 1744 should be deeply equivalent
 LOG  ok 1745 no all() error
 LOG  ok 1746 should be deeply equivalent
 LOG  # json encoding: simple-object keys (deferred: true)
 LOG  ok 1747 no init() error
 LOG  ok 1748 no batch() error
 LOG  ok 1749 no get() error
 LOG  ok 1750 should be deeply equivalent
 LOG  ok 1751 no get() error
 LOG  ok 1752 should be deeply equivalent
 LOG  ok 1753 no get() error
 LOG  ok 1754 should be deeply equivalent
 LOG  ok 1755 no get() error
 LOG  ok 1756 should be deeply equivalent
 LOG  ok 1757 no get() error
 LOG  ok 1758 should be deeply equivalent
 LOG  ok 1759 no all() error
 LOG  ok 1760 should be deeply equivalent
 LOG  # json encoding: complex-object values (deferred: true)
 LOG  ok 1761 no init() error
 LOG  ok 1762 no batch() error
 LOG  ok 1763 no get() error
 LOG  ok 1764 should be deeply equivalent
 LOG  ok 1765 no all() error
 LOG  ok 1766 should be deeply equivalent
 LOG  # json encoding: complex-object keys (deferred: true)
 LOG  ok 1767 no init() error
 LOG  ok 1768 no batch() error
 LOG  ok 1769 no get() error
 LOG  ok 1770 should be deeply equivalent
 LOG  ok 1771 no all() error
 LOG  ok 1772 should be deeply equivalent
 LOG  # custom encoding: simple-object values (deferred: false)
 LOG  ok 1773 no init() error
 LOG  ok 1774 no batch() error
 LOG  ok 1775 no get() error
 LOG  ok 1776 should be deeply equivalent
 LOG  ok 1777 no get() error
 LOG  ok 1778 should be deeply equivalent
 LOG  ok 1779 no get() error
 LOG  ok 1780 should be deeply equivalent
 LOG  ok 1781 no get() error
 LOG  ok 1782 should be deeply equivalent
 LOG  ok 1783 no get() error
 LOG  ok 1784 should be deeply equivalent
 LOG  # custom encoding: simple-object keys (deferred: false)
 LOG  ok 1785 no init() error
 LOG  ok 1786 no batch() error
 LOG  ok 1787 no get() error
 LOG  ok 1788 should be deeply equivalent
 LOG  ok 1789 no get() error
 LOG  ok 1790 should be deeply equivalent
 LOG  ok 1791 no get() error
 LOG  ok 1792 should be deeply equivalent
 LOG  ok 1793 no get() error
 LOG  ok 1794 should be deeply equivalent
 LOG  ok 1795 no get() error
 LOG  ok 1796 should be deeply equivalent
 LOG  # custom encoding: complex-object values (deferred: false)
 LOG  ok 1797 no init() error
 LOG  ok 1798 no batch() error
 LOG  ok 1799 no get() error
 LOG  ok 1800 should be deeply equivalent
 LOG  # custom encoding: complex-object keys (deferred: false)
 LOG  ok 1801 no init() error
 LOG  ok 1802 no batch() error
 LOG  ok 1803 no get() error
 LOG  ok 1804 should be deeply equivalent
 LOG  ok 1805 no get() error
 LOG  ok 1806 should be deeply equivalent
 LOG  # custom encoding: simple-object values (deferred: true)
 LOG  ok 1807 no init() error
 LOG  ok 1808 no batch() error
 LOG  ok 1809 no get() error
 LOG  ok 1810 should be deeply equivalent
 LOG  ok 1811 no get() error
 LOG  ok 1812 should be deeply equivalent
 LOG  ok 1813 no get() error
 LOG  ok 1814 should be deeply equivalent
 LOG  ok 1815 no get() error
 LOG  ok 1816 should be deeply equivalent
 LOG  ok 1817 no get() error
 LOG  ok 1818 should be deeply equivalent
 LOG  # custom encoding: simple-object keys (deferred: true)
 LOG  ok 1819 no init() error
 LOG  ok 1820 no batch() error
 LOG  ok 1821 no get() error
 LOG  ok 1822 should be deeply equivalent
 LOG  ok 1823 no get() error
 LOG  ok 1824 should be deeply equivalent
 LOG  ok 1825 no get() error
 LOG  ok 1826 should be deeply equivalent
 LOG  ok 1827 no get() error
 LOG  ok 1828 should be deeply equivalent
 LOG  ok 1829 no get() error
 LOG  ok 1830 should be deeply equivalent
 LOG  # custom encoding: complex-object values (deferred: true)
 LOG  ok 1831 no init() error
 LOG  ok 1832 no batch() error
 LOG  ok 1833 no get() error
 LOG  ok 1834 should be deeply equivalent
 LOG  # custom encoding: complex-object keys (deferred: true)
 LOG  ok 1835 no init() error
 LOG  ok 1836 no batch() error
 LOG  ok 1837 no get() error
 LOG  ok 1838 should be deeply equivalent
 LOG  ok 1839 no get() error
 LOG  ok 1840 should be deeply equivalent
 LOG  # test put() and get() with buffer value and buffer valueEncoding
 LOG  not ok 1841 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:134928:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # test put() and get() with buffer value and buffer valueEncoding in factory
 LOG  not ok 1842 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:134962:35
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # test put() and get() with buffer key and buffer keyEncoding
 LOG  ok 1843 should be deeply equivalent
 LOG  # test put() and get() with buffer key and utf8 keyEncoding
 LOG  ok 1844 should be deeply equivalent
 LOG  # test put() and get() with string value and buffer valueEncoding
 LOG  not ok 1845 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 66 6f 6f f0 9f 90 84>
 LOG      actual:   <Buffer 66 6f 6f f0 9f 90 84>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee5$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135068:35
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 1846 should be deeply equivalent
 LOG  # put() as string, get() as buffer and vice versa
 LOG  not ok 1847 got buffer value
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer f0 9f 90 84>
 LOG      actual:   <Buffer f0 9f 90 84>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee6$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135114:27
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 1848 got string value
 LOG  # put() stringifies input to buffer
 LOG  not ok 1849 key was stringified
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 31>
 LOG      actual:   <Buffer 31>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee9$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135175:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 1850 value was stringified
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 32>
 LOG      actual:   <Buffer 32>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee9$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135176:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as string, iterate as buffer
 LOG  not ok 1851 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      actual:   [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee10$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135211:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as buffer, iterate as string
 LOG  ok 1852 should be deeply equivalent
 LOG  # put() as view, iterate as view
 LOG  not ok 1853 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      actual:   [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee12$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135281:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as string, iterate as view
 LOG  not ok 1854 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      actual:   [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee13$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135319:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as view, iterate as string
 LOG  ok 1855 should be deeply equivalent
 LOG  # batch() with multiple puts with buffer valueEncoding per batch
 LOG  not ok 1856 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee15$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135402:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 1857 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee15$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135414:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 1858 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      actual:   <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee15$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135426:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # batch() with multiple puts with buffer valueEncoding per operation
 LOG  not ok 1859 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee16$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135475:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 1860 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee16$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135487:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 1861 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      actual:   <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee16$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135499:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # batch() with buffer encoding in factory
 LOG  not ok 1862 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 04 05 06>
 LOG      actual:   <Buffer 04 05 06>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee17$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135543:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 1863 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 0a 0b 0c>
 LOG      actual:   <Buffer 0a 0b 0c>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee17$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135553:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # storage is byte-aware (buffer encoding)
 LOG  ok 1864 no open error
 LOG  ok 1865 would be equal when not byte-aware
 LOG  ok 1866 but greater when byte-aware
 LOG  ok 1867 no put() error
 LOG  ok 1868 no get() error
 LOG  ok 1869 value one ok
 LOG  ok 1870 no put() error
 LOG  ok 1871 no get() error
 LOG  ok 1872 value one did not change
 LOG  # storage is byte-aware (view encoding)
 LOG  ok 1873 no open error
 LOG  ok 1874 would be equal when not byte-aware
 LOG  ok 1875 but greater when byte-aware
 LOG  ok 1876 no put() error
 LOG  ok 1877 no get() error
 LOG  ok 1878 value one ok
 LOG  ok 1879 no put() error
 LOG  ok 1880 no get() error
 LOG  ok 1881 value one did not change
 LOG  # setup
 LOG  # get() and getMany() forward decode error
 LOG  ok 1882 no put() error
 LOG  ok 1883 should be strictly equal
 LOG  ok 1884 should be strictly equal
 LOG  ok 1885 should be strictly equal
 LOG  ok 1886 should be strictly equal
 LOG  ok 1887 should be strictly equal
 LOG  ok 1888 should be strictly equal
 LOG  # get() and getMany() yield encoding error if stored value is invalid
 LOG  ok 1889 no put() error
 LOG  ok 1890 should be strictly equal
 LOG  ok 1891 should be strictly equal
 LOG  ok 1892 should be strictly equal
 LOG  ok 1893 should be strictly equal
 LOG  # teardown
 LOG  # iterator().seek() throws if next() has not completed (deferred: false)
 LOG  ok 1894 should throw
 LOG  # iterator().seek() does not throw after close() (deferred: false)
 LOG  ok 1895 should not throw
 LOG  # keys().seek() throws if next() has not completed (deferred: false)
 LOG  ok 1896 should throw
 LOG  # keys().seek() does not throw after close() (deferred: false)
 LOG  ok 1897 should not throw
 LOG  # values().seek() throws if next() has not completed (deferred: false)
 LOG  ok 1898 should throw
 LOG  # values().seek() does not throw after close() (deferred: false)
 LOG  ok 1899 should not throw
 LOG  # iterator().seek() throws if next() has not completed (deferred: true)
 LOG  ok 1900 should throw
 LOG  # iterator().seek() does not throw after close() (deferred: true)
 LOG  ok 1901 should not throw
 LOG  # keys().seek() throws if next() has not completed (deferred: true)
 LOG  ok 1902 should throw
 LOG  # keys().seek() does not throw after close() (deferred: true)
 LOG  ok 1903 should not throw
 LOG  # values().seek() throws if next() has not completed (deferred: true)
 LOG  ok 1904 should throw
 LOG  # values().seek() does not throw after close() (deferred: true)
 LOG  ok 1905 should not throw
 LOG  # iterator().seek() to string target
 LOG  ok 1906 match
 LOG  ok 1907 end of iterator
 LOG  # iterator().seek() to buffer target
 LOG  not ok 1908 match
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ <Buffer 74 77 6f>, '2' ]
 LOG      actual:   [ <Buffer 74 77 6f>, '2' ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee4$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135888:39
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 1909 end of iterator
 LOG  # iterator().seek() to target with custom encoding
 LOG  ok 1910 match
 LOG  ok 1911 end of iterator
 LOG  # iterator().seek() on reverse iterator
 LOG  ok 1912 match
 LOG  ok 1913 end of iterator
 LOG  # iterator().seek() to out of range target
 LOG  ok 1914 end of iterator
 LOG  # iterator().seek() on reverse iterator to out of range target
 LOG  ok 1915 match
 LOG  ok 1916 match
 LOG  ok 1917 match
 LOG  ok 1918 end of iterator
 LOG  # iterator().seek() respects range
 LOG  ok 1919 no error from open()
 LOG  ok 1920 no error from batch()
 LOG  ok 1921 no error from next()
 LOG  ok 1922 seek(4) on {"gt":"5"} yields undefined
 LOG  ok 1923 no error from next()
 LOG  ok 1924 seek(5) on {"gt":"5"} yields undefined
 LOG  ok 1925 no error from next()
 LOG  ok 1926 seek(6) on {"gt":"5"} yields 6
 LOG  ok 1927 no error from next()
 LOG  ok 1928 seek(4) on {"gte":"5"} yields undefined
 LOG  ok 1929 no error from next()
 LOG  ok 1930 seek(5) on {"gte":"5"} yields 5
 LOG  ok 1931 no error from next()
 LOG  ok 1932 seek(6) on {"gte":"5"} yields 6
 LOG  ok 1933 no error from next()
 LOG  ok 1934 seek(4) on {"gte":"5","gt":"7"} yields undefined
 LOG  ok 1935 no error from next()
 LOG  ok 1936 seek(5) on {"gte":"5","gt":"7"} yields 5
 LOG  ok 1937 no error from next()
 LOG  ok 1938 seek(6) on {"gte":"5","gt":"7"} yields 6
 LOG  ok 1939 no error from next()
 LOG  ok 1940 seek(4) on {"gte":"5","gt":"3"} yields undefined
 LOG  ok 1941 no error from next()
 LOG  ok 1942 seek(5) on {"gte":"5","gt":"3"} yields 5
 LOG  ok 1943 no error from next()
 LOG  ok 1944 seek(6) on {"gte":"5","gt":"3"} yields 6
 LOG  ok 1945 no error from next()
 LOG  ok 1946 seek(4) on {"lt":"5"} yields 4
 LOG  ok 1947 no error from next()
 LOG  ok 1948 seek(5) on {"lt":"5"} yields undefined
 LOG  ok 1949 no error from next()
 LOG  ok 1950 seek(6) on {"lt":"5"} yields undefined
 LOG  ok 1951 no error from next()
 LOG  ok 1952 seek(4) on {"lte":"5"} yields 4
 LOG  ok 1953 no error from next()
 LOG  ok 1954 seek(5) on {"lte":"5"} yields 5
 LOG  ok 1955 no error from next()
 LOG  ok 1956 seek(6) on {"lte":"5"} yields undefined
 LOG  ok 1957 no error from next()
 LOG  ok 1958 seek(4) on {"lte":"5","lt":"3"} yields 4
 LOG  ok 1959 no error from next()
 LOG  ok 1960 seek(5) on {"lte":"5","lt":"3"} yields 5
 LOG  ok 1961 no error from next()
 LOG  ok 1962 seek(6) on {"lte":"5","lt":"3"} yields undefined
 LOG  ok 1963 no error from next()
 LOG  ok 1964 seek(4) on {"lte":"5","lt":"7"} yields 4
 LOG  ok 1965 no error from next()
 LOG  ok 1966 seek(5) on {"lte":"5","lt":"7"} yields 5
 LOG  ok 1967 no error from next()
 LOG  ok 1968 seek(6) on {"lte":"5","lt":"7"} yields undefined
 LOG  ok 1969 no error from next()
 LOG  ok 1970 seek(4) on {"lt":"5","reverse":true} yields 4
 LOG  ok 1971 no error from next()
 LOG  ok 1972 seek(5) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 1973 no error from next()
 LOG  ok 1974 seek(6) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 1975 no error from next()
 LOG  ok 1976 seek(4) on {"lte":"5","reverse":true} yields 4
 LOG  ok 1977 no error from next()
 LOG  ok 1978 seek(5) on {"lte":"5","reverse":true} yields 5
 LOG  ok 1979 no error from next()
 LOG  ok 1980 seek(6) on {"lte":"5","reverse":true} yields undefined
 LOG  ok 1981 no error from next()
 LOG  ok 1982 seek(4) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 1983 no error from next()
 LOG  ok 1984 seek(5) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 1985 no error from next()
 LOG  ok 1986 seek(6) on {"gt":"5","reverse":true} yields 6
 LOG  ok 1987 no error from next()
 LOG  ok 1988 seek(4) on {"gte":"5","reverse":true} yields undefined
 LOG  ok 1989 no error from next()
 LOG  ok 1990 seek(5) on {"gte":"5","reverse":true} yields 5
 LOG  ok 1991 no error from next()
 LOG  ok 1992 seek(6) on {"gte":"5","reverse":true} yields 6
 LOG  ok 1993 no error from next()
 LOG  ok 1994 seek(7) on {"gt":"7","lt":"8"} yields undefined
 LOG  ok 1995 no error from next()
 LOG  ok 1996 seek(7) on {"gte":"7","lt":"8"} yields 7
 LOG  ok 1997 no error from next()
 LOG  ok 1998 seek(8) on {"gte":"7","lt":"8"} yields undefined
 LOG  ok 1999 no error from next()
 LOG  ok 2000 seek(8) on {"gt":"7","lte":"8"} yields 8
 LOG  ok 2001 no error from close()
 LOG  ok 2002 no error from close()
 LOG  ok 2003 no error from close()
 LOG  ok 2004 no error from close()
 LOG  ok 2005 no error from close()
 LOG  ok 2006 no error from close()
 LOG  ok 2007 no error from close()
 LOG  ok 2008 no error from close()
 LOG  ok 2009 no error from close()
 LOG  ok 2010 no error from close()
 LOG  ok 2011 no error from close()
 LOG  ok 2012 no error from close()
 LOG  ok 2013 no error from close()
 LOG  ok 2014 no error from close()
 LOG  ok 2015 no error from close()
 LOG  ok 2016 no error from close()
 LOG  ok 2017 no error from close()
 LOG  ok 2018 no error from close()
 LOG  ok 2019 no error from close()
 LOG  ok 2020 no error from close()
 LOG  ok 2021 no error from close()
 LOG  ok 2022 no error from close()
 LOG  ok 2023 no error from close()
 LOG  ok 2024 no error from close()
 LOG  ok 2025 no error from close()
 LOG  ok 2026 no error from close()
 LOG  ok 2027 no error from close()
 LOG  ok 2028 no error from close()
 LOG  ok 2029 no error from close()
 LOG  ok 2030 no error from close()
 LOG  ok 2031 no error from close()
 LOG  ok 2032 no error from close()
 LOG  ok 2033 no error from close()
 LOG  ok 2034 no error from close()
 LOG  ok 2035 no error from close()
 LOG  ok 2036 no error from close()
 LOG  ok 2037 no error from close()
 LOG  ok 2038 no error from close()
 LOG  ok 2039 no error from close()
 LOG  ok 2040 no error from close()
 LOG  # keys().seek() to string target
 LOG  ok 2041 match
 LOG  ok 2042 end of iterator
 LOG  # keys().seek() to buffer target
 LOG  not ok 2043 match
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 74 77 6f>
 LOG      actual:   <Buffer 74 77 6f>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee4$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135888:39
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 2044 end of iterator
 LOG  # keys().seek() to target with custom encoding
 LOG  ok 2045 match
 LOG  ok 2046 end of iterator
 LOG  # keys().seek() on reverse iterator
 LOG  ok 2047 match
 LOG  ok 2048 end of iterator
 LOG  # keys().seek() to out of range target
 LOG  ok 2049 end of iterator
 LOG  # keys().seek() on reverse iterator to out of range target
 LOG  ok 2050 match
 LOG  ok 2051 match
 LOG  ok 2052 match
 LOG  ok 2053 end of iterator
 LOG  # keys().seek() respects range
 LOG  ok 2054 no error from open()
 LOG  ok 2055 no error from batch()
 LOG  ok 2056 no error from next()
 LOG  ok 2057 seek(4) on {"gt":"5"} yields undefined
 LOG  ok 2058 no error from next()
 LOG  ok 2059 seek(5) on {"gt":"5"} yields undefined
 LOG  ok 2060 no error from next()
 LOG  ok 2061 seek(6) on {"gt":"5"} yields 6
 LOG  ok 2062 no error from next()
 LOG  ok 2063 seek(4) on {"gte":"5"} yields undefined
 LOG  ok 2064 no error from next()
 LOG  ok 2065 seek(5) on {"gte":"5"} yields 5
 LOG  ok 2066 no error from next()
 LOG  ok 2067 seek(6) on {"gte":"5"} yields 6
 LOG  ok 2068 no error from next()
 LOG  ok 2069 seek(4) on {"gte":"5","gt":"7"} yields undefined
 LOG  ok 2070 no error from next()
 LOG  ok 2071 seek(5) on {"gte":"5","gt":"7"} yields 5
 LOG  ok 2072 no error from next()
 LOG  ok 2073 seek(6) on {"gte":"5","gt":"7"} yields 6
 LOG  ok 2074 no error from next()
 LOG  ok 2075 seek(4) on {"gte":"5","gt":"3"} yields undefined
 LOG  ok 2076 no error from next()
 LOG  ok 2077 seek(5) on {"gte":"5","gt":"3"} yields 5
 LOG  ok 2078 no error from next()
 LOG  ok 2079 seek(6) on {"gte":"5","gt":"3"} yields 6
 LOG  ok 2080 no error from next()
 LOG  ok 2081 seek(4) on {"lt":"5"} yields 4
 LOG  ok 2082 no error from next()
 LOG  ok 2083 seek(5) on {"lt":"5"} yields undefined
 LOG  ok 2084 no error from next()
 LOG  ok 2085 seek(6) on {"lt":"5"} yields undefined
 LOG  ok 2086 no error from next()
 LOG  ok 2087 seek(4) on {"lte":"5"} yields 4
 LOG  ok 2088 no error from next()
 LOG  ok 2089 seek(5) on {"lte":"5"} yields 5
 LOG  ok 2090 no error from next()
 LOG  ok 2091 seek(6) on {"lte":"5"} yields undefined
 LOG  ok 2092 no error from next()
 LOG  ok 2093 seek(4) on {"lte":"5","lt":"3"} yields 4
 LOG  ok 2094 no error from next()
 LOG  ok 2095 seek(5) on {"lte":"5","lt":"3"} yields 5
 LOG  ok 2096 no error from next()
 LOG  ok 2097 seek(6) on {"lte":"5","lt":"3"} yields undefined
 LOG  ok 2098 no error from next()
 LOG  ok 2099 seek(4) on {"lte":"5","lt":"7"} yields 4
 LOG  ok 2100 no error from next()
 LOG  ok 2101 seek(5) on {"lte":"5","lt":"7"} yields 5
 LOG  ok 2102 no error from next()
 LOG  ok 2103 seek(6) on {"lte":"5","lt":"7"} yields undefined
 LOG  ok 2104 no error from next()
 LOG  ok 2105 seek(4) on {"lt":"5","reverse":true} yields 4
 LOG  ok 2106 no error from next()
 LOG  ok 2107 seek(5) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 2108 no error from next()
 LOG  ok 2109 seek(6) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 2110 no error from next()
 LOG  ok 2111 seek(4) on {"lte":"5","reverse":true} yields 4
 LOG  ok 2112 no error from next()
 LOG  ok 2113 seek(5) on {"lte":"5","reverse":true} yields 5
 LOG  ok 2114 no error from next()
 LOG  ok 2115 seek(6) on {"lte":"5","reverse":true} yields undefined
 LOG  ok 2116 no error from next()
 LOG  ok 2117 seek(4) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 2118 no error from next()
 LOG  ok 2119 seek(5) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 2120 no error from next()
 LOG  ok 2121 seek(6) on {"gt":"5","reverse":true} yields 6
 LOG  ok 2122 no error from next()
 LOG  ok 2123 seek(4) on {"gte":"5","reverse":true} yields undefined
 LOG  ok 2124 no error from next()
 LOG  ok 2125 seek(5) on {"gte":"5","reverse":true} yields 5
 LOG  ok 2126 no error from next()
 LOG  ok 2127 seek(6) on {"gte":"5","reverse":true} yields 6
 LOG  ok 2128 no error from next()
 LOG  ok 2129 seek(7) on {"gt":"7","lt":"8"} yields undefined
 LOG  ok 2130 no error from next()
 LOG  ok 2131 seek(7) on {"gte":"7","lt":"8"} yields 7
 LOG  ok 2132 no error from next()
 LOG  ok 2133 seek(8) on {"gte":"7","lt":"8"} yields undefined
 LOG  ok 2134 no error from next()
 LOG  ok 2135 seek(8) on {"gt":"7","lte":"8"} yields 8
 LOG  ok 2136 no error from close()
 LOG  ok 2137 no error from close()
 LOG  ok 2138 no error from close()
 LOG  ok 2139 no error from close()
 LOG  ok 2140 no error from close()
 LOG  ok 2141 no error from close()
 LOG  ok 2142 no error from close()
 LOG  ok 2143 no error from close()
 LOG  ok 2144 no error from close()
 LOG  ok 2145 no error from close()
 LOG  ok 2146 no error from close()
 LOG  ok 2147 no error from close()
 LOG  ok 2148 no error from close()
 LOG  ok 2149 no error from close()
 LOG  ok 2150 no error from close()
 LOG  ok 2151 no error from close()
 LOG  ok 2152 no error from close()
 LOG  ok 2153 no error from close()
 LOG  ok 2154 no error from close()
 LOG  ok 2155 no error from close()
 LOG  ok 2156 no error from close()
 LOG  ok 2157 no error from close()
 LOG  ok 2158 no error from close()
 LOG  ok 2159 no error from close()
 LOG  ok 2160 no error from close()
 LOG  ok 2161 no error from close()
 LOG  ok 2162 no error from close()
 LOG  ok 2163 no error from close()
 LOG  ok 2164 no error from close()
 LOG  ok 2165 no error from close()
 LOG  ok 2166 no error from close()
 LOG  ok 2167 no error from close()
 LOG  ok 2168 no error from close()
 LOG  ok 2169 no error from close()
 LOG  ok 2170 no error from close()
 LOG  ok 2171 no error from close()
 LOG  ok 2172 no error from close()
 LOG  ok 2173 no error from close()
 LOG  ok 2174 no error from close()
 LOG  ok 2175 no error from close()
 LOG  # values().seek() to string target
 LOG  ok 2176 match
 LOG  ok 2177 end of iterator
 LOG  # values().seek() to buffer target
 LOG  ok 2178 match
 LOG  ok 2179 end of iterator
 LOG  # values().seek() to target with custom encoding
 LOG  ok 2180 match
 LOG  ok 2181 end of iterator
 LOG  # values().seek() on reverse iterator
 LOG  ok 2182 match
 LOG  ok 2183 end of iterator
 LOG  # values().seek() to out of range target
 LOG  ok 2184 end of iterator
 LOG  # values().seek() on reverse iterator to out of range target
 LOG  ok 2185 match
 LOG  ok 2186 match
 LOG  ok 2187 match
 LOG  ok 2188 end of iterator
 LOG  # values().seek() respects range
 LOG  ok 2189 no error from open()
 LOG  ok 2190 no error from batch()
 LOG  ok 2191 no error from next()
 LOG  ok 2192 seek(4) on {"gt":"5"} yields undefined
 LOG  ok 2193 no error from next()
 LOG  ok 2194 seek(5) on {"gt":"5"} yields undefined
 LOG  ok 2195 no error from next()
 LOG  ok 2196 seek(6) on {"gt":"5"} yields 6
 LOG  ok 2197 no error from next()
 LOG  ok 2198 seek(4) on {"gte":"5"} yields undefined
 LOG  ok 2199 no error from next()
 LOG  ok 2200 seek(5) on {"gte":"5"} yields 5
 LOG  ok 2201 no error from next()
 LOG  ok 2202 seek(6) on {"gte":"5"} yields 6
 LOG  ok 2203 no error from next()
 LOG  ok 2204 seek(4) on {"gte":"5","gt":"7"} yields undefined
 LOG  ok 2205 no error from next()
 LOG  ok 2206 seek(5) on {"gte":"5","gt":"7"} yields 5
 LOG  ok 2207 no error from next()
 LOG  ok 2208 seek(6) on {"gte":"5","gt":"7"} yields 6
 LOG  ok 2209 no error from next()
 LOG  ok 2210 seek(4) on {"gte":"5","gt":"3"} yields undefined
 LOG  ok 2211 no error from next()
 LOG  ok 2212 seek(5) on {"gte":"5","gt":"3"} yields 5
 LOG  ok 2213 no error from next()
 LOG  ok 2214 seek(6) on {"gte":"5","gt":"3"} yields 6
 LOG  ok 2215 no error from next()
 LOG  ok 2216 seek(4) on {"lt":"5"} yields 4
 LOG  ok 2217 no error from next()
 LOG  ok 2218 seek(5) on {"lt":"5"} yields undefined
 LOG  ok 2219 no error from next()
 LOG  ok 2220 seek(6) on {"lt":"5"} yields undefined
 LOG  ok 2221 no error from next()
 LOG  ok 2222 seek(4) on {"lte":"5"} yields 4
 LOG  ok 2223 no error from next()
 LOG  ok 2224 seek(5) on {"lte":"5"} yields 5
 LOG  ok 2225 no error from next()
 LOG  ok 2226 seek(6) on {"lte":"5"} yields undefined
 LOG  ok 2227 no error from next()
 LOG  ok 2228 seek(4) on {"lte":"5","lt":"3"} yields 4
 LOG  ok 2229 no error from next()
 LOG  ok 2230 seek(5) on {"lte":"5","lt":"3"} yields 5
 LOG  ok 2231 no error from next()
 LOG  ok 2232 seek(6) on {"lte":"5","lt":"3"} yields undefined
 LOG  ok 2233 no error from next()
 LOG  ok 2234 seek(4) on {"lte":"5","lt":"7"} yields 4
 LOG  ok 2235 no error from next()
 LOG  ok 2236 seek(5) on {"lte":"5","lt":"7"} yields 5
 LOG  ok 2237 no error from next()
 LOG  ok 2238 seek(6) on {"lte":"5","lt":"7"} yields undefined
 LOG  ok 2239 no error from next()
 LOG  ok 2240 seek(4) on {"lt":"5","reverse":true} yields 4
 LOG  ok 2241 no error from next()
 LOG  ok 2242 seek(5) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 2243 no error from next()
 LOG  ok 2244 seek(6) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 2245 no error from next()
 LOG  ok 2246 seek(4) on {"lte":"5","reverse":true} yields 4
 LOG  ok 2247 no error from next()
 LOG  ok 2248 seek(5) on {"lte":"5","reverse":true} yields 5
 LOG  ok 2249 no error from next()
 LOG  ok 2250 seek(6) on {"lte":"5","reverse":true} yields undefined
 LOG  ok 2251 no error from next()
 LOG  ok 2252 seek(4) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 2253 no error from next()
 LOG  ok 2254 seek(5) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 2255 no error from next()
 LOG  ok 2256 seek(6) on {"gt":"5","reverse":true} yields 6
 LOG  ok 2257 no error from next()
 LOG  ok 2258 seek(4) on {"gte":"5","reverse":true} yields undefined
 LOG  ok 2259 no error from next()
 LOG  ok 2260 seek(5) on {"gte":"5","reverse":true} yields 5
 LOG  ok 2261 no error from next()
 LOG  ok 2262 seek(6) on {"gte":"5","reverse":true} yields 6
 LOG  ok 2263 no error from next()
 LOG  ok 2264 seek(7) on {"gt":"7","lt":"8"} yields undefined
 LOG  ok 2265 no error from next()
 LOG  ok 2266 seek(7) on {"gte":"7","lt":"8"} yields 7
 LOG  ok 2267 no error from next()
 LOG  ok 2268 seek(8) on {"gte":"7","lt":"8"} yields undefined
 LOG  ok 2269 no error from next()
 LOG  ok 2270 seek(8) on {"gt":"7","lte":"8"} yields 8
 LOG  ok 2271 no error from close()
 LOG  ok 2272 no error from close()
 LOG  ok 2273 no error from close()
 LOG  ok 2274 no error from close()
 LOG  ok 2275 no error from close()
 LOG  ok 2276 no error from close()
 LOG  ok 2277 no error from close()
 LOG  ok 2278 no error from close()
 LOG  ok 2279 no error from close()
 LOG  ok 2280 no error from close()
 LOG  ok 2281 no error from close()
 LOG  ok 2282 no error from close()
 LOG  ok 2283 no error from close()
 LOG  ok 2284 no error from close()
 LOG  ok 2285 no error from close()
 LOG  ok 2286 no error from close()
 LOG  ok 2287 no error from close()
 LOG  ok 2288 no error from close()
 LOG  ok 2289 no error from close()
 LOG  ok 2290 no error from close()
 LOG  ok 2291 no error from close()
 LOG  ok 2292 no error from close()
 LOG  ok 2293 no error from close()
 LOG  ok 2294 no error from close()
 LOG  ok 2295 no error from close()
 LOG  ok 2296 no error from close()
 LOG  ok 2297 no error from close()
 LOG  ok 2298 no error from close()
 LOG  ok 2299 no error from close()
 LOG  ok 2300 no error from close()
 LOG  ok 2301 no error from close()
 LOG  ok 2302 no error from close()
 LOG  ok 2303 no error from close()
 LOG  ok 2304 no error from close()
 LOG  ok 2305 no error from close()
 LOG  ok 2306 no error from close()
 LOG  ok 2307 no error from close()
 LOG  ok 2308 no error from close()
 LOG  ok 2309 no error from close()
 LOG  ok 2310 no error from close()
 LOG  # delete key after creating iterator
 LOG  ok 2311 no open error
 LOG  ok 2312 no batch error
 LOG  ok 2313 no run error
 LOG  ok 2314 no iterator error
 LOG  ok 2315 maybe supports snapshots
 LOG  # batch delete key after creating iterator
 LOG  ok 2316 no open error
 LOG  ok 2317 no batch error
 LOG  ok 2318 no run error
 LOG  ok 2319 no iterator error
 LOG  ok 2320 maybe supports snapshots
 LOG  # test clear() with legacy range options
 LOG  ok 2321 undefined
 LOG  ok 2322 should be strictly equal
 LOG  ok 2323 should be strictly equal
 LOG  ok 2324 undefined
 LOG  # test clear() with options emits clear event
 LOG  ok 2325 should be truthy
 LOG  ok 2326 should be deeply equivalent
 LOG  # test clear() without options emits clear event
 LOG  ok 2327 should be truthy
 LOG  ok 2328 should be deeply equivalent
 LOG  # test simple clear() on string keys
 LOG  ok 2329 no open error
 LOG  ok 2330 no batch error
 LOG  ok 2331 no all() error
 LOG  ok 2332 has entries
 LOG  ok 2333 no clear error
 LOG  ok 2334 no all() error
 LOG  ok 2335 has no entries
 LOG  ok 2336 no close error
 LOG  # test simple clear() on string keys, with promise
 LOG  ok 2337 no open error
 LOG  ok 2338 no batch error
 LOG  ok 2339 no all() error
 LOG  ok 2340 has entries
 LOG  ok 2341 no clear error
 LOG  ok 2342 no all() error
 LOG  ok 2343 has no entries
 LOG  ok 2344 no close error
 LOG  # test simple clear() on buffer keys
 LOG  ok 2345 no open error
 LOG  ok 2346 no batch error
 LOG  ok 2347 no all() error
 LOG  ok 2348 has entries
 LOG  ok 2349 no clear error
 LOG  ok 2350 no all() error
 LOG  ok 2351 has no entries
 LOG  ok 2352 no close error
 LOG  # test simple clear() on buffer keys, with promise
 LOG  ok 2353 no open error
 LOG  ok 2354 no batch error
 LOG  ok 2355 no all() error
 LOG  ok 2356 has entries
 LOG  ok 2357 no clear error
 LOG  ok 2358 no all() error
 LOG  ok 2359 has no entries
 LOG  ok 2360 no close error
 LOG  # test simple clear() on mixed keys
 LOG  ok 2361 no open error
 LOG  ok 2362 no batch error
 LOG  ok 2363 no all() error
 LOG  ok 2364 has entries
 LOG  ok 2365 no clear error
 LOG  ok 2366 no all() error
 LOG  ok 2367 has no entries
 LOG  ok 2368 no close error
 LOG  # test simple clear() on mixed keys, with promise
 LOG  ok 2369 no open error
 LOG  ok 2370 no batch error
 LOG  ok 2371 no all() error
 LOG  ok 2372 has entries
 LOG  ok 2373 no clear error
 LOG  ok 2374 no all() error
 LOG  ok 2375 has no entries
 LOG  ok 2376 no close error
 LOG  # test simple clear() on non-utf8 buffer keys
 LOG  ok 2377 no open error
 LOG  ok 2378 no batch error
 LOG  ok 2379 no all() error
 LOG  ok 2380 has entries
 LOG  ok 2381 no clear error
 LOG  ok 2382 no all() error
 LOG  not ok 2383 has no entries
 LOG    ---
 LOG      operator: equal
 LOG      expected: 0
 LOG      actual:   2
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        strictEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115833:17
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:136617:23
 LOG        [native code]
 LOG        value@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128295:13
 LOG        value@[native code]
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 2384 no close error
 LOG  # test simple clear() on non-utf8 buffer keys, with promise
 LOG  ok 2385 no open error
 LOG  ok 2386 no batch error
 LOG  ok 2387 no all() error
 LOG  ok 2388 has entries
 LOG  ok 2389 no clear error
 LOG  ok 2390 no all() error
 LOG  not ok 2391 has no entries
 LOG    ---
 LOG      operator: equal
 LOG      expected: 0
 LOG      actual:   2
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        strictEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115833:17
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:136649:23
 LOG        [native code]
 LOG        value@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128295:13
 LOG        value@[native code]
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 2392 no close error
 LOG  # clear() with utf8 encoding (deferred: false)
 LOG  ok 2393 got expected keys
 LOG  # clear() with json encoding (deferred: false)
 LOG  ok 2394 got expected keys
 LOG  # clear() with utf8 encoding (deferred: true)
 LOG  ok 2395 should be strictly equal
 LOG  ok 2396 should be strictly equal
 LOG  ok 2397 undefined
 LOG  ok 2398 got expected keys
 LOG  # clear() with json encoding (deferred: true)
 LOG  ok 2399 should be strictly equal
 LOG  ok 2400 should be strictly equal
 LOG  ok 2401 undefined
 LOG  ok 2402 got expected keys
 LOG  # db#clear() with full range
 LOG  ok 2403 no open error
 LOG  ok 2404 no batch error
 LOG  ok 2405 no clear error
 LOG  ok 2406 no all() error
 LOG  ok 2407 correct number of entries
 LOG  ok 2408 should be deeply equivalent
 LOG  # db#clear() with reverse=true
 LOG  ok 2409 no open error
 LOG  ok 2410 no batch error
 LOG  ok 2411 no clear error
 LOG  ok 2412 no all() error
 LOG  ok 2413 correct number of entries
 LOG  ok 2414 should be deeply equivalent
 LOG  # db#clear() with gte=00
 LOG  ok 2415 no open error
 LOG  ok 2416 no batch error
 LOG  ok 2417 no clear error
 LOG  ok 2418 no all() error
 LOG  ok 2419 correct number of entries
 LOG  ok 2420 should be deeply equivalent
 LOG  # db#clear() with gte=50
 LOG  ok 2421 no open error
 LOG  ok 2422 no batch error
 LOG  ok 2423 no clear error
 LOG  ok 2424 no all() error
 LOG  ok 2425 correct number of entries
 LOG  ok 2426 should be deeply equivalent
 LOG  # db#clear() with lte=50 and reverse=true
 LOG  ok 2427 no open error
 LOG  ok 2428 no batch error
 LOG  ok 2429 no clear error
 LOG  ok 2430 no all() error
 LOG  ok 2431 correct number of entries
 LOG  ok 2432 should be deeply equivalent
 LOG  # db#clear() with gte=49.5 (midway)
 LOG  ok 2433 no open error
 LOG  ok 2434 no batch error
 LOG  ok 2435 no clear error
 LOG  ok 2436 no all() error
 LOG  ok 2437 correct number of entries
 LOG  ok 2438 should be deeply equivalent
 LOG  # db#clear() with gte=49999 (midway)
 LOG  ok 2439 no open error
 LOG  ok 2440 no batch error
 LOG  ok 2441 no clear error
 LOG  ok 2442 no all() error
 LOG  ok 2443 correct number of entries
 LOG  ok 2444 should be deeply equivalent
 LOG  # db#clear() with lte=49.5 (midway) and reverse=true
 LOG  ok 2445 no open error
 LOG  ok 2446 no batch error
 LOG  ok 2447 no clear error
 LOG  ok 2448 no all() error
 LOG  ok 2449 correct number of entries
 LOG  ok 2450 should be deeply equivalent
 LOG  # db#clear() with lt=49.5 (midway) and reverse=true
 LOG  ok 2451 no open error
 LOG  ok 2452 no batch error
 LOG  ok 2453 no clear error
 LOG  ok 2454 no all() error
 LOG  ok 2455 correct number of entries
 LOG  ok 2456 should be deeply equivalent
 LOG  # db#clear() with lt=50 and reverse=true
 LOG  ok 2457 no open error
 LOG  ok 2458 no batch error
 LOG  ok 2459 no clear error
 LOG  ok 2460 no all() error
 LOG  ok 2461 correct number of entries
 LOG  ok 2462 should be deeply equivalent
 LOG  # db#clear() with lte=50
 LOG  ok 2463 no open error
 LOG  ok 2464 no batch error
 LOG  ok 2465 no clear error
 LOG  ok 2466 no all() error
 LOG  ok 2467 correct number of entries
 LOG  ok 2468 should be deeply equivalent
 LOG  # db#clear() with lte=50.5 (midway)
 LOG  ok 2469 no open error
 LOG  ok 2470 no batch error
 LOG  ok 2471 no clear error
 LOG  ok 2472 no all() error
 LOG  ok 2473 correct number of entries
 LOG  ok 2474 should be deeply equivalent
 LOG  # db#clear() with lte=50555 (midway)
 LOG  ok 2475 no open error
 LOG  ok 2476 no batch error
 LOG  ok 2477 no clear error
 LOG  ok 2478 no all() error
 LOG  ok 2479 correct number of entries
 LOG  ok 2480 should be deeply equivalent
 LOG  # db#clear() with lt=50555 (midway)
 LOG  ok 2481 no open error
 LOG  ok 2482 no batch error
 LOG  ok 2483 no clear error
 LOG  ok 2484 no all() error
 LOG  ok 2485 correct number of entries
 LOG  ok 2486 should be deeply equivalent
 LOG  # db#clear() with gte=50.5 (midway) and reverse=true
 LOG  ok 2487 no open error
 LOG  ok 2488 no batch error
 LOG  ok 2489 no clear error
 LOG  ok 2490 no all() error
 LOG  ok 2491 correct number of entries
 LOG  ok 2492 should be deeply equivalent
 LOG  # db#clear() with gt=50.5 (midway) and reverse=true
 LOG  ok 2493 no open error
 LOG  ok 2494 no batch error
 LOG  ok 2495 no clear error
 LOG  ok 2496 no all() error
 LOG  ok 2497 correct number of entries
 LOG  ok 2498 should be deeply equivalent
 LOG  # db#clear() with gt=50 and reverse=true
 LOG  ok 2499 no open error
 LOG  ok 2500 no batch error
 LOG  ok 2501 no clear error
 LOG  ok 2502 no all() error
 LOG  ok 2503 correct number of entries
 LOG  ok 2504 should be deeply equivalent
 LOG  # db#clear() with lte=0
 LOG  ok 2505 no open error
 LOG  ok 2506 no batch error
 LOG  ok 2507 no clear error
 LOG  ok 2508 no all() error
 LOG  ok 2509 correct number of entries
 LOG  ok 2510 should be deeply equivalent
 LOG  # db#clear() with lt=0
 LOG  ok 2511 no open error
 LOG  ok 2512 no batch error
 LOG  ok 2513 no clear error
 LOG  ok 2514 no all() error
 LOG  ok 2515 correct number of entries
 LOG  ok 2516 should be deeply equivalent
 LOG  # db#clear() with gte=30 and lte=70
 LOG  ok 2517 no open error
 LOG  ok 2518 no batch error
 LOG  ok 2519 no clear error
 LOG  ok 2520 no all() error
 LOG  ok 2521 correct number of entries
 LOG  ok 2522 should be deeply equivalent
 LOG  # db#clear() with test iterator with gte=30 and lte=70 and gt=40 and lt=60
 LOG  ok 2523 no open error
 LOG  ok 2524 no batch error
 LOG  ok 2525 no clear error
 LOG  ok 2526 no all() error
 LOG  ok 2527 correct number of entries
 LOG  ok 2528 should be deeply equivalent
 LOG  # db#clear() with test iterator with gte=30 and lte=70 and gt=20 and lt=80
 LOG  ok 2529 no open error
 LOG  ok 2530 no batch error
 LOG  ok 2531 no clear error
 LOG  ok 2532 no all() error
 LOG  ok 2533 correct number of entries
 LOG  ok 2534 should be deeply equivalent
 LOG  # db#clear() with gt=29 and lt=71
 LOG  ok 2535 no open error
 LOG  ok 2536 no batch error
 LOG  ok 2537 no clear error
 LOG  ok 2538 no all() error
 LOG  ok 2539 correct number of entries
 LOG  ok 2540 should be deeply equivalent
 LOG  # db#clear() with gte=30 and lte=70 and reverse=true
 LOG  ok 2541 no open error
 LOG  ok 2542 no batch error
 LOG  ok 2543 no clear error
 LOG  ok 2544 no all() error
 LOG  ok 2545 correct number of entries
 LOG  ok 2546 should be deeply equivalent
 LOG  # db#clear() with gt=29 and lt=71 and reverse=true
 LOG  ok 2547 no open error
 LOG  ok 2548 no batch error
 LOG  ok 2549 no clear error
 LOG  ok 2550 no all() error
 LOG  ok 2551 correct number of entries
 LOG  ok 2552 should be deeply equivalent
 LOG  # db#clear() with limit=20
 LOG  ok 2553 no open error
 LOG  ok 2554 no batch error
 LOG  ok 2555 no clear error
 LOG  ok 2556 no all() error
 LOG  ok 2557 correct number of entries
 LOG  ok 2558 should be deeply equivalent
 LOG  # db#clear() with limit=20 and gte=20
 LOG  ok 2559 no open error
 LOG  ok 2560 no batch error
 LOG  ok 2561 no clear error
 LOG  ok 2562 no all() error
 LOG  ok 2563 correct number of entries
 LOG  ok 2564 should be deeply equivalent
 LOG  # db#clear() with limit=20 and reverse=true
 LOG  ok 2565 no open error
 LOG  ok 2566 no batch error
 LOG  ok 2567 no clear error
 LOG  ok 2568 no all() error
 LOG  ok 2569 correct number of entries
 LOG  ok 2570 should be deeply equivalent
 LOG  # db#clear() with limit=20 and lte=79 and reverse=true
 LOG  ok 2571 no open error
 LOG  ok 2572 no batch error
 LOG  ok 2573 no clear error
 LOG  ok 2574 no all() error
 LOG  ok 2575 correct number of entries
 LOG  ok 2576 should be deeply equivalent
 LOG  # db#clear() with limit=-1 should clear whole database
 LOG  ok 2577 no open error
 LOG  ok 2578 no batch error
 LOG  ok 2579 no clear error
 LOG  ok 2580 no all() error
 LOG  ok 2581 correct number of entries
 LOG  ok 2582 should be deeply equivalent
 LOG  # db#clear() with limit=0 should not clear anything
 LOG  ok 2583 no open error
 LOG  ok 2584 no batch error
 LOG  ok 2585 no clear error
 LOG  ok 2586 no all() error
 LOG  ok 2587 correct number of entries
 LOG  ok 2588 should be deeply equivalent
 LOG  # db#clear() with lte after limit
 LOG  ok 2589 no open error
 LOG  ok 2590 no batch error
 LOG  ok 2591 no clear error
 LOG  ok 2592 no all() error
 LOG  ok 2593 correct number of entries
 LOG  ok 2594 should be deeply equivalent
 LOG  # db#clear() with lte before limit
 LOG  ok 2595 no open error
 LOG  ok 2596 no batch error
 LOG  ok 2597 no clear error
 LOG  ok 2598 no all() error
 LOG  ok 2599 correct number of entries
 LOG  ok 2600 should be deeply equivalent
 LOG  # db#clear() with gte after database end
 LOG  ok 2601 no open error
 LOG  ok 2602 no batch error
 LOG  ok 2603 no clear error
 LOG  ok 2604 no all() error
 LOG  ok 2605 correct number of entries
 LOG  ok 2606 should be deeply equivalent
 LOG  # db#clear() with gt after database end
 LOG  ok 2607 no open error
 LOG  ok 2608 no batch error
 LOG  ok 2609 no clear error
 LOG  ok 2610 no all() error
 LOG  ok 2611 correct number of entries
 LOG  ok 2612 should be deeply equivalent
 LOG  # db#clear() with lte after database end and reverse=true
 LOG  ok 2613 no open error
 LOG  ok 2614 no batch error
 LOG  ok 2615 no clear error
 LOG  ok 2616 no all() error
 LOG  ok 2617 correct number of entries
 LOG  ok 2618 should be deeply equivalent
 LOG  # db#clear() with lte and gte after database and reverse=true
 LOG  ok 2619 no open error
 LOG  ok 2620 no batch error
 LOG  ok 2621 no clear error
 LOG  ok 2622 no all() error
 LOG  ok 2623 correct number of entries
 LOG  ok 2624 should be deeply equivalent
 LOG  # db#clear() with lt and gt after database and reverse=true
 LOG  ok 2625 no open error
 LOG  ok 2626 no batch error
 LOG  ok 2627 no clear error
 LOG  ok 2628 no all() error
 LOG  ok 2629 correct number of entries
 LOG  ok 2630 should be deeply equivalent
 LOG  # db#clear() with gt greater than lt
 LOG  ok 2631 no open error
 LOG  ok 2632 no batch error
 LOG  ok 2633 no clear error
 LOG  ok 2634 no all() error
 LOG  ok 2635 correct number of entries
 LOG  ok 2636 should be deeply equivalent
 LOG  # db#clear() with gte greater than lte
 LOG  ok 2637 no open error
 LOG  ok 2638 no batch error
 LOG  ok 2639 no clear error
 LOG  ok 2640 no all() error
 LOG  ok 2641 correct number of entries
 LOG  ok 2642 should be deeply equivalent
 LOG  # sublevel.clear() (deferred: false)
 LOG  ok 2643 should be deeply equivalent
 LOG  ok 2644 should be deeply equivalent
 LOG  ok 2645 should be deeply equivalent
 LOG  # sublevel.clear() (deferred: true)
 LOG  ok 2646 should be deeply equivalent
 LOG  ok 2647 should be deeply equivalent
 LOG  ok 2648 should be deeply equivalent
 LOG  # iterate sublevel keys with bytes above 196 (buffer, deferred: false)
 LOG  ok 2649 sub1 yielded all entries
 LOG  ok 2650 sub2 yielded all entries
 LOG  ok 2651 should be truthy
 LOG  ok 2652 should be truthy
 LOG  ok 2653 sub1 yielded all values
 LOG  ok 2654 sub2 yielded all values
 LOG  ok 2655 should be truthy
 LOG  ok 2656 should be truthy
 LOG  ok 2657 sub1 yielded all values
 LOG  ok 2658 sub2 yielded all values
 LOG  ok 2659 should be truthy
 LOG  ok 2660 should be truthy
 LOG  ok 2661 cleared sub1
 LOG  ok 2662 did not clear sub2
 LOG  # iterate sublevel keys with bytes above 196 (view, deferred: false)
 LOG  ok 2663 sub1 yielded all entries
 LOG  ok 2664 sub2 yielded all entries
 LOG  ok 2665 should be truthy
 LOG  ok 2666 should be truthy
 LOG  ok 2667 sub1 yielded all values
 LOG  ok 2668 sub2 yielded all values
 LOG  ok 2669 should be truthy
 LOG  ok 2670 should be truthy
 LOG  ok 2671 sub1 yielded all values
 LOG  ok 2672 sub2 yielded all values
 LOG  ok 2673 should be truthy
 LOG  ok 2674 should be truthy
 LOG  ok 2675 cleared sub1
 LOG  ok 2676 did not clear sub2
 LOG  # iterate sublevel keys with bytes above 196 (buffer, deferred: true)
 LOG  ok 2677 sub1 yielded all entries
 LOG  ok 2678 sub2 yielded all entries
 LOG  ok 2679 should be truthy
 LOG  ok 2680 should be truthy
 LOG  ok 2681 sub1 yielded all values
 LOG  ok 2682 sub2 yielded all values
 LOG  ok 2683 should be truthy
 LOG  ok 2684 should be truthy
 LOG  ok 2685 sub1 yielded all values
 LOG  ok 2686 sub2 yielded all values
 LOG  ok 2687 should be truthy
 LOG  ok 2688 should be truthy
 LOG  ok 2689 cleared sub1
 LOG  ok 2690 did not clear sub2
 LOG  # iterate sublevel keys with bytes above 196 (view, deferred: true)
 LOG  ok 2691 sub1 yielded all entries
 LOG  ok 2692 sub2 yielded all entries
 LOG  ok 2693 should be truthy
 LOG  ok 2694 should be truthy
 LOG  ok 2695 sub1 yielded all values
 LOG  ok 2696 sub2 yielded all values
 LOG  ok 2697 should be truthy
 LOG  ok 2698 should be truthy
 LOG  ok 2699 sub1 yielded all values
 LOG  ok 2700 sub2 yielded all values
 LOG  ok 2701 should be truthy
 LOG  ok 2702 should be truthy
 LOG  ok 2703 cleared sub1
 LOG  ok 2704 did not clear sub2
 LOG  # testCommon.factory() returns valid database
 LOG  ok 2705 is an object
 LOG  ok 2706 is not null
 LOG  ok 2707 has open() method
 LOG  ok 2708 has on() method
 LOG  ok 2709 has emit() method
 LOG  ok 2710 got event
 LOG  # testCommon.factory() returns a unique database
 LOG  ok 2711 unique instances
 LOG  ok 2712 no error while opening db1
 LOG  ok 2713 no error while opening db2
 LOG  ok 2714 put key in db1
 LOG  ok 2715 db2 should be empty
 LOG  ok 2716 db2 should be empty
 LOG  ok 2717 no error while closing db1
 LOG  ok 2718 no error while closing db2
 LOG  # db has manifest
 LOG  ok 2719 manifest is object
 LOG  ok 2720 additionalMethods is object
 LOG  ok 2721 truthy: encodings
 LOG  ok 2722 truthy: seek
 LOG  ok 2723 false: streams
 LOG  ok 2724 false: createIfMissing
 LOG  ok 2725 false: errorIfExists
 LOG  ok 2726 truthy: permanence
 LOG  ok 2727 false: snapshots
 LOG  ok 2728 truthy: status
 LOG  ok 2729 truthy: promises
 LOG  ok 2730 truthy: clear
 LOG  ok 2731 truthy: getMany
 LOG  ok 2732 truthy: deferredOpen
 LOG  ok 2733 truthy: keyIterator
 LOG  ok 2734 truthy: valueIterator
 LOG  ok 2735 truthy: iteratorNextv
 LOG  ok 2736 truthy: iteratorAll
 LOG  ok 2737 truthy: events
 LOG  ok 2738 truthy: additionalMethods
 LOG  ok 2739 manifest has unique identity
 LOG  ok 2740 manifest.encodings has unique identity
 LOG  ok 2741 manifest.events has unique identity
 LOG  ok 2742 manifest.additionalMethods has unique identity
 LOG  ok 2743 no open error
 LOG  ok 2744 manifest did not change after open
 LOG  ok 2745 no close error
 LOG  ok 2746 manifest did not change after close
 LOG  # manifest has expected properties
 LOG  ok 2747 should be strictly equal
 LOG  ok 2748 should be strictly equal
 LOG  ok 2749 should be strictly equal
 LOG  ok 2750 should be strictly equal
 LOG  ok 2751 can be accessed via testCommon
 LOG  ok 2752 supports utf8
 LOG  ok 2753 supports json
 LOG  # test database open, no options
 LOG  ok 2754 should be strictly equal
 LOG  ok 2755 should be strictly equal
 LOG  ok 2756 undefined
 LOG  ok 2757 should be strictly equal
 LOG  ok 2758 should be strictly equal
 LOG  # test database open, no options, with promise
 LOG  ok 2759 should be strictly equal
 LOG  ok 2760 should be strictly equal
 LOG  ok 2761 should be strictly equal
 LOG  # test database open, options and callback
 LOG  ok 2762 undefined
 LOG  # test database open, options with promise
 LOG  # test database open, close and open
 LOG  ok 2763 undefined
 LOG  ok 2764 undefined
 LOG  ok 2765 should be strictly equal
 LOG  ok 2766 undefined
 LOG  ok 2767 should be strictly equal
 LOG  # test database open, close and open with promise
 LOG  ok 2768 undefined
 LOG  # test database open and close in same tick
 LOG  ok 2769 is opening
 LOG  ok 2770 is still opening
 LOG  ok 2771 callback (anonymous) is asynchronous
 LOG  ok 2772 callback (anonymous) is asynchronous
 LOG  ok 2773 callback (anonymous) is asynchronous
 LOG  ok 2774 got open() error
 LOG  ok 2775 is closed
 LOG  ok 2776 order is correct
 LOG  ok 2777 no close() error
 LOG  ok 2778 is closed
 LOG  # test database open, close and open in same tick
 LOG  ok 2779 is opening
 LOG  ok 2780 is still opening
 LOG  ok 2781 is still opening
 LOG  ok 2782 callback (anonymous) is asynchronous
 LOG  ok 2783 callback (anonymous) is asynchronous
 LOG  ok 2784 callback (anonymous) is asynchronous
 LOG  ok 2785 callback (anonymous) is asynchronous
 LOG  ok 2786 no open() error (1)
 LOG  ok 2787 is open
 LOG  ok 2788 should be strictly equal
 LOG  ok 2789 is open
 LOG  ok 2790 callback order is the same as call order
 LOG  ok 2791 no open() error (2)
 LOG  ok 2792 is open
 LOG  # test database open if already open (sequential)
 LOG  ok 2793 callback (anonymous) is asynchronous
 LOG  ok 2794 no open() error (1)
 LOG  ok 2795 is open
 LOG  ok 2796 not reopening
 LOG  ok 2797 callback (anonymous) is asynchronous
 LOG  ok 2798 no open() error (2)
 LOG  ok 2799 is open
 LOG  # test database open if already opening (parallel)
 LOG  ok 2800 should be strictly equal
 LOG  ok 2801 callback (anonymous) is asynchronous
 LOG  ok 2802 callback (anonymous) is asynchronous
 LOG  ok 2803 no open() error (1)
 LOG  ok 2804 should be strictly equal
 LOG  ok 2805 no open() error (2)
 LOG  ok 2806 should be strictly equal
 LOG  # test database close if already closed
 LOG  ok 2807 no open() error
 LOG  ok 2808 callback (anonymous) is asynchronous
 LOG  ok 2809 no close() error (1)
 LOG  ok 2810 is closed
 LOG  ok 2811 is closed
 LOG  ok 2812 callback (anonymous) is asynchronous
 LOG  ok 2813 no close() error (2)
 LOG  ok 2814 is closed
 LOG  # test database close if new
 LOG  ok 2815 status ok
 LOG  ok 2816 status unchanged
 LOG  ok 2817 callback (anonymous) is asynchronous
 LOG  ok 2818 no close() error
 LOG  ok 2819 status ok
 LOG  # test database close on open event
 LOG  ok 2820 got open() error
 LOG  ok 2821 is closed
 LOG  ok 2822 order is correct
 LOG  ok 2823 no close() error
 LOG  ok 2824 is closed
 LOG  # test passive open()
 LOG  ok 2825 should be strictly equal
 LOG  # test passive open(): ignored if set in constructor options
 LOG  # test close()
 LOG  ok 2826 no open() error
 LOG  ok 2827 undefined
 LOG  # test close() with promise
 LOG  ok 2828 no open() error
 LOG  # setUp db
 LOG  # test put() with illegal keys
 LOG  ok 2829 callback (anonymous) is asynchronous
 LOG  ok 2830 callback (anonymous) is asynchronous
 LOG  ok 2831 null key - is Error (callback)
 LOG  ok 2832 null key - correct error code (callback)
 LOG  ok 2833 undefined key - is Error (callback)
 LOG  ok 2834 undefined key - correct error code (callback)
 LOG  ok 2835 null key - is Error (promise)
 LOG  ok 2836 null key - correct error code (promise)
 LOG  ok 2837 undefined key - is Error (promise)
 LOG  ok 2838 undefined key - correct error code (promise)
 LOG  # test put() with illegal values
 LOG  ok 2839 callback (anonymous) is asynchronous
 LOG  ok 2840 callback (anonymous) is asynchronous
 LOG  ok 2841 null key- is Error (callback)
 LOG  ok 2842 null key - correct error code (callback)
 LOG  ok 2843 undefined value- is Error (callback)
 LOG  ok 2844 undefined value - correct error code (callback)
 LOG  ok 2845 null key - is Error (promise)
 LOG  ok 2846 null key - correct error code (promise)
 LOG  ok 2847 undefined value - is Error (promise)
 LOG  ok 2848 undefined value - correct error code (promise)
 LOG  # test simple put()
 LOG  ok 2849 callback (anonymous) is asynchronous
 LOG  ok 2850 no put() error
 LOG  ok 2851 no get() error
 LOG  ok 2852 should be strictly equal
 LOG  ok 2853 no put() error
 LOG  ok 2854 no get() error
 LOG  ok 2855 value was overwritten
 LOG  # test simple put() with promise
 LOG  ok 2856 should be strictly equal
 LOG  # test deferred put()
 LOG  ok 2857 callback (anonymous) is asynchronous
 LOG  ok 2858 no put() error
 LOG  ok 2859 no get() error
 LOG  ok 2860 value is ok
 LOG  ok 2861 undefined
 LOG  # test deferred put() with promise
 LOG  ok 2862 value is ok
 LOG  # test put() emits put event
 LOG  ok 2863 should be truthy
 LOG  ok 2864 should be strictly equal
 LOG  ok 2865 should be strictly equal
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test get() with illegal keys
 LOG  ok 2866 callback (anonymous) is asynchronous
 LOG  ok 2867 callback (anonymous) is asynchronous
 LOG  ok 2868 null key - is Error (callback)
 LOG  ok 2869 null key - correct error code (callback)
 LOG  ok 2870 undefined key - is Error (callback)
 LOG  ok 2871 undefined key - correct error code (callback)
 LOG  ok 2872 null key - is Error (promise)
 LOG  ok 2873 null key - correct error code (promise)
 LOG  ok 2874 undefined key - is Error (promise)
 LOG  ok 2875 undefined key - correct error code (promise)
 LOG  # test simple get()
 LOG  ok 2876 undefined
 LOG  ok 2877 null
 LOG  ok 2878 should be strictly equal
 LOG  ok 2879 null
 LOG  ok 2880 should be strictly equal
 LOG  ok 2881 null
 LOG  ok 2882 should be strictly equal
 LOG  ok 2883 null
 LOG  ok 2884 should be buffer
 LOG  ok 2885 should be strictly equal
 LOG  # test get() with promise
 LOG  ok 2886 undefined
 LOG  ok 2887 got value without options
 LOG  ok 2888 should error
 LOG  ok 2889 correct error
 LOG  ok 2890 is buffer
 LOG  ok 2891 correct value
 LOG  # test simultaneous get()
 LOG  ok 2892 undefined
 LOG  ok 2893 null
 LOG  ok 2894 should be strictly equal
 LOG  ok 2895 null
 LOG  ok 2896 should be strictly equal
 LOG  ok 2897 null
 LOG  ok 2898 should be strictly equal
 LOG  ok 2899 null
 LOG  ok 2900 should be strictly equal
 LOG  ok 2901 null
 LOG  ok 2902 should be strictly equal
 LOG  ok 2903 null
 LOG  ok 2904 should be strictly equal
 LOG  ok 2905 null
 LOG  ok 2906 should be strictly equal
 LOG  ok 2907 null
 LOG  ok 2908 should be strictly equal
 LOG  ok 2909 null
 LOG  ok 2910 should be strictly equal
 LOG  ok 2911 null
 LOG  ok 2912 should be strictly equal
 LOG  ok 2913 should error
 LOG  ok 2914 correct error
 LOG  ok 2915 value is undefined
 LOG  ok 2916 should error
 LOG  ok 2917 correct error
 LOG  ok 2918 value is undefined
 LOG  ok 2919 should error
 LOG  ok 2920 correct error
 LOG  ok 2921 value is undefined
 LOG  ok 2922 should error
 LOG  ok 2923 correct error
 LOG  ok 2924 value is undefined
 LOG  ok 2925 should error
 LOG  ok 2926 correct error
 LOG  ok 2927 value is undefined
 LOG  ok 2928 should error
 LOG  ok 2929 correct error
 LOG  ok 2930 value is undefined
 LOG  ok 2931 should error
 LOG  ok 2932 correct error
 LOG  ok 2933 value is undefined
 LOG  ok 2934 should error
 LOG  ok 2935 correct error
 LOG  ok 2936 value is undefined
 LOG  ok 2937 should error
 LOG  ok 2938 correct error
 LOG  ok 2939 value is undefined
 LOG  ok 2940 should error
 LOG  ok 2941 correct error
 LOG  ok 2942 value is undefined
 LOG  # test get() not found error is asynchronous
 LOG  ok 2943 should error
 LOG  ok 2944 correct error
 LOG  ok 2945 value is undefined
 LOG  ok 2946 callback is asynchronous
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test del() with illegal keys
 LOG  ok 2947 callback (anonymous) is asynchronous
 LOG  ok 2948 callback (anonymous) is asynchronous
 LOG  ok 2949 null key - is Error (callback)
 LOG  ok 2950 null key - correct error code (callback)
 LOG  ok 2951 undefined key - is Error (callback)
 LOG  ok 2952 undefined key - correct error code (callback)
 LOG  ok 2953 null key - is Error (promise)
 LOG  ok 2954 null key - correct error code (callback)
 LOG  ok 2955 undefined key - is Error (promise)
 LOG  ok 2956 undefined key - correct error code (callback)
 LOG  # test simple del()
 LOG  ok 2957 undefined
 LOG  ok 2958 undefined
 LOG  ok 2959 entry properly deleted
 LOG  ok 2960 value is undefined
 LOG  ok 2961 NotFound error
 LOG  # test simple del() with promise
 LOG  ok 2962 undefined
 LOG  ok 2963 undefined
 LOG  ok 2964 entry properly deleted
 LOG  ok 2965 value is undefined
 LOG  ok 2966 NotFound error
 LOG  # test del on non-existent key
 LOG  ok 2967 undefined
 LOG  # test del on non-existent key, with promise
 LOG  # test del() emits del event
 LOG  ok 2968 should be truthy
 LOG  ok 2969 should be strictly equal
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test put()/get()/del() with `0` key
 LOG  ok 2970 undefined
 LOG  ok 2971 no error, has key/value for ``0` key`
 LOG  ok 2972 should be strictly equal
 LOG  ok 2973 no error, deleted key/value for ``0` key`
 LOG  ok 2974 entry properly deleted
 LOG  ok 2975 correct error
 LOG  ok 2976 value is undefined
 LOG  ok 2977 callback is asynchronous
 LOG  # test put()/get()/del() with empty string key
 LOG  ok 2978 undefined
 LOG  ok 2979 no error, has key/value for `empty string key`
 LOG  ok 2980 should be strictly equal
 LOG  ok 2981 no error, deleted key/value for `empty string key`
 LOG  ok 2982 entry properly deleted
 LOG  ok 2983 correct error
 LOG  ok 2984 value is undefined
 LOG  ok 2985 callback is asynchronous
 LOG  # test put()/get()/del() with long String key
 LOG  ok 2986 undefined
 LOG  ok 2987 no error, has key/value for `long String key`
 LOG  ok 2988 should be strictly equal
 LOG  ok 2989 no error, deleted key/value for `long String key`
 LOG  ok 2990 entry properly deleted
 LOG  ok 2991 correct error
 LOG  ok 2992 value is undefined
 LOG  ok 2993 callback is asynchronous
 LOG  # test put()/get()/del() with Buffer key
 LOG  ok 2994 undefined
 LOG  ok 2995 no error, has key/value for `Buffer key`
 LOG  ok 2996 should be strictly equal
 LOG  ok 2997 no error, deleted key/value for `Buffer key`
 LOG  ok 2998 entry properly deleted
 LOG  ok 2999 correct error
 LOG  ok 3000 value is undefined
 LOG  ok 3001 callback is asynchronous
 LOG  # test put()/get()/del() with empty Buffer key
 LOG  ok 3002 undefined
 LOG  ok 3003 no error, has key/value for `empty Buffer key`
 LOG  ok 3004 should be strictly equal
 LOG  ok 3005 no error, deleted key/value for `empty Buffer key`
 LOG  ok 3006 entry properly deleted
 LOG  ok 3007 correct error
 LOG  ok 3008 value is undefined
 LOG  ok 3009 callback is asynchronous
 LOG  # test put()/get()/del() with Array value
 LOG  ok 3010 undefined
 LOG  ok 3011 no error, has key/value for `Array value`
 LOG  ok 3012 should be strictly equal
 LOG  ok 3013 no error, deleted key/value for `Array value`
 LOG  ok 3014 entry properly deleted
 LOG  ok 3015 correct error
 LOG  ok 3016 value is undefined
 LOG  ok 3017 callback is asynchronous
 LOG  # test put()/get()/del() with `false` value
 LOG  ok 3018 undefined
 LOG  ok 3019 no error, has key/value for ``false` value`
 LOG  ok 3020 should be strictly equal
 LOG  ok 3021 no error, deleted key/value for ``false` value`
 LOG  ok 3022 entry properly deleted
 LOG  ok 3023 correct error
 LOG  ok 3024 value is undefined
 LOG  ok 3025 callback is asynchronous
 LOG  # test put()/get()/del() with `0` value
 LOG  ok 3026 undefined
 LOG  ok 3027 no error, has key/value for ``0` value`
 LOG  ok 3028 should be strictly equal
 LOG  ok 3029 no error, deleted key/value for ``0` value`
 LOG  ok 3030 entry properly deleted
 LOG  ok 3031 correct error
 LOG  ok 3032 value is undefined
 LOG  ok 3033 callback is asynchronous
 LOG  # test put()/get()/del() with `NaN` value
 LOG  ok 3034 undefined
 LOG  ok 3035 no error, has key/value for ``NaN` value`
 LOG  ok 3036 should be strictly equal
 LOG  ok 3037 no error, deleted key/value for ``NaN` value`
 LOG  ok 3038 entry properly deleted
 LOG  ok 3039 correct error
 LOG  ok 3040 value is undefined
 LOG  ok 3041 callback is asynchronous
 LOG  # test put()/get()/del() with empty String value
 LOG  ok 3042 undefined
 LOG  ok 3043 no error, has key/value for `empty String value`
 LOG  ok 3044 should be strictly equal
 LOG  ok 3045 no error, deleted key/value for `empty String value`
 LOG  ok 3046 entry properly deleted
 LOG  ok 3047 correct error
 LOG  ok 3048 value is undefined
 LOG  ok 3049 callback is asynchronous
 LOG  # test put()/get()/del() with empty Buffer value
 LOG  ok 3050 undefined
 LOG  ok 3051 no error, has key/value for `empty Buffer value`
 LOG  ok 3052 should be strictly equal
 LOG  ok 3053 no error, deleted key/value for `empty Buffer value`
 LOG  ok 3054 entry properly deleted
 LOG  ok 3055 correct error
 LOG  ok 3056 value is undefined
 LOG  ok 3057 callback is asynchronous
 LOG  # test put()/get()/del() with empty Array value
 LOG  ok 3058 undefined
 LOG  ok 3059 no error, has key/value for `empty Array value`
 LOG  ok 3060 should be strictly equal
 LOG  ok 3061 no error, deleted key/value for `empty Array value`
 LOG  ok 3062 entry properly deleted
 LOG  ok 3063 correct error
 LOG  ok 3064 value is undefined
 LOG  ok 3065 callback is asynchronous
 LOG  # test put()/get()/del() with long String value
 LOG  ok 3066 undefined
 LOG  ok 3067 no error, has key/value for `long String value`
 LOG  ok 3068 should be strictly equal
 LOG  ok 3069 no error, deleted key/value for `long String value`
 LOG  ok 3070 entry properly deleted
 LOG  ok 3071 correct error
 LOG  ok 3072 value is undefined
 LOG  ok 3073 callback is asynchronous
 LOG  # test put()/get()/del() with Buffer value
 LOG  ok 3074 undefined
 LOG  ok 3075 no error, has key/value for `Buffer value`
 LOG  not ok 3076 should be strictly equal
 LOG    ---
 LOG      operator: equal
 LOG      expected: '\x00���'
 LOG      actual:   ''
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        strictEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115833:17
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:130502:21
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:124208:19
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:124208:19
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:137770:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 3077 no error, deleted key/value for `Buffer value`
 LOG  ok 3078 entry properly deleted
 LOG  ok 3079 correct error
 LOG  ok 3080 value is undefined
 LOG  ok 3081 callback is asynchronous
 LOG  # test put()/get()/del() with Array key
 LOG  ok 3082 undefined
 LOG  ok 3083 no error, has key/value for `Array key`
 LOG  ok 3084 should be strictly equal
 LOG  ok 3085 no error, deleted key/value for `Array key`
 LOG  ok 3086 entry properly deleted
 LOG  ok 3087 correct error
 LOG  ok 3088 value is undefined
 LOG  ok 3089 callback is asynchronous
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test getMany() requires an array argument (callback)
 LOG  ok 3090 callback (anonymous) is asynchronous
 LOG  ok 3091 callback (anonymous) is asynchronous
 LOG  ok 3092 should be strictly equal
 LOG  ok 3093 should be strictly equal
 LOG  ok 3094 should be strictly equal
 LOG  ok 3095 should be strictly equal
 LOG  # test getMany() requires an array argument (promise)
 LOG  ok 3096 should be strictly equal
 LOG  ok 3097 should be strictly equal
 LOG  ok 3098 should be strictly equal
 LOG  ok 3099 should be strictly equal
 LOG  ok 3100 should be strictly equal
 LOG  ok 3101 should be strictly equal
 LOG  # test getMany() with illegal keys
 LOG  ok 3102 callback (anonymous) is asynchronous
 LOG  ok 3103 callback (anonymous) is asynchronous
 LOG  ok 3104 callback (anonymous) is asynchronous
 LOG  ok 3105 callback (anonymous) is asynchronous
 LOG  ok 3106 null key - is Error (callback)
 LOG  ok 3107 null key - correct error code (callback)
 LOG  ok 3108 null key - is Error (callback, second key)
 LOG  ok 3109 null key - correct error code (callback, second key)
 LOG  ok 3110 undefined key - is Error (callback)
 LOG  ok 3111 undefined key - correct error code (callback)
 LOG  ok 3112 undefined key - is Error (callback, second key)
 LOG  ok 3113 undefined key - correct error code (callback, second key)
 LOG  ok 3114 null key - is Error (promise)
 LOG  ok 3115 null key - correct error code (promise)
 LOG  ok 3116 null key - is Error (promise, second key)
 LOG  ok 3117 null key - correct error code (promise, second key)
 LOG  ok 3118 undefined key - is Error (promise)
 LOG  ok 3119 undefined key - correct error code (promise)
 LOG  ok 3120 undefined key - is Error (promise, second key)
 LOG  ok 3121 undefined key - correct error code (promise, second key)
 LOG  # test simple getMany()
 LOG  ok 3122 undefined
 LOG  ok 3123 null
 LOG  ok 3124 got an array
 LOG  ok 3125 array has 1 element
 LOG  ok 3126 should be strictly equal
 LOG  ok 3127 null
 LOG  ok 3128 got an array
 LOG  ok 3129 array has 1 element
 LOG  ok 3130 should be strictly equal
 LOG  ok 3131 null
 LOG  ok 3132 should be string if not buffer
 LOG  ok 3133 should be deeply equivalent
 LOG  # test getMany() with multiple keys
 LOG  ok 3134 undefined
 LOG  ok 3135 null
 LOG  ok 3136 should be deeply equivalent
 LOG  ok 3137 null
 LOG  ok 3138 maintains order of input keys
 LOG  # test empty getMany()
 LOG  ok 3139 callback (anonymous) is asynchronous
 LOG  ok 3140 callback (anonymous) is asynchronous
 LOG  ok 3141 callback (anonymous) is asynchronous
 LOG  ok 3142 callback (anonymous) is asynchronous
 LOG  ok 3143 callback (anonymous) is asynchronous
 LOG  ok 3144 callback (anonymous) is asynchronous
 LOG  ok 3145 null
 LOG  ok 3146 should be deeply equivalent
 LOG  ok 3147 null
 LOG  ok 3148 should be deeply equivalent
 LOG  ok 3149 null
 LOG  ok 3150 should be deeply equivalent
 LOG  ok 3151 null
 LOG  ok 3152 should be deeply equivalent
 LOG  ok 3153 null
 LOG  ok 3154 should be deeply equivalent
 LOG  ok 3155 null
 LOG  ok 3156 should be deeply equivalent
 LOG  # test not-found getMany()
 LOG  ok 3157 callback (anonymous) is asynchronous
 LOG  ok 3158 callback (anonymous) is asynchronous
 LOG  ok 3159 callback (anonymous) is asynchronous
 LOG  ok 3160 callback (anonymous) is asynchronous
 LOG  ok 3161 callback (anonymous) is asynchronous
 LOG  ok 3162 callback (anonymous) is asynchronous
 LOG  ok 3163 null
 LOG  ok 3164 should be deeply equivalent
 LOG  ok 3165 null
 LOG  ok 3166 should be deeply equivalent
 LOG  ok 3167 null
 LOG  ok 3168 should be deeply equivalent
 LOG  ok 3169 null
 LOG  ok 3170 should be deeply equivalent
 LOG  ok 3171 null
 LOG  ok 3172 should be deeply equivalent
 LOG  ok 3173 null
 LOG  ok 3174 should be deeply equivalent
 LOG  # test getMany() with promise
 LOG  ok 3175 should be deeply equivalent
 LOG  ok 3176 should be deeply equivalent
 LOG  ok 3177 should be deeply equivalent
 LOG  ok 3178 should be deeply equivalent
 LOG  ok 3179 should be deeply equivalent
 LOG  ok 3180 should be deeply equivalent
 LOG  # test simultaneous getMany()
 LOG  ok 3181 undefined
 LOG  ok 3182 null
 LOG  ok 3183 should be strictly equal
 LOG  ok 3184 should be strictly equal
 LOG  ok 3185 null
 LOG  ok 3186 should be strictly equal
 LOG  ok 3187 should be strictly equal
 LOG  ok 3188 null
 LOG  ok 3189 should be strictly equal
 LOG  ok 3190 should be strictly equal
 LOG  ok 3191 null
 LOG  ok 3192 should be strictly equal
 LOG  ok 3193 should be strictly equal
 LOG  ok 3194 null
 LOG  ok 3195 should be strictly equal
 LOG  ok 3196 should be strictly equal
 LOG  ok 3197 null
 LOG  ok 3198 should be strictly equal
 LOG  ok 3199 should be strictly equal
 LOG  ok 3200 null
 LOG  ok 3201 should be strictly equal
 LOG  ok 3202 should be strictly equal
 LOG  ok 3203 null
 LOG  ok 3204 should be strictly equal
 LOG  ok 3205 should be strictly equal
 LOG  ok 3206 null
 LOG  ok 3207 should be strictly equal
 LOG  ok 3208 should be strictly equal
 LOG  ok 3209 null
 LOG  ok 3210 should be strictly equal
 LOG  ok 3211 should be strictly equal
 LOG  ok 3212 null
 LOG  ok 3213 should be deeply equivalent
 LOG  ok 3214 null
 LOG  ok 3215 should be deeply equivalent
 LOG  ok 3216 null
 LOG  ok 3217 should be deeply equivalent
 LOG  ok 3218 null
 LOG  ok 3219 should be deeply equivalent
 LOG  ok 3220 null
 LOG  ok 3221 should be deeply equivalent
 LOG  ok 3222 null
 LOG  ok 3223 should be deeply equivalent
 LOG  ok 3224 null
 LOG  ok 3225 should be deeply equivalent
 LOG  ok 3226 null
 LOG  ok 3227 should be deeply equivalent
 LOG  ok 3228 null
 LOG  ok 3229 should be deeply equivalent
 LOG  ok 3230 null
 LOG  ok 3231 should be deeply equivalent
 LOG  # test getMany() on opening db
 LOG  ok 3232 should be strictly equal
 LOG  ok 3233 should be strictly equal
 LOG  ok 3234 (unnamed assert)
 LOG  ok 3235 should be strictly equal
 LOG  ok 3236 should be strictly equal
 LOG  ok 3237 (unnamed assert)
 LOG  ok 3238 callback (anonymous) is asynchronous
 LOG  ok 3239 callback (anonymous) is asynchronous
 LOG  ok 3240 callback (anonymous) is asynchronous
 LOG  ok 3241 callback (anonymous) is asynchronous
 LOG  ok 3242 undefined
 LOG  ok 3243 undefined
 LOG  ok 3244 no error
 LOG  ok 3245 should be deeply equivalent
 LOG  ok 3246 no error
 LOG  ok 3247 should be deeply equivalent
 LOG  ok 3248 no error
 LOG  ok 3249 should be deeply equivalent
 LOG  ok 3250 no error
 LOG  ok 3251 should be deeply equivalent
 LOG  # test getMany() on closed db
 LOG  ok 3252 undefined
 LOG  ok 3253 undefined
 LOG  ok 3254 undefined
 LOG  ok 3255 callback (anonymous) is asynchronous
 LOG  ok 3256 undefined
 LOG  ok 3257 callback (anonymous) is asynchronous
 LOG  ok 3258 should be strictly equal
 LOG  ok 3259 should be strictly equal
 LOG  # test getMany() on closing db
 LOG  ok 3260 undefined
 LOG  ok 3261 callback (anonymous) is asynchronous
 LOG  ok 3262 undefined
 LOG  ok 3263 callback (anonymous) is asynchronous
 LOG  ok 3264 should be strictly equal
 LOG  ok 3265 should be strictly equal
 LOG  ok 3266 undefined
 LOG  ok 3267 undefined
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test batch() with missing `value`
 LOG  ok 3268 callback (anonymous) is asynchronous
 LOG  ok 3269 correct error code (callback)
 LOG  ok 3270 correct error code (promise)
 LOG  # test batch() with illegal values
 LOG  ok 3271 callback (anonymous) is asynchronous
 LOG  ok 3272 callback (anonymous) is asynchronous
 LOG  ok 3273 null key - has error (callback)
 LOG  ok 3274 null key - is Error (callback)
 LOG  ok 3275 correct error code (callback)
 LOG  ok 3276 undefined value - has error (callback)
 LOG  ok 3277 undefined value - is Error (callback)
 LOG  ok 3278 correct error code (callback)
 LOG  ok 3279 null key - is Error (promise)
 LOG  ok 3280 null key - correct error code (promise)
 LOG  ok 3281 undefined value - is Error (promise)
 LOG  ok 3282 undefined value - correct error code (promise)
 LOG  # test batch() with missing `key`
 LOG  ok 3283 callback (anonymous) is asynchronous
 LOG  ok 3284 correct error code (callback)
 LOG  ok 3285 correct error code (promise)
 LOG  # test batch() with illegal keys
 LOG  ok 3286 callback (anonymous) is asynchronous
 LOG  ok 3287 callback (anonymous) is asynchronous
 LOG  ok 3288 null key - has error (callback)
 LOG  ok 3289 null key - is Error (callback)
 LOG  ok 3290 correct error code (callback)
 LOG  ok 3291 undefined key - has error (callback)
 LOG  ok 3292 undefined key - is Error (callback)
 LOG  ok 3293 correct error code (callback)
 LOG  ok 3294 null key - is Error (promise)
 LOG  ok 3295 null key - correct error code (promise)
 LOG  ok 3296 undefined key - is Error (promise)
 LOG  ok 3297 undefined key - correct error code (promise)
 LOG  # test batch() with missing or incorrect type
 LOG  ok 3298 callback (anonymous) is asynchronous
 LOG  ok 3299 callback (anonymous) is asynchronous
 LOG  ok 3300 should be strictly equal
 LOG  ok 3301 correct error message (callback)
 LOG  ok 3302 should be strictly equal
 LOG  ok 3303 correct error message (callback)
 LOG  ok 3304 should be strictly equal
 LOG  ok 3305 correct error message (promise)
 LOG  ok 3306 should be strictly equal
 LOG  ok 3307 correct error message (promise)
 LOG  # test batch() with missing or nullish operations
 LOG  ok 3308 callback (anonymous) is asynchronous
 LOG  ok 3309 callback (anonymous) is asynchronous
 LOG  ok 3310 callback (anonymous) is asynchronous
 LOG  ok 3311 should be strictly equal
 LOG  ok 3312 correct error message (callback)
 LOG  ok 3313 should be strictly equal
 LOG  ok 3314 correct error message (callback)
 LOG  ok 3315 should be strictly equal
 LOG  ok 3316 correct error message (callback)
 LOG  ok 3317 should be strictly equal
 LOG  ok 3318 correct error message (promise)
 LOG  ok 3319 should be strictly equal
 LOG  ok 3320 correct error message (promise)
 LOG  # test batch() with null options
 LOG  ok 3321 undefined
 LOG  ok 3322 resolved
 LOG  # test batch() with null operation
 LOG  ok 3323 callback (anonymous) is asynchronous
 LOG  ok 3324 should be strictly equal
 LOG  ok 3325 correct error message (callback)
 LOG  ok 3326 should be strictly equal
 LOG  ok 3327 correct error message (promise)
 LOG  # test batch() with undefined operation
 LOG  ok 3328 callback (anonymous) is asynchronous
 LOG  ok 3329 should be strictly equal
 LOG  ok 3330 correct error message (callback)
 LOG  ok 3331 should be strictly equal
 LOG  ok 3332 correct error message (promise)
 LOG  # test batch() with number operation
 LOG  ok 3333 callback (anonymous) is asynchronous
 LOG  ok 3334 should be strictly equal
 LOG  ok 3335 correct error message (callback)
 LOG  ok 3336 should be strictly equal
 LOG  ok 3337 correct error message (promise)
 LOG  # test batch() with boolean operation
 LOG  ok 3338 callback (anonymous) is asynchronous
 LOG  ok 3339 should be strictly equal
 LOG  ok 3340 correct error message (callback)
 LOG  ok 3341 should be strictly equal
 LOG  ok 3342 correct error message (promise)
 LOG  # test batch() with empty array
 LOG  ok 3343 callback (anonymous) is asynchronous
 LOG  ok 3344 no error from batch()
 LOG  ok 3345 resolved
 LOG  # test simple batch()
 LOG  ok 3346 undefined
 LOG  ok 3347 null
 LOG  ok 3348 should be strictly equal
 LOG  # test simple batch() with promise
 LOG  ok 3349 should be strictly equal
 LOG  # test multiple batch()
 LOG  ok 3350 undefined
 LOG  ok 3351 null
 LOG  ok 3352 should be strictly equal
 LOG  ok 3353 entry not found
 LOG  ok 3354 value is undefined
 LOG  ok 3355 NotFound error
 LOG  ok 3356 null
 LOG  ok 3357 should be strictly equal
 LOG  # empty values in batch with utf8 valueEncoding
 LOG  ok 3358 should be deeply equivalent
 LOG  ok 3359 should be deeply equivalent
 LOG  ok 3360 should be deeply equivalent
 LOG  # empty keys in batch with utf8 keyEncoding
 LOG  ok 3361 got value 0
 LOG  ok 3362 got value 1
 LOG  ok 3363 got value 2
 LOG  # empty values in batch with buffer valueEncoding
 LOG  not ok 3364 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131263:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 3365 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131263:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 3366 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131263:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # empty keys in batch with buffer keyEncoding
 LOG  ok 3367 got value 0
 LOG  ok 3368 got value 1
 LOG  ok 3369 got value 2
 LOG  # empty values in batch with view valueEncoding
 LOG  not ok 3370 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131261:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 3371 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131261:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 3372 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer >
 LOG      actual:   <Buffer >
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:131261:23
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # empty keys in batch with view keyEncoding
 LOG  ok 3373 got value 0
 LOG  ok 3374 got value 1
 LOG  ok 3375 got value 2
 LOG  # test batch() is atomic
 LOG  ok 3376 should error
 LOG  ok 3377 callback is asynchronous
 LOG  ok 3378 should not be found
 LOG  ok 3379 should not be found
 LOG  # test batch([]) (array-form) emits batch event
 LOG  ok 3380 should be truthy
 LOG  ok 3381 should be deeply equivalent
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test batch has db reference
 LOG  ok 3382 should be truthy
 LOG  # test batch#put() with missing, null or undefined `value`
 LOG  ok 3383 correct error code
 LOG  ok 3384 length is not incremented on error
 LOG  ok 3385 correct error code
 LOG  ok 3386 length is not incremented on error
 LOG  ok 3387 correct error code
 LOG  ok 3388 length is not incremented on error
 LOG  # test batch#put() with missing, null or undefined `key`
 LOG  ok 3389 correct error code
 LOG  ok 3390 length is not incremented on error
 LOG  ok 3391 correct error code
 LOG  ok 3392 length is not incremented on error
 LOG  ok 3393 correct error code
 LOG  ok 3394 length is not incremented on error
 LOG  # test batch#del() with missing, null or undefined `key`
 LOG  ok 3395 correct error code
 LOG  ok 3396 length is not incremented on error
 LOG  ok 3397 correct error code
 LOG  ok 3398 length is not incremented on error
 LOG  ok 3399 correct error code
 LOG  ok 3400 length is not incremented on error
 LOG  # test batch#clear() doesn't throw
 LOG  # test batch#put() after write()
 LOG  ok 3401 correct error code
 LOG  # test batch#del() after write()
 LOG  ok 3402 correct error code
 LOG  # test batch#clear() after write()
 LOG  ok 3403 correct error code
 LOG  # test batch#write() after write()
 LOG  ok 3404 correct error code
 LOG  # test batch#write() with no operations
 LOG  ok 3405 no error from write()
 LOG  ok 3406 callback is asynchronous
 LOG  # test batch#write() with promise and no operations
 LOG  # test twice batch#close() is idempotent
 LOG  ok 3407 callback is asynchronous
 LOG  # test basic batch
 LOG  ok 3408 undefined
 LOG  ok 3409 length was incremented
 LOG  ok 3410 length is reset
 LOG  ok 3411 length was incremented
 LOG  ok 3412 no write() error
 LOG  ok 3413 null
 LOG  ok 3414 should be deeply equivalent
 LOG  # test basic batch with promise
 LOG  ok 3415 undefined
 LOG  ok 3416 null
 LOG  ok 3417 should be deeply equivalent
 LOG  # chained batch with per-operation encoding options
 LOG  ok 3418 should be deeply equivalent
 LOG  ok 3419 should be deeply equivalent
 LOG  # test chained batch() emits batch event
 LOG  ok 3420 should be truthy
 LOG  ok 3421 should be deeply equivalent
 LOG  # test close() on chained batch event
 LOG  # tearDown
 LOG  # setUp db
 LOG  # iterator() has db reference
 LOG  ok 3422 should be truthy
 LOG  # iterator() has limit and count properties
 LOG  ok 3423 defaults to infinite
 LOG  ok 3424 has limit property
 LOG  ok 3425 has limit property
 LOG  ok 3426 has limit property
 LOG  ok 3427 has limit property
 LOG  ok 3428 has count property
 LOG  # iterator().nextv() yields error if size is invalid
 LOG  ok 3429 should be strictly equal
 LOG  ok 3430 should be strictly equal
 LOG  ok 3431 should be strictly equal
 LOG  ok 3432 should be strictly equal
 LOG  # keys() has db reference
 LOG  ok 3433 should be truthy
 LOG  # keys() has limit and count properties
 LOG  ok 3434 defaults to infinite
 LOG  ok 3435 has limit property
 LOG  ok 3436 has limit property
 LOG  ok 3437 has limit property
 LOG  ok 3438 has limit property
 LOG  ok 3439 has count property
 LOG  # keys().nextv() yields error if size is invalid
 LOG  ok 3440 should be strictly equal
 LOG  ok 3441 should be strictly equal
 LOG  ok 3442 should be strictly equal
 LOG  ok 3443 should be strictly equal
 LOG  # values() has db reference
 LOG  ok 3444 should be truthy
 LOG  # values() has limit and count properties
 LOG  ok 3445 defaults to infinite
 LOG  ok 3446 has limit property
 LOG  ok 3447 has limit property
 LOG  ok 3448 has limit property
 LOG  ok 3449 has limit property
 LOG  ok 3450 has count property
 LOG  # values().nextv() yields error if size is invalid
 LOG  ok 3451 should be strictly equal
 LOG  ok 3452 should be strictly equal
 LOG  ok 3453 should be strictly equal
 LOG  ok 3454 should be strictly equal
 LOG  # iterator().close() is idempotent
 LOG  ok 3455 callback is asynchronous
 LOG  # iterator().next() after close() yields error
 LOG  ok 3456 undefined
 LOG  ok 3457 returned error
 LOG  ok 3458 correct message
 LOG  ok 3459 callback is asynchronous
 LOG  # iterator().next() while busy with next() yields error
 LOG  ok 3460 null
 LOG  ok 3461 returned error
 LOG  ok 3462 should be strictly equal
 LOG  ok 3463 callback is asynchronous
 LOG  ok 3464 undefined
 LOG  # iterator().next() while busy with nextv() yields error
 LOG  ok 3465 null
 LOG  ok 3466 returned error
 LOG  ok 3467 should be strictly equal
 LOG  ok 3468 callback is asynchronous
 LOG  ok 3469 undefined
 LOG  # iterator().next() while busy with all() yields error
 LOG  ok 3470 returned error
 LOG  ok 3471 should be strictly equal
 LOG  ok 3472 callback is asynchronous
 LOG  ok 3473 null
 LOG  ok 3474 undefined
 LOG  # iterator().nextv() after close() yields error
 LOG  ok 3475 undefined
 LOG  ok 3476 returned error
 LOG  ok 3477 correct message
 LOG  ok 3478 callback is asynchronous
 LOG  # iterator().nextv() while busy with next() yields error
 LOG  ok 3479 null
 LOG  ok 3480 returned error
 LOG  ok 3481 should be strictly equal
 LOG  ok 3482 callback is asynchronous
 LOG  ok 3483 undefined
 LOG  # iterator().nextv() while busy with nextv() yields error
 LOG  ok 3484 null
 LOG  ok 3485 returned error
 LOG  ok 3486 should be strictly equal
 LOG  ok 3487 callback is asynchronous
 LOG  ok 3488 undefined
 LOG  # iterator().nextv() while busy with all() yields error
 LOG  ok 3489 returned error
 LOG  ok 3490 should be strictly equal
 LOG  ok 3491 callback is asynchronous
 LOG  ok 3492 null
 LOG  ok 3493 undefined
 LOG  # iterator().all() after close() yields error
 LOG  ok 3494 undefined
 LOG  ok 3495 returned error
 LOG  ok 3496 correct message
 LOG  ok 3497 callback is asynchronous
 LOG  # iterator().all() while busy with next() yields error
 LOG  ok 3498 null
 LOG  ok 3499 returned error
 LOG  ok 3500 should be strictly equal
 LOG  ok 3501 callback is asynchronous
 LOG  ok 3502 undefined
 LOG  # iterator().all() while busy with nextv() yields error
 LOG  ok 3503 null
 LOG  ok 3504 returned error
 LOG  ok 3505 should be strictly equal
 LOG  ok 3506 callback is asynchronous
 LOG  ok 3507 undefined
 LOG  # iterator().all() while busy with all() yields error
 LOG  ok 3508 returned error
 LOG  ok 3509 should be strictly equal
 LOG  ok 3510 callback is asynchronous
 LOG  ok 3511 null
 LOG  ok 3512 undefined
 LOG  # keys().close() is idempotent
 LOG  ok 3513 callback is asynchronous
 LOG  # keys().next() after close() yields error
 LOG  ok 3514 undefined
 LOG  ok 3515 returned error
 LOG  ok 3516 correct message
 LOG  ok 3517 callback is asynchronous
 LOG  # keys().next() while busy with next() yields error
 LOG  ok 3518 null
 LOG  ok 3519 returned error
 LOG  ok 3520 should be strictly equal
 LOG  ok 3521 callback is asynchronous
 LOG  ok 3522 undefined
 LOG  # keys().next() while busy with nextv() yields error
 LOG  ok 3523 null
 LOG  ok 3524 returned error
 LOG  ok 3525 should be strictly equal
 LOG  ok 3526 callback is asynchronous
 LOG  ok 3527 undefined
 LOG  # keys().next() while busy with all() yields error
 LOG  ok 3528 returned error
 LOG  ok 3529 should be strictly equal
 LOG  ok 3530 callback is asynchronous
 LOG  ok 3531 null
 LOG  ok 3532 undefined
 LOG  # keys().nextv() after close() yields error
 LOG  ok 3533 undefined
 LOG  ok 3534 returned error
 LOG  ok 3535 correct message
 LOG  ok 3536 callback is asynchronous
 LOG  # keys().nextv() while busy with next() yields error
 LOG  ok 3537 null
 LOG  ok 3538 returned error
 LOG  ok 3539 should be strictly equal
 LOG  ok 3540 callback is asynchronous
 LOG  ok 3541 undefined
 LOG  # keys().nextv() while busy with nextv() yields error
 LOG  ok 3542 null
 LOG  ok 3543 returned error
 LOG  ok 3544 should be strictly equal
 LOG  ok 3545 callback is asynchronous
 LOG  ok 3546 undefined
 LOG  # keys().nextv() while busy with all() yields error
 LOG  ok 3547 returned error
 LOG  ok 3548 should be strictly equal
 LOG  ok 3549 callback is asynchronous
 LOG  ok 3550 null
 LOG  ok 3551 undefined
 LOG  # keys().all() after close() yields error
 LOG  ok 3552 undefined
 LOG  ok 3553 returned error
 LOG  ok 3554 correct message
 LOG  ok 3555 callback is asynchronous
 LOG  # keys().all() while busy with next() yields error
 LOG  ok 3556 null
 LOG  ok 3557 returned error
 LOG  ok 3558 should be strictly equal
 LOG  ok 3559 callback is asynchronous
 LOG  ok 3560 undefined
 LOG  # keys().all() while busy with nextv() yields error
 LOG  ok 3561 null
 LOG  ok 3562 returned error
 LOG  ok 3563 should be strictly equal
 LOG  ok 3564 callback is asynchronous
 LOG  ok 3565 undefined
 LOG  # keys().all() while busy with all() yields error
 LOG  ok 3566 returned error
 LOG  ok 3567 should be strictly equal
 LOG  ok 3568 callback is asynchronous
 LOG  ok 3569 null
 LOG  ok 3570 undefined
 LOG  # values().close() is idempotent
 LOG  ok 3571 callback is asynchronous
 LOG  # values().next() after close() yields error
 LOG  ok 3572 undefined
 LOG  ok 3573 returned error
 LOG  ok 3574 correct message
 LOG  ok 3575 callback is asynchronous
 LOG  # values().next() while busy with next() yields error
 LOG  ok 3576 null
 LOG  ok 3577 returned error
 LOG  ok 3578 should be strictly equal
 LOG  ok 3579 callback is asynchronous
 LOG  ok 3580 undefined
 LOG  # values().next() while busy with nextv() yields error
 LOG  ok 3581 null
 LOG  ok 3582 returned error
 LOG  ok 3583 should be strictly equal
 LOG  ok 3584 callback is asynchronous
 LOG  ok 3585 undefined
 LOG  # values().next() while busy with all() yields error
 LOG  ok 3586 returned error
 LOG  ok 3587 should be strictly equal
 LOG  ok 3588 callback is asynchronous
 LOG  ok 3589 null
 LOG  ok 3590 undefined
 LOG  # values().nextv() after close() yields error
 LOG  ok 3591 undefined
 LOG  ok 3592 returned error
 LOG  ok 3593 correct message
 LOG  ok 3594 callback is asynchronous
 LOG  # values().nextv() while busy with next() yields error
 LOG  ok 3595 null
 LOG  ok 3596 returned error
 LOG  ok 3597 should be strictly equal
 LOG  ok 3598 callback is asynchronous
 LOG  ok 3599 undefined
 LOG  # values().nextv() while busy with nextv() yields error
 LOG  ok 3600 null
 LOG  ok 3601 returned error
 LOG  ok 3602 should be strictly equal
 LOG  ok 3603 callback is asynchronous
 LOG  ok 3604 undefined
 LOG  # values().nextv() while busy with all() yields error
 LOG  ok 3605 returned error
 LOG  ok 3606 should be strictly equal
 LOG  ok 3607 callback is asynchronous
 LOG  ok 3608 null
 LOG  ok 3609 undefined
 LOG  # values().all() after close() yields error
 LOG  ok 3610 undefined
 LOG  ok 3611 returned error
 LOG  ok 3612 correct message
 LOG  ok 3613 callback is asynchronous
 LOG  # values().all() while busy with next() yields error
 LOG  ok 3614 null
 LOG  ok 3615 returned error
 LOG  ok 3616 should be strictly equal
 LOG  ok 3617 callback is asynchronous
 LOG  ok 3618 undefined
 LOG  # values().all() while busy with nextv() yields error
 LOG  ok 3619 null
 LOG  ok 3620 returned error
 LOG  ok 3621 should be strictly equal
 LOG  ok 3622 callback is asynchronous
 LOG  ok 3623 undefined
 LOG  # values().all() while busy with all() yields error
 LOG  ok 3624 returned error
 LOG  ok 3625 should be strictly equal
 LOG  ok 3626 callback is asynchronous
 LOG  ok 3627 null
 LOG  ok 3628 undefined
 LOG  # iterator().next() after db.close() yields error (deferred: false)
 LOG  ok 3629 Optionally succeeded
 LOG  ok 3630 should be strictly equal
 LOG  # iterator().nextv() after db.close() yields error (deferred: false)
 LOG  ok 3631 Optionally succeeded
 LOG  ok 3632 should be strictly equal
 LOG  # iterator().all() after db.close() yields error (deferred: false)
 LOG  ok 3633 Optionally succeeded
 LOG  ok 3634 should be strictly equal
 LOG  # keys().next() after db.close() yields error (deferred: false)
 LOG  ok 3635 Optionally succeeded
 LOG  ok 3636 should be strictly equal
 LOG  # keys().nextv() after db.close() yields error (deferred: false)
 LOG  ok 3637 Optionally succeeded
 LOG  ok 3638 should be strictly equal
 LOG  # keys().all() after db.close() yields error (deferred: false)
 LOG  ok 3639 Optionally succeeded
 LOG  ok 3640 should be strictly equal
 LOG  # values().next() after db.close() yields error (deferred: false)
 LOG  ok 3641 Optionally succeeded
 LOG  ok 3642 should be strictly equal
 LOG  # values().nextv() after db.close() yields error (deferred: false)
 LOG  ok 3643 Optionally succeeded
 LOG  ok 3644 should be strictly equal
 LOG  # values().all() after db.close() yields error (deferred: false)
 LOG  ok 3645 Optionally succeeded
 LOG  ok 3646 should be strictly equal
 LOG  # iterator().next() after db.close() yields error (deferred: true)
 LOG  ok 3647 Optionally succeeded
 LOG  ok 3648 should be strictly equal
 LOG  # iterator().nextv() after db.close() yields error (deferred: true)
 LOG  ok 3649 Optionally succeeded
 LOG  ok 3650 should be strictly equal
 LOG  # iterator().all() after db.close() yields error (deferred: true)
 LOG  ok 3651 Optionally succeeded
 LOG  ok 3652 should be strictly equal
 LOG  # keys().next() after db.close() yields error (deferred: true)
 LOG  ok 3653 Optionally succeeded
 LOG  ok 3654 should be strictly equal
 LOG  # keys().nextv() after db.close() yields error (deferred: true)
 LOG  ok 3655 Optionally succeeded
 LOG  ok 3656 should be strictly equal
 LOG  # keys().all() after db.close() yields error (deferred: true)
 LOG  ok 3657 Optionally succeeded
 LOG  ok 3658 should be strictly equal
 LOG  # values().next() after db.close() yields error (deferred: true)
 LOG  ok 3659 Optionally succeeded
 LOG  ok 3660 should be strictly equal
 LOG  # values().nextv() after db.close() yields error (deferred: true)
 LOG  ok 3661 Optionally succeeded
 LOG  ok 3662 should be strictly equal
 LOG  # values().all() after db.close() yields error (deferred: true)
 LOG  ok 3663 Optionally succeeded
 LOG  ok 3664 should be strictly equal
 LOG  # test simple iterator()
 LOG  ok 3665 undefined
 LOG  ok 3666 null
 LOG  ok 3667 correct key
 LOG  ok 3668 correct value
 LOG  ok 3669 null
 LOG  ok 3670 correct key
 LOG  ok 3671 correct value
 LOG  ok 3672 null
 LOG  ok 3673 correct key
 LOG  ok 3674 correct value
 LOG  ok 3675 null
 LOG  ok 3676 err argument is nullish
 LOG  ok 3677 key argument is undefined
 LOG  ok 3678 value argument is undefined
 LOG  ok 3679 correct number of entries
 LOG  # key-only iterator
 LOG  ok 3680 no next() error
 LOG  ok 3681 should be strictly equal
 LOG  ok 3682 should be strictly equal
 LOG  # value-only iterator
 LOG  ok 3683 no next() error
 LOG  ok 3684 should be strictly equal
 LOG  ok 3685 should be strictly equal
 LOG  # db.keys().next()
 LOG  ok 3686 no next() error
 LOG  ok 3687 should be strictly equal
 LOG  # db.values().next()
 LOG  ok 3688 no next() error
 LOG  ok 3689 should be strictly equal
 LOG  # iterator().nextv()
 LOG  ok 3690 should be deeply equivalent
 LOG  ok 3691 should be deeply equivalent
 LOG  ok 3692 should be deeply equivalent
 LOG  # iterator().nextv() in reverse
 LOG  ok 3693 should be deeply equivalent
 LOG  ok 3694 should be deeply equivalent
 LOG  ok 3695 should be deeply equivalent
 LOG  # iterator().nextv() has soft minimum of 1
 LOG  ok 3696 should be deeply equivalent
 LOG  ok 3697 should be deeply equivalent
 LOG  ok 3698 should be deeply equivalent
 LOG  ok 3699 should be deeply equivalent
 LOG  # iterator().nextv() requesting more than available
 LOG  ok 3700 should be deeply equivalent
 LOG  ok 3701 should be deeply equivalent
 LOG  # iterator().nextv() honors limit
 LOG  ok 3702 should be deeply equivalent
 LOG  ok 3703 should be deeply equivalent
 LOG  # iterator().nextv() honors limit in reverse
 LOG  ok 3704 should be deeply equivalent
 LOG  ok 3705 should be deeply equivalent
 LOG  # iterator().all()
 LOG  ok 3706 should be deeply equivalent
 LOG  ok 3707 should be deeply equivalent
 LOG  # iterator().all() in reverse
 LOG  ok 3708 should be deeply equivalent
 LOG  # iterator().all() honors limit
 LOG  ok 3709 should be deeply equivalent
 LOG  ok 3710 should be deeply equivalent
 LOG  ok 3711 should be deeply equivalent
 LOG  # iterator().all() honors limit in reverse
 LOG  ok 3712 should be deeply equivalent
 LOG  ok 3713 should be deeply equivalent
 LOG  ok 3714 should be deeply equivalent
 LOG  # keys().nextv()
 LOG  ok 3715 should be deeply equivalent
 LOG  ok 3716 should be deeply equivalent
 LOG  ok 3717 should be deeply equivalent
 LOG  # keys().nextv() in reverse
 LOG  ok 3718 should be deeply equivalent
 LOG  ok 3719 should be deeply equivalent
 LOG  ok 3720 should be deeply equivalent
 LOG  # keys().nextv() has soft minimum of 1
 LOG  ok 3721 should be deeply equivalent
 LOG  ok 3722 should be deeply equivalent
 LOG  ok 3723 should be deeply equivalent
 LOG  ok 3724 should be deeply equivalent
 LOG  # keys().nextv() requesting more than available
 LOG  ok 3725 should be deeply equivalent
 LOG  ok 3726 should be deeply equivalent
 LOG  # keys().nextv() honors limit
 LOG  ok 3727 should be deeply equivalent
 LOG  ok 3728 should be deeply equivalent
 LOG  # keys().nextv() honors limit in reverse
 LOG  ok 3729 should be deeply equivalent
 LOG  ok 3730 should be deeply equivalent
 LOG  # keys().all()
 LOG  ok 3731 should be deeply equivalent
 LOG  ok 3732 should be deeply equivalent
 LOG  # keys().all() in reverse
 LOG  ok 3733 should be deeply equivalent
 LOG  # keys().all() honors limit
 LOG  ok 3734 should be deeply equivalent
 LOG  ok 3735 should be deeply equivalent
 LOG  ok 3736 should be deeply equivalent
 LOG  # keys().all() honors limit in reverse
 LOG  ok 3737 should be deeply equivalent
 LOG  ok 3738 should be deeply equivalent
 LOG  ok 3739 should be deeply equivalent
 LOG  # values().nextv()
 LOG  ok 3740 should be deeply equivalent
 LOG  ok 3741 should be deeply equivalent
 LOG  ok 3742 should be deeply equivalent
 LOG  # values().nextv() in reverse
 LOG  ok 3743 should be deeply equivalent
 LOG  ok 3744 should be deeply equivalent
 LOG  ok 3745 should be deeply equivalent
 LOG  # values().nextv() has soft minimum of 1
 LOG  ok 3746 should be deeply equivalent
 LOG  ok 3747 should be deeply equivalent
 LOG  ok 3748 should be deeply equivalent
 LOG  ok 3749 should be deeply equivalent
 LOG  # values().nextv() requesting more than available
 LOG  ok 3750 should be deeply equivalent
 LOG  ok 3751 should be deeply equivalent
 LOG  # values().nextv() honors limit
 LOG  ok 3752 should be deeply equivalent
 LOG  ok 3753 should be deeply equivalent
 LOG  # values().nextv() honors limit in reverse
 LOG  ok 3754 should be deeply equivalent
 LOG  ok 3755 should be deeply equivalent
 LOG  # values().all()
 LOG  ok 3756 should be deeply equivalent
 LOG  ok 3757 should be deeply equivalent
 LOG  # values().all() in reverse
 LOG  ok 3758 should be deeply equivalent
 LOG  # values().all() honors limit
 LOG  ok 3759 should be deeply equivalent
 LOG  ok 3760 should be deeply equivalent
 LOG  ok 3761 should be deeply equivalent
 LOG  # values().all() honors limit in reverse
 LOG  ok 3762 should be deeply equivalent
 LOG  ok 3763 should be deeply equivalent
 LOG  ok 3764 should be deeply equivalent
 LOG  # iterator() sorts lexicographically
 LOG  ok 3765 should be deeply equivalent
 LOG  ok 3766 should be deeply equivalent
 LOG  # test iterator() has byte order (buffer encoding)
 LOG  ok 3767 no open() error
 LOG  ok 3768 no batch() error
 LOG  ok 3769 no all() error
 LOG  ok 3770 order is ok
 LOG  ok 3771 no all() error
 LOG  ok 3772 order is ok
 LOG  # test iterator() with byte range (buffer encoding)
 LOG  ok 3773 should be truthy
 LOG  ok 3774 should be truthy
 LOG  ok 3775 should be deeply equivalent
 LOG  ok 3776 should be truthy
 LOG  ok 3777 should be truthy
 LOG  ok 3778 should be deeply equivalent
 LOG  ok 3779 should be truthy
 LOG  ok 3780 should be truthy
 LOG  ok 3781 should be deeply equivalent
 LOG  ok 3782 should be truthy
 LOG  ok 3783 should be truthy
 LOG  ok 3784 should be deeply equivalent
 LOG  ok 3785 should be truthy
 LOG  ok 3786 should be truthy
 LOG  ok 3787 should be deeply equivalent
 LOG  ok 3788 should be truthy
 LOG  ok 3789 should be truthy
 LOG  ok 3790 should be deeply equivalent
 LOG  ok 3791 should be truthy
 LOG  ok 3792 should be truthy
 LOG  ok 3793 should be deeply equivalent
 LOG  ok 3794 should be truthy
 LOG  ok 3795 should be truthy
 LOG  ok 3796 should be deeply equivalent
 LOG  ok 3797 should be truthy
 LOG  ok 3798 should be truthy
 LOG  ok 3799 should be deeply equivalent
 LOG  ok 3800 should be truthy
 LOG  ok 3801 should be truthy
 LOG  ok 3802 should be deeply equivalent
 LOG  ok 3803 should be truthy
 LOG  ok 3804 should be truthy
 LOG  ok 3805 should be deeply equivalent
 LOG  ok 3806 should be truthy
 LOG  ok 3807 should be truthy
 LOG  ok 3808 should be deeply equivalent
 LOG  ok 3809 should be truthy
 LOG  ok 3810 should be truthy
 LOG  ok 3811 should be deeply equivalent
 LOG  ok 3812 should be truthy
 LOG  ok 3813 should be truthy
 LOG  ok 3814 should be deeply equivalent
 LOG  ok 3815 should be truthy
 LOG  ok 3816 should be truthy
 LOG  ok 3817 should be deeply equivalent
 LOG  ok 3818 should be truthy
 LOG  ok 3819 should be truthy
 LOG  ok 3820 should be deeply equivalent
 LOG  ok 3821 should be truthy
 LOG  ok 3822 should be truthy
 LOG  ok 3823 should be deeply equivalent
 LOG  ok 3824 should be truthy
 LOG  ok 3825 should be truthy
 LOG  ok 3826 should be deeply equivalent
 LOG  ok 3827 should be truthy
 LOG  ok 3828 should be truthy
 LOG  ok 3829 should be deeply equivalent
 LOG  ok 3830 should be truthy
 LOG  ok 3831 should be truthy
 LOG  ok 3832 should be deeply equivalent
 LOG  ok 3833 should be truthy
 LOG  ok 3834 should be truthy
 LOG  ok 3835 should be deeply equivalent
 LOG  ok 3836 should be truthy
 LOG  ok 3837 should be truthy
 LOG  ok 3838 should be deeply equivalent
 LOG  ok 3839 should be truthy
 LOG  ok 3840 should be truthy
 LOG  ok 3841 should be deeply equivalent
 LOG  ok 3842 should be truthy
 LOG  ok 3843 should be truthy
 LOG  ok 3844 should be deeply equivalent
 LOG  # test iterator() has byte order (view encoding)
 LOG  ok 3845 no open() error
 LOG  ok 3846 no batch() error
 LOG  ok 3847 no all() error
 LOG  ok 3848 order is ok
 LOG  ok 3849 no all() error
 LOG  ok 3850 order is ok
 LOG  # test iterator() with byte range (view encoding)
 LOG  ok 3851 should be truthy
 LOG  ok 3852 should be truthy
 LOG  ok 3853 should be deeply equivalent
 LOG  ok 3854 should be truthy
 LOG  ok 3855 should be truthy
 LOG  ok 3856 should be deeply equivalent
 LOG  ok 3857 should be truthy
 LOG  ok 3858 should be truthy
 LOG  ok 3859 should be deeply equivalent
 LOG  ok 3860 should be truthy
 LOG  ok 3861 should be truthy
 LOG  ok 3862 should be deeply equivalent
 LOG  ok 3863 should be truthy
 LOG  ok 3864 should be truthy
 LOG  ok 3865 should be deeply equivalent
 LOG  ok 3866 should be truthy
 LOG  ok 3867 should be truthy
 LOG  ok 3868 should be deeply equivalent
 LOG  ok 3869 should be truthy
 LOG  ok 3870 should be truthy
 LOG  ok 3871 should be deeply equivalent
 LOG  ok 3872 should be truthy
 LOG  ok 3873 should be truthy
 LOG  ok 3874 should be deeply equivalent
 LOG  ok 3875 should be truthy
 LOG  ok 3876 should be truthy
 LOG  ok 3877 should be deeply equivalent
 LOG  ok 3878 should be truthy
 LOG  ok 3879 should be truthy
 LOG  ok 3880 should be deeply equivalent
 LOG  ok 3881 should be truthy
 LOG  ok 3882 should be truthy
 LOG  ok 3883 should be deeply equivalent
 LOG  ok 3884 should be truthy
 LOG  ok 3885 should be truthy
 LOG  ok 3886 should be deeply equivalent
 LOG  ok 3887 should be truthy
 LOG  ok 3888 should be truthy
 LOG  ok 3889 should be deeply equivalent
 LOG  ok 3890 should be truthy
 LOG  ok 3891 should be truthy
 LOG  ok 3892 should be deeply equivalent
 LOG  ok 3893 should be truthy
 LOG  ok 3894 should be truthy
 LOG  ok 3895 should be deeply equivalent
 LOG  ok 3896 should be truthy
 LOG  ok 3897 should be truthy
 LOG  ok 3898 should be deeply equivalent
 LOG  ok 3899 should be truthy
 LOG  ok 3900 should be truthy
 LOG  ok 3901 should be deeply equivalent
 LOG  ok 3902 should be truthy
 LOG  ok 3903 should be truthy
 LOG  ok 3904 should be deeply equivalent
 LOG  ok 3905 should be truthy
 LOG  ok 3906 should be truthy
 LOG  ok 3907 should be deeply equivalent
 LOG  ok 3908 should be truthy
 LOG  ok 3909 should be truthy
 LOG  ok 3910 should be deeply equivalent
 LOG  ok 3911 should be truthy
 LOG  ok 3912 should be truthy
 LOG  ok 3913 should be deeply equivalent
 LOG  ok 3914 should be truthy
 LOG  ok 3915 should be truthy
 LOG  ok 3916 should be deeply equivalent
 LOG  ok 3917 should be truthy
 LOG  ok 3918 should be truthy
 LOG  ok 3919 should be deeply equivalent
 LOG  ok 3920 should be truthy
 LOG  ok 3921 should be truthy
 LOG  ok 3922 should be deeply equivalent
 LOG  # iterator().next() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 3923 non-deferred
 LOG  ok 3924 should be strictly equal
 LOG  ok 3925 should be strictly equal
 LOG  ok 3926 should be strictly equal
 LOG  # iterator().next() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 3927 non-deferred
 LOG  ok 3928 should be strictly equal
 LOG  ok 3929 should be strictly equal
 LOG  ok 3930 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 3931 non-deferred
 LOG  ok 3932 should be strictly equal
 LOG  ok 3933 should be strictly equal
 LOG  ok 3934 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 3935 non-deferred
 LOG  ok 3936 should be strictly equal
 LOG  ok 3937 should be strictly equal
 LOG  ok 3938 should be strictly equal
 LOG  # iterator().all() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 3939 non-deferred
 LOG  ok 3940 should be strictly equal
 LOG  ok 3941 should be strictly equal
 LOG  ok 3942 should be strictly equal
 LOG  # iterator().all() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 3943 non-deferred
 LOG  ok 3944 should be strictly equal
 LOG  ok 3945 should be strictly equal
 LOG  ok 3946 should be strictly equal
 LOG  # keys().next() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 3947 non-deferred
 LOG  ok 3948 should be strictly equal
 LOG  ok 3949 should be strictly equal
 LOG  ok 3950 should be strictly equal
 LOG  # keys().nextv() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 3951 non-deferred
 LOG  ok 3952 should be strictly equal
 LOG  ok 3953 should be strictly equal
 LOG  ok 3954 should be strictly equal
 LOG  # keys().all() catches decoding error from keyEncoding (deferred: false)
 LOG  ok 3955 non-deferred
 LOG  ok 3956 should be strictly equal
 LOG  ok 3957 should be strictly equal
 LOG  ok 3958 should be strictly equal
 LOG  # values().next() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 3959 non-deferred
 LOG  ok 3960 should be strictly equal
 LOG  ok 3961 should be strictly equal
 LOG  ok 3962 should be strictly equal
 LOG  # values().nextv() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 3963 non-deferred
 LOG  ok 3964 should be strictly equal
 LOG  ok 3965 should be strictly equal
 LOG  ok 3966 should be strictly equal
 LOG  # values().all() catches decoding error from valueEncoding (deferred: false)
 LOG  ok 3967 non-deferred
 LOG  ok 3968 should be strictly equal
 LOG  ok 3969 should be strictly equal
 LOG  ok 3970 should be strictly equal
 LOG  # iterator().next() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 3971 undefined
 LOG  ok 3972 should be strictly equal
 LOG  ok 3973 should be strictly equal
 LOG  ok 3974 should be strictly equal
 LOG  # iterator().next() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 3975 undefined
 LOG  ok 3976 should be strictly equal
 LOG  ok 3977 should be strictly equal
 LOG  ok 3978 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 3979 undefined
 LOG  ok 3980 should be strictly equal
 LOG  ok 3981 should be strictly equal
 LOG  ok 3982 should be strictly equal
 LOG  # iterator().nextv() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 3983 undefined
 LOG  ok 3984 should be strictly equal
 LOG  ok 3985 should be strictly equal
 LOG  ok 3986 should be strictly equal
 LOG  # iterator().all() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 3987 undefined
 LOG  ok 3988 should be strictly equal
 LOG  ok 3989 should be strictly equal
 LOG  ok 3990 should be strictly equal
 LOG  # iterator().all() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 3991 undefined
 LOG  ok 3992 should be strictly equal
 LOG  ok 3993 should be strictly equal
 LOG  ok 3994 should be strictly equal
 LOG  # keys().next() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 3995 undefined
 LOG  ok 3996 should be strictly equal
 LOG  ok 3997 should be strictly equal
 LOG  ok 3998 should be strictly equal
 LOG  # keys().nextv() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 3999 undefined
 LOG  ok 4000 should be strictly equal
 LOG  ok 4001 should be strictly equal
 LOG  ok 4002 should be strictly equal
 LOG  # keys().all() catches decoding error from keyEncoding (deferred: true)
 LOG  ok 4003 undefined
 LOG  ok 4004 should be strictly equal
 LOG  ok 4005 should be strictly equal
 LOG  ok 4006 should be strictly equal
 LOG  # values().next() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 4007 undefined
 LOG  ok 4008 should be strictly equal
 LOG  ok 4009 should be strictly equal
 LOG  ok 4010 should be strictly equal
 LOG  # values().nextv() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 4011 undefined
 LOG  ok 4012 should be strictly equal
 LOG  ok 4013 should be strictly equal
 LOG  ok 4014 should be strictly equal
 LOG  # values().all() catches decoding error from valueEncoding (deferred: true)
 LOG  ok 4015 undefined
 LOG  ok 4016 should be strictly equal
 LOG  ok 4017 should be strictly equal
 LOG  ok 4018 should be strictly equal
 LOG  # tearDown
 LOG  # setUp db
 LOG  # test full data collection
 LOG  ok 4019 null
 LOG  ok 4020 correct number of entries
 LOG  ok 4021 should be deeply equivalent
 LOG  # test full data collection (flipped)
 LOG  ok 4022 null
 LOG  ok 4023 correct number of entries
 LOG  ok 4024 should be deeply equivalent
 LOG  # test iterator with reverse=true
 LOG  ok 4025 null
 LOG  ok 4026 correct number of entries
 LOG  ok 4027 should be deeply equivalent
 LOG  # test iterator with gte=00
 LOG  ok 4028 null
 LOG  ok 4029 correct number of entries
 LOG  ok 4030 should be deeply equivalent
 LOG  # test iterator with gte=00 (flipped)
 LOG  ok 4031 null
 LOG  ok 4032 correct number of entries
 LOG  ok 4033 should be deeply equivalent
 LOG  # test iterator with gte=50
 LOG  ok 4034 null
 LOG  ok 4035 correct number of entries
 LOG  ok 4036 should be deeply equivalent
 LOG  # test iterator with gte=50 (flipped)
 LOG  ok 4037 null
 LOG  ok 4038 correct number of entries
 LOG  ok 4039 should be deeply equivalent
 LOG  # test iterator with lte=50 and reverse=true
 LOG  ok 4040 null
 LOG  ok 4041 correct number of entries
 LOG  ok 4042 should be deeply equivalent
 LOG  # test iterator with gte=49.5 (midway)
 LOG  ok 4043 null
 LOG  ok 4044 correct number of entries
 LOG  ok 4045 should be deeply equivalent
 LOG  # test iterator with gte=49.5 (midway) (flipped)
 LOG  ok 4046 null
 LOG  ok 4047 correct number of entries
 LOG  ok 4048 should be deeply equivalent
 LOG  # test iterator with gte=49999 (midway)
 LOG  ok 4049 null
 LOG  ok 4050 correct number of entries
 LOG  ok 4051 should be deeply equivalent
 LOG  # test iterator with gte=49999 (midway) (flipped)
 LOG  ok 4052 null
 LOG  ok 4053 correct number of entries
 LOG  ok 4054 should be deeply equivalent
 LOG  # test iterator with lte=49.5 (midway) and reverse=true
 LOG  ok 4055 null
 LOG  ok 4056 correct number of entries
 LOG  ok 4057 should be deeply equivalent
 LOG  # test iterator with lt=49.5 (midway) and reverse=true
 LOG  ok 4058 null
 LOG  ok 4059 correct number of entries
 LOG  ok 4060 should be deeply equivalent
 LOG  # test iterator with lt=50 and reverse=true
 LOG  ok 4061 null
 LOG  ok 4062 correct number of entries
 LOG  ok 4063 should be deeply equivalent
 LOG  # test iterator with lte=50
 LOG  ok 4064 null
 LOG  ok 4065 correct number of entries
 LOG  ok 4066 should be deeply equivalent
 LOG  # test iterator with lte=50 (flipped)
 LOG  ok 4067 null
 LOG  ok 4068 correct number of entries
 LOG  ok 4069 should be deeply equivalent
 LOG  # test iterator with lte=50.5 (midway)
 LOG  ok 4070 null
 LOG  ok 4071 correct number of entries
 LOG  ok 4072 should be deeply equivalent
 LOG  # test iterator with lte=50.5 (midway) (flipped)
 LOG  ok 4073 null
 LOG  ok 4074 correct number of entries
 LOG  ok 4075 should be deeply equivalent
 LOG  # test iterator with lte=50555 (midway)
 LOG  ok 4076 null
 LOG  ok 4077 correct number of entries
 LOG  ok 4078 should be deeply equivalent
 LOG  # test iterator with lte=50555 (midway) (flipped)
 LOG  ok 4079 null
 LOG  ok 4080 correct number of entries
 LOG  ok 4081 should be deeply equivalent
 LOG  # test iterator with lt=50555 (midway)
 LOG  ok 4082 null
 LOG  ok 4083 correct number of entries
 LOG  ok 4084 should be deeply equivalent
 LOG  # test iterator with lt=50555 (midway) (flipped)
 LOG  ok 4085 null
 LOG  ok 4086 correct number of entries
 LOG  ok 4087 should be deeply equivalent
 LOG  # test iterator with gte=50.5 (midway) and reverse=true
 LOG  ok 4088 null
 LOG  ok 4089 correct number of entries
 LOG  ok 4090 should be deeply equivalent
 LOG  # test iterator with gt=50.5 (midway) and reverse=true
 LOG  ok 4091 null
 LOG  ok 4092 correct number of entries
 LOG  ok 4093 should be deeply equivalent
 LOG  # test iterator with gt=50 and reverse=true
 LOG  ok 4094 null
 LOG  ok 4095 correct number of entries
 LOG  ok 4096 should be deeply equivalent
 LOG  # test iterator with lte=0
 LOG  ok 4097 null
 LOG  ok 4098 correct number of entries
 LOG  ok 4099 should be deeply equivalent
 LOG  # test iterator with lte=0 (flipped)
 LOG  ok 4100 null
 LOG  ok 4101 correct number of entries
 LOG  ok 4102 should be deeply equivalent
 LOG  # test iterator with lt=0
 LOG  ok 4103 null
 LOG  ok 4104 correct number of entries
 LOG  ok 4105 should be deeply equivalent
 LOG  # test iterator with lt=0 (flipped)
 LOG  ok 4106 null
 LOG  ok 4107 correct number of entries
 LOG  ok 4108 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70
 LOG  ok 4109 null
 LOG  ok 4110 correct number of entries
 LOG  ok 4111 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 (flipped)
 LOG  ok 4112 null
 LOG  ok 4113 correct number of entries
 LOG  ok 4114 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=40 and lt=60
 LOG  ok 4115 null
 LOG  ok 4116 correct number of entries
 LOG  ok 4117 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=40 and lt=60 (flipped)
 LOG  ok 4118 null
 LOG  ok 4119 correct number of entries
 LOG  ok 4120 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=20 and lt=80
 LOG  ok 4121 null
 LOG  ok 4122 correct number of entries
 LOG  ok 4123 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and gt=20 and lt=80 (flipped)
 LOG  ok 4124 null
 LOG  ok 4125 correct number of entries
 LOG  ok 4126 should be deeply equivalent
 LOG  # test iterator with gt=29 and lt=71
 LOG  ok 4127 null
 LOG  ok 4128 correct number of entries
 LOG  ok 4129 should be deeply equivalent
 LOG  # test iterator with gt=29 and lt=71 (flipped)
 LOG  ok 4130 null
 LOG  ok 4131 correct number of entries
 LOG  ok 4132 should be deeply equivalent
 LOG  # test iterator with gte=30 and lte=70 and reverse=true
 LOG  ok 4133 null
 LOG  ok 4134 correct number of entries
 LOG  ok 4135 should be deeply equivalent
 LOG  # test iterator with gt=29 and lt=71 and reverse=true
 LOG  ok 4136 null
 LOG  ok 4137 correct number of entries
 LOG  ok 4138 should be deeply equivalent
 LOG  # test iterator with limit=20
 LOG  ok 4139 null
 LOG  ok 4140 correct number of entries
 LOG  ok 4141 should be deeply equivalent
 LOG  # test iterator with limit=20 and gte=20
 LOG  ok 4142 null
 LOG  ok 4143 correct number of entries
 LOG  ok 4144 should be deeply equivalent
 LOG  # test iterator with limit=20 and reverse=true
 LOG  ok 4145 null
 LOG  ok 4146 correct number of entries
 LOG  ok 4147 should be deeply equivalent
 LOG  # test iterator with limit=20 and lte=79 and reverse=true
 LOG  ok 4148 null
 LOG  ok 4149 correct number of entries
 LOG  ok 4150 should be deeply equivalent
 LOG  # test iterator with limit=-1 should iterate over whole database
 LOG  ok 4151 null
 LOG  ok 4152 correct number of entries
 LOG  ok 4153 should be deeply equivalent
 LOG  # test iterator with limit=0 should not iterate over anything
 LOG  ok 4154 null
 LOG  ok 4155 correct number of entries
 LOG  ok 4156 should be deeply equivalent
 LOG  # test iterator with lte after limit
 LOG  ok 4157 null
 LOG  ok 4158 correct number of entries
 LOG  ok 4159 should be deeply equivalent
 LOG  # test iterator with lte before limit
 LOG  ok 4160 null
 LOG  ok 4161 correct number of entries
 LOG  ok 4162 should be deeply equivalent
 LOG  # test iterator with gte after database end
 LOG  ok 4163 null
 LOG  ok 4164 correct number of entries
 LOG  ok 4165 should be deeply equivalent
 LOG  # test iterator with gte after database end (flipped)
 LOG  ok 4166 null
 LOG  ok 4167 correct number of entries
 LOG  ok 4168 should be deeply equivalent
 LOG  # test iterator with gt after database end
 LOG  ok 4169 null
 LOG  ok 4170 correct number of entries
 LOG  ok 4171 should be deeply equivalent
 LOG  # test iterator with gt after database end (flipped)
 LOG  ok 4172 null
 LOG  ok 4173 correct number of entries
 LOG  ok 4174 should be deeply equivalent
 LOG  # test iterator with lte after database end and reverse=true
 LOG  ok 4175 null
 LOG  ok 4176 correct number of entries
 LOG  ok 4177 should be deeply equivalent
 LOG  # test iterator with lt after database end
 LOG  ok 4178 null
 LOG  ok 4179 correct number of entries
 LOG  ok 4180 should be deeply equivalent
 LOG  # test iterator with lt after database end (flipped)
 LOG  ok 4181 null
 LOG  ok 4182 correct number of entries
 LOG  ok 4183 should be deeply equivalent
 LOG  # test iterator with lt at database end
 LOG  ok 4184 null
 LOG  ok 4185 correct number of entries
 LOG  ok 4186 should be deeply equivalent
 LOG  # test iterator with lt at database end (flipped)
 LOG  ok 4187 null
 LOG  ok 4188 correct number of entries
 LOG  ok 4189 should be deeply equivalent
 LOG  # test iterator with lte at database end
 LOG  ok 4190 null
 LOG  ok 4191 correct number of entries
 LOG  ok 4192 should be deeply equivalent
 LOG  # test iterator with lte at database end (flipped)
 LOG  ok 4193 null
 LOG  ok 4194 correct number of entries
 LOG  ok 4195 should be deeply equivalent
 LOG  # test iterator with lt before database end
 LOG  ok 4196 null
 LOG  ok 4197 correct number of entries
 LOG  ok 4198 should be deeply equivalent
 LOG  # test iterator with lt before database end (flipped)
 LOG  ok 4199 null
 LOG  ok 4200 correct number of entries
 LOG  ok 4201 should be deeply equivalent
 LOG  # test iterator with lte before database end
 LOG  ok 4202 null
 LOG  ok 4203 correct number of entries
 LOG  ok 4204 should be deeply equivalent
 LOG  # test iterator with lte before database end (flipped)
 LOG  ok 4205 null
 LOG  ok 4206 correct number of entries
 LOG  ok 4207 should be deeply equivalent
 LOG  # test iterator with lte and gte after database and reverse=true
 LOG  ok 4208 null
 LOG  ok 4209 correct number of entries
 LOG  ok 4210 should be deeply equivalent
 LOG  # test iterator with lt and gt after database and reverse=true
 LOG  ok 4211 null
 LOG  ok 4212 correct number of entries
 LOG  ok 4213 should be deeply equivalent
 LOG  # gt greater than lt
 LOG  ok 4214 null
 LOG  ok 4215 correct number of entries
 LOG  ok 4216 should be deeply equivalent
 LOG  # gt greater than lt (flipped)
 LOG  ok 4217 null
 LOG  ok 4218 correct number of entries
 LOG  ok 4219 should be deeply equivalent
 LOG  # gte greater than lte
 LOG  ok 4220 null
 LOG  ok 4221 correct number of entries
 LOG  ok 4222 should be deeply equivalent
 LOG  # gte greater than lte (flipped)
 LOG  ok 4223 null
 LOG  ok 4224 correct number of entries
 LOG  ok 4225 should be deeply equivalent
 LOG  # tearDown
 LOG  # setup
 LOG  ok 4226 no open() error
 LOG  ok 4227 no batch() error
 LOG  # for await...of iterator()
 LOG  ok 4228 should be deeply equivalent
 LOG  # for await...of iterator() (deferred)
 LOG  ok 4229 should be deeply equivalent
 LOG  # for await...of iterator() (empty, deferred: false)
 LOG  ok 4230 should be deeply equivalent
 LOG  # for await...of iterator() (empty, deferred: true)
 LOG  ok 4231 should be deeply equivalent
 LOG  # for await...of iterator() does not permit reuse
 LOG  ok 4232 nexted
 LOG  ok 4233 nexted
 LOG  ok 4234 should be strictly equal
 LOG  # for await...of keys()
 LOG  ok 4235 should be deeply equivalent
 LOG  # for await...of keys() (deferred)
 LOG  ok 4236 should be deeply equivalent
 LOG  # for await...of keys() (empty, deferred: false)
 LOG  ok 4237 should be deeply equivalent
 LOG  # for await...of keys() (empty, deferred: true)
 LOG  ok 4238 should be deeply equivalent
 LOG  # for await...of keys() does not permit reuse
 LOG  ok 4239 nexted
 LOG  ok 4240 nexted
 LOG  ok 4241 should be strictly equal
 LOG  # for await...of values()
 LOG  ok 4242 should be deeply equivalent
 LOG  # for await...of values() (deferred)
 LOG  ok 4243 should be deeply equivalent
 LOG  # for await...of values() (empty, deferred: false)
 LOG  ok 4244 should be deeply equivalent
 LOG  # for await...of values() (empty, deferred: true)
 LOG  ok 4245 should be deeply equivalent
 LOG  # for await...of values() does not permit reuse
 LOG  ok 4246 nexted
 LOG  ok 4247 nexted
 LOG  ok 4248 should be strictly equal
 LOG  # teardown
 LOG  ok 4249 no close() error
 LOG  # deferred open(): put() and get() on new database
 LOG  ok 4250 should be strictly equal
 LOG  ok 4251 no put() error
 LOG  ok 4252 no put() error
 LOG  ok 4253 no put() error
 LOG  ok 4254 no get() error
 LOG  ok 4255 value is ok
 LOG  ok 4256 status is ok
 LOG  ok 4257 no get() error
 LOG  ok 4258 value is ok
 LOG  ok 4259 status is ok
 LOG  ok 4260 no get() error
 LOG  ok 4261 value is ok
 LOG  ok 4262 status is ok
 LOG  ok 4263 should be truthy
 LOG  ok 4264 undefined
 LOG  # deferred open(): batch() on new database
 LOG  ok 4265 should be strictly equal
 LOG  ok 4266 no batch() error
 LOG  ok 4267 no get() error
 LOG  ok 4268 value is ok
 LOG  ok 4269 status is ok
 LOG  ok 4270 no get() error
 LOG  ok 4271 value is ok
 LOG  ok 4272 status is ok
 LOG  ok 4273 no get() error
 LOG  ok 4274 value is ok
 LOG  ok 4275 status is ok
 LOG  ok 4276 should be truthy
 LOG  ok 4277 undefined
 LOG  # deferred open(): chained batch() on new database
 LOG  ok 4278 should be strictly equal
 LOG  ok 4279 no write() error
 LOG  ok 4280 no get() error
 LOG  ok 4281 value is ok
 LOG  ok 4282 status is ok
 LOG  ok 4283 no get() error
 LOG  ok 4284 value is ok
 LOG  ok 4285 status is ok
 LOG  ok 4286 no get() error
 LOG  ok 4287 value is ok
 LOG  ok 4288 status is ok
 LOG  ok 4289 should be truthy
 LOG  ok 4290 undefined
 LOG  # deferred open(): put() and get() on reopened database
 LOG  ok 4291 should be strictly equal
 LOG  ok 4292 should be strictly equal
 LOG  ok 4293 should be strictly equal
 LOG  ok 4294 should be strictly equal
 LOG  # deferred open(): value of queued operation is not stringified
 LOG  ok 4295 undefined
 LOG  ok 4296 null
 LOG  ok 4297 should be deeply equivalent
 LOG  ok 4298 undefined
 LOG  # deferred open(): key of queued operation is not stringified
 LOG  ok 4299 undefined
 LOG  ok 4300 no next() error
 LOG  ok 4301 should be deeply equivalent
 LOG  ok 4302 undefined
 LOG  # cannot operate on closed db
 LOG  ok 4303 undefined
 LOG  ok 4304 undefined
 LOG  ok 4305 should be strictly equal
 LOG  ok 4306 should be strictly equal
 LOG  ok 4307 should be strictly equal
 LOG  ok 4308 should be strictly equal
 LOG  # cannot operate on closing db
 LOG  ok 4309 undefined
 LOG  ok 4310 should be strictly equal
 LOG  ok 4311 should be strictly equal
 LOG  ok 4312 should be strictly equal
 LOG  ok 4313 should be strictly equal
 LOG  ok 4314 undefined
 LOG  # deferred iterator - cannot operate on closed db
 LOG  ok 4315 should be truthy
 LOG  ok 4316 no error
 LOG  ok 4317 undefined
 LOG  ok 4318 should be strictly equal
 LOG  ok 4319 should be strictly equal
 LOG  ok 4320 should be strictly equal
 LOG  ok 4321 no close() error
 LOG  ok 4322 should be strictly equal
 LOG  ok 4323 should be strictly equal
 LOG  ok 4324 should be strictly equal
 LOG  # deferred iterator - cannot operate on closing db
 LOG  ok 4325 should be truthy
 LOG  ok 4326 no error
 LOG  ok 4327 no close() error
 LOG  ok 4328 should be strictly equal
 LOG  ok 4329 should be strictly equal
 LOG  ok 4330 should be strictly equal
 LOG  ok 4331 undefined
 LOG  ok 4332 should be strictly equal
 LOG  ok 4333 should be strictly equal
 LOG  ok 4334 should be strictly equal
 LOG  # setup
 LOG  # encodings default to utf8
 LOG  ok 4335 should be strictly equal
 LOG  ok 4336 should be strictly equal
 LOG  # can set encoding options in factory
 LOG  ok 4337 should be strictly equal
 LOG  ok 4338 should be strictly equal
 LOG  ok 4339 should be strictly equal
 LOG  ok 4340 should be strictly equal
 LOG  ok 4341 should be strictly equal
 LOG  ok 4342 should be strictly equal
 LOG  ok 4343 should be strictly equal
 LOG  ok 4344 should be strictly equal
 LOG  ok 4345 should be strictly equal
 LOG  ok 4346 should be strictly equal
 LOG  ok 4347 should be strictly equal
 LOG  ok 4348 should be strictly equal
 LOG  ok 4349 should be strictly equal
 LOG  ok 4350 should be strictly equal
 LOG  ok 4351 should be strictly equal
 LOG  ok 4352 should be strictly equal
 LOG  ok 4353 should be strictly equal
 LOG  ok 4354 should be strictly equal
 LOG  ok 4355 should be strictly equal
 LOG  ok 4356 should be strictly equal
 LOG  ok 4357 should be strictly equal
 LOG  ok 4358 should be strictly equal
 LOG  ok 4359 should be strictly equal
 LOG  ok 4360 should be strictly equal
 LOG  ok 4361 should be strictly equal
 LOG  ok 4362 should be strictly equal
 LOG  ok 4363 should be strictly equal
 LOG  ok 4364 should be strictly equal
 LOG  ok 4365 should be strictly equal
 LOG  ok 4366 should be strictly equal
 LOG  ok 4367 should be strictly equal
 LOG  ok 4368 should be strictly equal
 LOG  ok 4369 should be strictly equal
 LOG  ok 4370 should be strictly equal
 LOG  ok 4371 should be strictly equal
 LOG  ok 4372 should be strictly equal
 LOG  # default utf8 encoding stringifies numbers (deferred: false)
 LOG  ok 4373 should be strictly equal
 LOG  # default utf8 encoding stringifies numbers (deferred: true)
 LOG  ok 4374 should be strictly equal
 LOG  # can decode from string to json
 LOG  ok 4375 no put() error
 LOG  ok 4376 no get() error
 LOG  ok 4377 got parsed object
 LOG  # can decode from json to string
 LOG  ok 4378 no put() error
 LOG  ok 4379 no get() error
 LOG  ok 4380 got unparsed JSON string
 LOG  # getMany() skips decoding not-found values
 LOG  ok 4381 no put() error
 LOG  ok 4382 should be strictly equal
 LOG  ok 4383 no getMany() error
 LOG  ok 4384 should be deeply equivalent
 LOG  # number keys with utf8 encoding
 LOG  ok 4385 sorts lexicographically
 LOG  # teardown
 LOG  # json encoding: simple-object values (deferred: false)
 LOG  ok 4386 no init() error
 LOG  ok 4387 no batch() error
 LOG  ok 4388 no get() error
 LOG  ok 4389 should be deeply equivalent
 LOG  ok 4390 no get() error
 LOG  ok 4391 should be deeply equivalent
 LOG  ok 4392 no get() error
 LOG  ok 4393 should be deeply equivalent
 LOG  ok 4394 no get() error
 LOG  ok 4395 should be deeply equivalent
 LOG  ok 4396 no get() error
 LOG  ok 4397 should be deeply equivalent
 LOG  ok 4398 no all() error
 LOG  ok 4399 should be deeply equivalent
 LOG  # json encoding: simple-object keys (deferred: false)
 LOG  ok 4400 no init() error
 LOG  ok 4401 no batch() error
 LOG  ok 4402 no get() error
 LOG  ok 4403 should be deeply equivalent
 LOG  ok 4404 no get() error
 LOG  ok 4405 should be deeply equivalent
 LOG  ok 4406 no get() error
 LOG  ok 4407 should be deeply equivalent
 LOG  ok 4408 no get() error
 LOG  ok 4409 should be deeply equivalent
 LOG  ok 4410 no get() error
 LOG  ok 4411 should be deeply equivalent
 LOG  ok 4412 no all() error
 LOG  ok 4413 should be deeply equivalent
 LOG  # json encoding: complex-object values (deferred: false)
 LOG  ok 4414 no init() error
 LOG  ok 4415 no batch() error
 LOG  ok 4416 no get() error
 LOG  ok 4417 should be deeply equivalent
 LOG  ok 4418 no all() error
 LOG  ok 4419 should be deeply equivalent
 LOG  # json encoding: complex-object keys (deferred: false)
 LOG  ok 4420 no init() error
 LOG  ok 4421 no batch() error
 LOG  ok 4422 no get() error
 LOG  ok 4423 should be deeply equivalent
 LOG  ok 4424 no all() error
 LOG  ok 4425 should be deeply equivalent
 LOG  # json encoding: simple-object values (deferred: true)
 LOG  ok 4426 no init() error
 LOG  ok 4427 no batch() error
 LOG  ok 4428 no get() error
 LOG  ok 4429 should be deeply equivalent
 LOG  ok 4430 no get() error
 LOG  ok 4431 should be deeply equivalent
 LOG  ok 4432 no get() error
 LOG  ok 4433 should be deeply equivalent
 LOG  ok 4434 no get() error
 LOG  ok 4435 should be deeply equivalent
 LOG  ok 4436 no get() error
 LOG  ok 4437 should be deeply equivalent
 LOG  ok 4438 no all() error
 LOG  ok 4439 should be deeply equivalent
 LOG  # json encoding: simple-object keys (deferred: true)
 LOG  ok 4440 no init() error
 LOG  ok 4441 no batch() error
 LOG  ok 4442 no get() error
 LOG  ok 4443 should be deeply equivalent
 LOG  ok 4444 no get() error
 LOG  ok 4445 should be deeply equivalent
 LOG  ok 4446 no get() error
 LOG  ok 4447 should be deeply equivalent
 LOG  ok 4448 no get() error
 LOG  ok 4449 should be deeply equivalent
 LOG  ok 4450 no get() error
 LOG  ok 4451 should be deeply equivalent
 LOG  ok 4452 no all() error
 LOG  ok 4453 should be deeply equivalent
 LOG  # json encoding: complex-object values (deferred: true)
 LOG  ok 4454 no init() error
 LOG  ok 4455 no batch() error
 LOG  ok 4456 no get() error
 LOG  ok 4457 should be deeply equivalent
 LOG  ok 4458 no all() error
 LOG  ok 4459 should be deeply equivalent
 LOG  # json encoding: complex-object keys (deferred: true)
 LOG  ok 4460 no init() error
 LOG  ok 4461 no batch() error
 LOG  ok 4462 no get() error
 LOG  ok 4463 should be deeply equivalent
 LOG  ok 4464 no all() error
 LOG  ok 4465 should be deeply equivalent
 LOG  # custom encoding: simple-object values (deferred: false)
 LOG  ok 4466 no init() error
 LOG  ok 4467 no batch() error
 LOG  ok 4468 no get() error
 LOG  ok 4469 should be deeply equivalent
 LOG  ok 4470 no get() error
 LOG  ok 4471 should be deeply equivalent
 LOG  ok 4472 no get() error
 LOG  ok 4473 should be deeply equivalent
 LOG  ok 4474 no get() error
 LOG  ok 4475 should be deeply equivalent
 LOG  ok 4476 no get() error
 LOG  ok 4477 should be deeply equivalent
 LOG  # custom encoding: simple-object keys (deferred: false)
 LOG  ok 4478 no init() error
 LOG  ok 4479 no batch() error
 LOG  ok 4480 no get() error
 LOG  ok 4481 should be deeply equivalent
 LOG  ok 4482 no get() error
 LOG  ok 4483 should be deeply equivalent
 LOG  ok 4484 no get() error
 LOG  ok 4485 should be deeply equivalent
 LOG  ok 4486 no get() error
 LOG  ok 4487 should be deeply equivalent
 LOG  ok 4488 no get() error
 LOG  ok 4489 should be deeply equivalent
 LOG  # custom encoding: complex-object values (deferred: false)
 LOG  ok 4490 no init() error
 LOG  ok 4491 no batch() error
 LOG  ok 4492 no get() error
 LOG  ok 4493 should be deeply equivalent
 LOG  # custom encoding: complex-object keys (deferred: false)
 LOG  ok 4494 no init() error
 LOG  ok 4495 no batch() error
 LOG  ok 4496 no get() error
 LOG  ok 4497 should be deeply equivalent
 LOG  ok 4498 no get() error
 LOG  ok 4499 should be deeply equivalent
 LOG  # custom encoding: simple-object values (deferred: true)
 LOG  ok 4500 no init() error
 LOG  ok 4501 no batch() error
 LOG  ok 4502 no get() error
 LOG  ok 4503 should be deeply equivalent
 LOG  ok 4504 no get() error
 LOG  ok 4505 should be deeply equivalent
 LOG  ok 4506 no get() error
 LOG  ok 4507 should be deeply equivalent
 LOG  ok 4508 no get() error
 LOG  ok 4509 should be deeply equivalent
 LOG  ok 4510 no get() error
 LOG  ok 4511 should be deeply equivalent
 LOG  # custom encoding: simple-object keys (deferred: true)
 LOG  ok 4512 no init() error
 LOG  ok 4513 no batch() error
 LOG  ok 4514 no get() error
 LOG  ok 4515 should be deeply equivalent
 LOG  ok 4516 no get() error
 LOG  ok 4517 should be deeply equivalent
 LOG  ok 4518 no get() error
 LOG  ok 4519 should be deeply equivalent
 LOG  ok 4520 no get() error
 LOG  ok 4521 should be deeply equivalent
 LOG  ok 4522 no get() error
 LOG  ok 4523 should be deeply equivalent
 LOG  # custom encoding: complex-object values (deferred: true)
 LOG  ok 4524 no init() error
 LOG  ok 4525 no batch() error
 LOG  ok 4526 no get() error
 LOG  ok 4527 should be deeply equivalent
 LOG  # custom encoding: complex-object keys (deferred: true)
 LOG  ok 4528 no init() error
 LOG  ok 4529 no batch() error
 LOG  ok 4530 no get() error
 LOG  ok 4531 should be deeply equivalent
 LOG  ok 4532 no get() error
 LOG  ok 4533 should be deeply equivalent
 LOG  # test put() and get() with buffer value and buffer valueEncoding
 LOG  not ok 4534 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:134928:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # test put() and get() with buffer value and buffer valueEncoding in factory
 LOG  not ok 4535 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee2$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:134962:35
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # test put() and get() with buffer key and buffer keyEncoding
 LOG  ok 4536 should be deeply equivalent
 LOG  # test put() and get() with buffer key and utf8 keyEncoding
 LOG  ok 4537 should be deeply equivalent
 LOG  # test put() and get() with string value and buffer valueEncoding
 LOG  not ok 4538 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 66 6f 6f f0 9f 90 84>
 LOG      actual:   <Buffer 66 6f 6f f0 9f 90 84>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee5$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135068:35
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 4539 should be deeply equivalent
 LOG  # put() as string, get() as buffer and vice versa
 LOG  not ok 4540 got buffer value
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer f0 9f 90 84>
 LOG      actual:   <Buffer f0 9f 90 84>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee6$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135114:27
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 4541 got string value
 LOG  # put() stringifies input to buffer
 LOG  not ok 4542 key was stringified
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 31>
 LOG      actual:   <Buffer 31>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee9$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135175:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 4543 value was stringified
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 32>
 LOG      actual:   <Buffer 32>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee9$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135176:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as string, iterate as buffer
 LOG  not ok 4544 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      actual:   [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee10$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135211:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as buffer, iterate as string
 LOG  ok 4545 should be deeply equivalent
 LOG  # put() as view, iterate as view
 LOG  not ok 4546 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      actual:   [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee12$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135281:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as string, iterate as view
 LOG  not ok 4547 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      actual:   [ [ <Buffer f0 9f 90 84>, <Buffer f0 9f 90 84> ] ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee13$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135319:19
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # put() as view, iterate as string
 LOG  ok 4548 should be deeply equivalent
 LOG  # batch() with multiple puts with buffer valueEncoding per batch
 LOG  not ok 4549 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee15$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135402:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 4550 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee15$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135414:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 4551 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      actual:   <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee15$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135426:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # batch() with multiple puts with buffer valueEncoding per operation
 LOG  not ok 4552 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee16$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135475:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 4553 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 00 80 c0 ff>
 LOG      actual:   <Buffer 00 80 c0 ff>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee16$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135487:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 4554 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      actual:   <Buffer 61 62 61 7a 76 61 6c 75 65>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee16$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135499:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # batch() with buffer encoding in factory
 LOG  not ok 4555 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 04 05 06>
 LOG      actual:   <Buffer 04 05 06>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee17$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135543:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  not ok 4556 should be deeply equivalent
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 0a 0b 0c>
 LOG      actual:   <Buffer 0a 0b 0c>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee17$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135553:36
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  # storage is byte-aware (buffer encoding)
 LOG  ok 4557 no open error
 LOG  ok 4558 would be equal when not byte-aware
 LOG  ok 4559 but greater when byte-aware
 LOG  ok 4560 no put() error
 LOG  ok 4561 no get() error
 LOG  ok 4562 value one ok
 LOG  ok 4563 no put() error
 LOG  ok 4564 no get() error
 LOG  ok 4565 value one did not change
 LOG  # storage is byte-aware (view encoding)
 LOG  ok 4566 no open error
 LOG  ok 4567 would be equal when not byte-aware
 LOG  ok 4568 but greater when byte-aware
 LOG  ok 4569 no put() error
 LOG  ok 4570 no get() error
 LOG  ok 4571 value one ok
 LOG  ok 4572 no put() error
 LOG  ok 4573 no get() error
 LOG  ok 4574 value one did not change
 LOG  # setup
 LOG  # get() and getMany() forward decode error
 LOG  ok 4575 no put() error
 LOG  ok 4576 should be strictly equal
 LOG  ok 4577 should be strictly equal
 LOG  ok 4578 should be strictly equal
 LOG  ok 4579 should be strictly equal
 LOG  ok 4580 should be strictly equal
 LOG  ok 4581 should be strictly equal
 LOG  # get() and getMany() yield encoding error if stored value is invalid
 LOG  ok 4582 no put() error
 LOG  ok 4583 should be strictly equal
 LOG  ok 4584 should be strictly equal
 LOG  ok 4585 should be strictly equal
 LOG  ok 4586 should be strictly equal
 LOG  # teardown
 LOG  # iterator().seek() throws if next() has not completed (deferred: false)
 LOG  ok 4587 should throw
 LOG  # iterator().seek() does not throw after close() (deferred: false)
 LOG  ok 4588 should not throw
 LOG  # keys().seek() throws if next() has not completed (deferred: false)
 LOG  ok 4589 should throw
 LOG  # keys().seek() does not throw after close() (deferred: false)
 LOG  ok 4590 should not throw
 LOG  # values().seek() throws if next() has not completed (deferred: false)
 LOG  ok 4591 should throw
 LOG  # values().seek() does not throw after close() (deferred: false)
 LOG  ok 4592 should not throw
 LOG  # iterator().seek() throws if next() has not completed (deferred: true)
 LOG  ok 4593 should throw
 LOG  # iterator().seek() does not throw after close() (deferred: true)
 LOG  ok 4594 should not throw
 LOG  # keys().seek() throws if next() has not completed (deferred: true)
 LOG  ok 4595 should throw
 LOG  # keys().seek() does not throw after close() (deferred: true)
 LOG  ok 4596 should not throw
 LOG  # values().seek() throws if next() has not completed (deferred: true)
 LOG  ok 4597 should throw
 LOG  # values().seek() does not throw after close() (deferred: true)
 LOG  ok 4598 should not throw
 LOG  # iterator().seek() to string target
 LOG  ok 4599 match
 LOG  ok 4600 end of iterator
 LOG  # iterator().seek() to buffer target
 LOG  not ok 4601 match
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: [ <Buffer 74 77 6f>, '2' ]
 LOG      actual:   [ <Buffer 74 77 6f>, '2' ]
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee4$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135888:39
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 4602 end of iterator
 LOG  # iterator().seek() to target with custom encoding
 LOG  ok 4603 match
 LOG  ok 4604 end of iterator
 LOG  # iterator().seek() on reverse iterator
 LOG  ok 4605 match
 LOG  ok 4606 end of iterator
 LOG  # iterator().seek() to out of range target
 LOG  ok 4607 end of iterator
 LOG  # iterator().seek() on reverse iterator to out of range target
 LOG  ok 4608 match
 LOG  ok 4609 match
 LOG  ok 4610 match
 LOG  ok 4611 end of iterator
 LOG  # iterator().seek() respects range
 LOG  ok 4612 no error from open()
 LOG  ok 4613 no error from batch()
 LOG  ok 4614 no error from next()
 LOG  ok 4615 seek(4) on {"gt":"5"} yields undefined
 LOG  ok 4616 no error from next()
 LOG  ok 4617 seek(5) on {"gt":"5"} yields undefined
 LOG  ok 4618 no error from next()
 LOG  ok 4619 seek(6) on {"gt":"5"} yields 6
 LOG  ok 4620 no error from next()
 LOG  ok 4621 seek(4) on {"gte":"5"} yields undefined
 LOG  ok 4622 no error from next()
 LOG  ok 4623 seek(5) on {"gte":"5"} yields 5
 LOG  ok 4624 no error from next()
 LOG  ok 4625 seek(6) on {"gte":"5"} yields 6
 LOG  ok 4626 no error from next()
 LOG  ok 4627 seek(4) on {"gte":"5","gt":"7"} yields undefined
 LOG  ok 4628 no error from next()
 LOG  ok 4629 seek(5) on {"gte":"5","gt":"7"} yields 5
 LOG  ok 4630 no error from next()
 LOG  ok 4631 seek(6) on {"gte":"5","gt":"7"} yields 6
 LOG  ok 4632 no error from next()
 LOG  ok 4633 seek(4) on {"gte":"5","gt":"3"} yields undefined
 LOG  ok 4634 no error from next()
 LOG  ok 4635 seek(5) on {"gte":"5","gt":"3"} yields 5
 LOG  ok 4636 no error from next()
 LOG  ok 4637 seek(6) on {"gte":"5","gt":"3"} yields 6
 LOG  ok 4638 no error from next()
 LOG  ok 4639 seek(4) on {"lt":"5"} yields 4
 LOG  ok 4640 no error from next()
 LOG  ok 4641 seek(5) on {"lt":"5"} yields undefined
 LOG  ok 4642 no error from next()
 LOG  ok 4643 seek(6) on {"lt":"5"} yields undefined
 LOG  ok 4644 no error from next()
 LOG  ok 4645 seek(4) on {"lte":"5"} yields 4
 LOG  ok 4646 no error from next()
 LOG  ok 4647 seek(5) on {"lte":"5"} yields 5
 LOG  ok 4648 no error from next()
 LOG  ok 4649 seek(6) on {"lte":"5"} yields undefined
 LOG  ok 4650 no error from next()
 LOG  ok 4651 seek(4) on {"lte":"5","lt":"3"} yields 4
 LOG  ok 4652 no error from next()
 LOG  ok 4653 seek(5) on {"lte":"5","lt":"3"} yields 5
 LOG  ok 4654 no error from next()
 LOG  ok 4655 seek(6) on {"lte":"5","lt":"3"} yields undefined
 LOG  ok 4656 no error from next()
 LOG  ok 4657 seek(4) on {"lte":"5","lt":"7"} yields 4
 LOG  ok 4658 no error from next()
 LOG  ok 4659 seek(5) on {"lte":"5","lt":"7"} yields 5
 LOG  ok 4660 no error from next()
 LOG  ok 4661 seek(6) on {"lte":"5","lt":"7"} yields undefined
 LOG  ok 4662 no error from next()
 LOG  ok 4663 seek(4) on {"lt":"5","reverse":true} yields 4
 LOG  ok 4664 no error from next()
 LOG  ok 4665 seek(5) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 4666 no error from next()
 LOG  ok 4667 seek(6) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 4668 no error from next()
 LOG  ok 4669 seek(4) on {"lte":"5","reverse":true} yields 4
 LOG  ok 4670 no error from next()
 LOG  ok 4671 seek(5) on {"lte":"5","reverse":true} yields 5
 LOG  ok 4672 no error from next()
 LOG  ok 4673 seek(6) on {"lte":"5","reverse":true} yields undefined
 LOG  ok 4674 no error from next()
 LOG  ok 4675 seek(4) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 4676 no error from next()
 LOG  ok 4677 seek(5) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 4678 no error from next()
 LOG  ok 4679 seek(6) on {"gt":"5","reverse":true} yields 6
 LOG  ok 4680 no error from next()
 LOG  ok 4681 seek(4) on {"gte":"5","reverse":true} yields undefined
 LOG  ok 4682 no error from next()
 LOG  ok 4683 seek(5) on {"gte":"5","reverse":true} yields 5
 LOG  ok 4684 no error from next()
 LOG  ok 4685 seek(6) on {"gte":"5","reverse":true} yields 6
 LOG  ok 4686 no error from next()
 LOG  ok 4687 seek(7) on {"gt":"7","lt":"8"} yields undefined
 LOG  ok 4688 no error from next()
 LOG  ok 4689 seek(7) on {"gte":"7","lt":"8"} yields 7
 LOG  ok 4690 no error from next()
 LOG  ok 4691 seek(8) on {"gte":"7","lt":"8"} yields undefined
 LOG  ok 4692 no error from next()
 LOG  ok 4693 seek(8) on {"gt":"7","lte":"8"} yields 8
 LOG  ok 4694 no error from close()
 LOG  ok 4695 no error from close()
 LOG  ok 4696 no error from close()
 LOG  ok 4697 no error from close()
 LOG  ok 4698 no error from close()
 LOG  ok 4699 no error from close()
 LOG  ok 4700 no error from close()
 LOG  ok 4701 no error from close()
 LOG  ok 4702 no error from close()
 LOG  ok 4703 no error from close()
 LOG  ok 4704 no error from close()
 LOG  ok 4705 no error from close()
 LOG  ok 4706 no error from close()
 LOG  ok 4707 no error from close()
 LOG  ok 4708 no error from close()
 LOG  ok 4709 no error from close()
 LOG  ok 4710 no error from close()
 LOG  ok 4711 no error from close()
 LOG  ok 4712 no error from close()
 LOG  ok 4713 no error from close()
 LOG  ok 4714 no error from close()
 LOG  ok 4715 no error from close()
 LOG  ok 4716 no error from close()
 LOG  ok 4717 no error from close()
 LOG  ok 4718 no error from close()
 LOG  ok 4719 no error from close()
 LOG  ok 4720 no error from close()
 LOG  ok 4721 no error from close()
 LOG  ok 4722 no error from close()
 LOG  ok 4723 no error from close()
 LOG  ok 4724 no error from close()
 LOG  ok 4725 no error from close()
 LOG  ok 4726 no error from close()
 LOG  ok 4727 no error from close()
 LOG  ok 4728 no error from close()
 LOG  ok 4729 no error from close()
 LOG  ok 4730 no error from close()
 LOG  ok 4731 no error from close()
 LOG  ok 4732 no error from close()
 LOG  ok 4733 no error from close()
 LOG  # keys().seek() to string target
 LOG  ok 4734 match
 LOG  ok 4735 end of iterator
 LOG  # keys().seek() to buffer target
 LOG  not ok 4736 match
 LOG    ---
 LOG      operator: deepEqual
 LOG      expected: <Buffer 74 77 6f>
 LOG      actual:   <Buffer 74 77 6f>
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        tapeDeepEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115897:17
 LOG        _callee4$@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:135888:39
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128757:34
 LOG        tryCatch@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128777:23
 LOG        invoke@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128815:30
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128821:19
 LOG        tryCallOne@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28469:16
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:28570:27
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 4737 end of iterator
 LOG  # keys().seek() to target with custom encoding
 LOG  ok 4738 match
 LOG  ok 4739 end of iterator
 LOG  # keys().seek() on reverse iterator
 LOG  ok 4740 match
 LOG  ok 4741 end of iterator
 LOG  # keys().seek() to out of range target
 LOG  ok 4742 end of iterator
 LOG  # keys().seek() on reverse iterator to out of range target
 LOG  ok 4743 match
 LOG  ok 4744 match
 LOG  ok 4745 match
 LOG  ok 4746 end of iterator
 LOG  # keys().seek() respects range
 LOG  ok 4747 no error from open()
 LOG  ok 4748 no error from batch()
 LOG  ok 4749 no error from next()
 LOG  ok 4750 seek(4) on {"gt":"5"} yields undefined
 LOG  ok 4751 no error from next()
 LOG  ok 4752 seek(5) on {"gt":"5"} yields undefined
 LOG  ok 4753 no error from next()
 LOG  ok 4754 seek(6) on {"gt":"5"} yields 6
 LOG  ok 4755 no error from next()
 LOG  ok 4756 seek(4) on {"gte":"5"} yields undefined
 LOG  ok 4757 no error from next()
 LOG  ok 4758 seek(5) on {"gte":"5"} yields 5
 LOG  ok 4759 no error from next()
 LOG  ok 4760 seek(6) on {"gte":"5"} yields 6
 LOG  ok 4761 no error from next()
 LOG  ok 4762 seek(4) on {"gte":"5","gt":"7"} yields undefined
 LOG  ok 4763 no error from next()
 LOG  ok 4764 seek(5) on {"gte":"5","gt":"7"} yields 5
 LOG  ok 4765 no error from next()
 LOG  ok 4766 seek(6) on {"gte":"5","gt":"7"} yields 6
 LOG  ok 4767 no error from next()
 LOG  ok 4768 seek(4) on {"gte":"5","gt":"3"} yields undefined
 LOG  ok 4769 no error from next()
 LOG  ok 4770 seek(5) on {"gte":"5","gt":"3"} yields 5
 LOG  ok 4771 no error from next()
 LOG  ok 4772 seek(6) on {"gte":"5","gt":"3"} yields 6
 LOG  ok 4773 no error from next()
 LOG  ok 4774 seek(4) on {"lt":"5"} yields 4
 LOG  ok 4775 no error from next()
 LOG  ok 4776 seek(5) on {"lt":"5"} yields undefined
 LOG  ok 4777 no error from next()
 LOG  ok 4778 seek(6) on {"lt":"5"} yields undefined
 LOG  ok 4779 no error from next()
 LOG  ok 4780 seek(4) on {"lte":"5"} yields 4
 LOG  ok 4781 no error from next()
 LOG  ok 4782 seek(5) on {"lte":"5"} yields 5
 LOG  ok 4783 no error from next()
 LOG  ok 4784 seek(6) on {"lte":"5"} yields undefined
 LOG  ok 4785 no error from next()
 LOG  ok 4786 seek(4) on {"lte":"5","lt":"3"} yields 4
 LOG  ok 4787 no error from next()
 LOG  ok 4788 seek(5) on {"lte":"5","lt":"3"} yields 5
 LOG  ok 4789 no error from next()
 LOG  ok 4790 seek(6) on {"lte":"5","lt":"3"} yields undefined
 LOG  ok 4791 no error from next()
 LOG  ok 4792 seek(4) on {"lte":"5","lt":"7"} yields 4
 LOG  ok 4793 no error from next()
 LOG  ok 4794 seek(5) on {"lte":"5","lt":"7"} yields 5
 LOG  ok 4795 no error from next()
 LOG  ok 4796 seek(6) on {"lte":"5","lt":"7"} yields undefined
 LOG  ok 4797 no error from next()
 LOG  ok 4798 seek(4) on {"lt":"5","reverse":true} yields 4
 LOG  ok 4799 no error from next()
 LOG  ok 4800 seek(5) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 4801 no error from next()
 LOG  ok 4802 seek(6) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 4803 no error from next()
 LOG  ok 4804 seek(4) on {"lte":"5","reverse":true} yields 4
 LOG  ok 4805 no error from next()
 LOG  ok 4806 seek(5) on {"lte":"5","reverse":true} yields 5
 LOG  ok 4807 no error from next()
 LOG  ok 4808 seek(6) on {"lte":"5","reverse":true} yields undefined
 LOG  ok 4809 no error from next()
 LOG  ok 4810 seek(4) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 4811 no error from next()
 LOG  ok 4812 seek(5) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 4813 no error from next()
 LOG  ok 4814 seek(6) on {"gt":"5","reverse":true} yields 6
 LOG  ok 4815 no error from next()
 LOG  ok 4816 seek(4) on {"gte":"5","reverse":true} yields undefined
 LOG  ok 4817 no error from next()
 LOG  ok 4818 seek(5) on {"gte":"5","reverse":true} yields 5
 LOG  ok 4819 no error from next()
 LOG  ok 4820 seek(6) on {"gte":"5","reverse":true} yields 6
 LOG  ok 4821 no error from next()
 LOG  ok 4822 seek(7) on {"gt":"7","lt":"8"} yields undefined
 LOG  ok 4823 no error from next()
 LOG  ok 4824 seek(7) on {"gte":"7","lt":"8"} yields 7
 LOG  ok 4825 no error from next()
 LOG  ok 4826 seek(8) on {"gte":"7","lt":"8"} yields undefined
 LOG  ok 4827 no error from next()
 LOG  ok 4828 seek(8) on {"gt":"7","lte":"8"} yields 8
 LOG  ok 4829 no error from close()
 LOG  ok 4830 no error from close()
 LOG  ok 4831 no error from close()
 LOG  ok 4832 no error from close()
 LOG  ok 4833 no error from close()
 LOG  ok 4834 no error from close()
 LOG  ok 4835 no error from close()
 LOG  ok 4836 no error from close()
 LOG  ok 4837 no error from close()
 LOG  ok 4838 no error from close()
 LOG  ok 4839 no error from close()
 LOG  ok 4840 no error from close()
 LOG  ok 4841 no error from close()
 LOG  ok 4842 no error from close()
 LOG  ok 4843 no error from close()
 LOG  ok 4844 no error from close()
 LOG  ok 4845 no error from close()
 LOG  ok 4846 no error from close()
 LOG  ok 4847 no error from close()
 LOG  ok 4848 no error from close()
 LOG  ok 4849 no error from close()
 LOG  ok 4850 no error from close()
 LOG  ok 4851 no error from close()
 LOG  ok 4852 no error from close()
 LOG  ok 4853 no error from close()
 LOG  ok 4854 no error from close()
 LOG  ok 4855 no error from close()
 LOG  ok 4856 no error from close()
 LOG  ok 4857 no error from close()
 LOG  ok 4858 no error from close()
 LOG  ok 4859 no error from close()
 LOG  ok 4860 no error from close()
 LOG  ok 4861 no error from close()
 LOG  ok 4862 no error from close()
 LOG  ok 4863 no error from close()
 LOG  ok 4864 no error from close()
 LOG  ok 4865 no error from close()
 LOG  ok 4866 no error from close()
 LOG  ok 4867 no error from close()
 LOG  ok 4868 no error from close()
 LOG  # values().seek() to string target
 LOG  ok 4869 match
 LOG  ok 4870 end of iterator
 LOG  # values().seek() to buffer target
 LOG  ok 4871 match
 LOG  ok 4872 end of iterator
 LOG  # values().seek() to target with custom encoding
 LOG  ok 4873 match
 LOG  ok 4874 end of iterator
 LOG  # values().seek() on reverse iterator
 LOG  ok 4875 match
 LOG  ok 4876 end of iterator
 LOG  # values().seek() to out of range target
 LOG  ok 4877 end of iterator
 LOG  # values().seek() on reverse iterator to out of range target
 LOG  ok 4878 match
 LOG  ok 4879 match
 LOG  ok 4880 match
 LOG  ok 4881 end of iterator
 LOG  # values().seek() respects range
 LOG  ok 4882 no error from open()
 LOG  ok 4883 no error from batch()
 LOG  ok 4884 no error from next()
 LOG  ok 4885 seek(4) on {"gt":"5"} yields undefined
 LOG  ok 4886 no error from next()
 LOG  ok 4887 seek(5) on {"gt":"5"} yields undefined
 LOG  ok 4888 no error from next()
 LOG  ok 4889 seek(6) on {"gt":"5"} yields 6
 LOG  ok 4890 no error from next()
 LOG  ok 4891 seek(4) on {"gte":"5"} yields undefined
 LOG  ok 4892 no error from next()
 LOG  ok 4893 seek(5) on {"gte":"5"} yields 5
 LOG  ok 4894 no error from next()
 LOG  ok 4895 seek(6) on {"gte":"5"} yields 6
 LOG  ok 4896 no error from next()
 LOG  ok 4897 seek(4) on {"gte":"5","gt":"7"} yields undefined
 LOG  ok 4898 no error from next()
 LOG  ok 4899 seek(5) on {"gte":"5","gt":"7"} yields 5
 LOG  ok 4900 no error from next()
 LOG  ok 4901 seek(6) on {"gte":"5","gt":"7"} yields 6
 LOG  ok 4902 no error from next()
 LOG  ok 4903 seek(4) on {"gte":"5","gt":"3"} yields undefined
 LOG  ok 4904 no error from next()
 LOG  ok 4905 seek(5) on {"gte":"5","gt":"3"} yields 5
 LOG  ok 4906 no error from next()
 LOG  ok 4907 seek(6) on {"gte":"5","gt":"3"} yields 6
 LOG  ok 4908 no error from next()
 LOG  ok 4909 seek(4) on {"lt":"5"} yields 4
 LOG  ok 4910 no error from next()
 LOG  ok 4911 seek(5) on {"lt":"5"} yields undefined
 LOG  ok 4912 no error from next()
 LOG  ok 4913 seek(6) on {"lt":"5"} yields undefined
 LOG  ok 4914 no error from next()
 LOG  ok 4915 seek(4) on {"lte":"5"} yields 4
 LOG  ok 4916 no error from next()
 LOG  ok 4917 seek(5) on {"lte":"5"} yields 5
 LOG  ok 4918 no error from next()
 LOG  ok 4919 seek(6) on {"lte":"5"} yields undefined
 LOG  ok 4920 no error from next()
 LOG  ok 4921 seek(4) on {"lte":"5","lt":"3"} yields 4
 LOG  ok 4922 no error from next()
 LOG  ok 4923 seek(5) on {"lte":"5","lt":"3"} yields 5
 LOG  ok 4924 no error from next()
 LOG  ok 4925 seek(6) on {"lte":"5","lt":"3"} yields undefined
 LOG  ok 4926 no error from next()
 LOG  ok 4927 seek(4) on {"lte":"5","lt":"7"} yields 4
 LOG  ok 4928 no error from next()
 LOG  ok 4929 seek(5) on {"lte":"5","lt":"7"} yields 5
 LOG  ok 4930 no error from next()
 LOG  ok 4931 seek(6) on {"lte":"5","lt":"7"} yields undefined
 LOG  ok 4932 no error from next()
 LOG  ok 4933 seek(4) on {"lt":"5","reverse":true} yields 4
 LOG  ok 4934 no error from next()
 LOG  ok 4935 seek(5) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 4936 no error from next()
 LOG  ok 4937 seek(6) on {"lt":"5","reverse":true} yields undefined
 LOG  ok 4938 no error from next()
 LOG  ok 4939 seek(4) on {"lte":"5","reverse":true} yields 4
 LOG  ok 4940 no error from next()
 LOG  ok 4941 seek(5) on {"lte":"5","reverse":true} yields 5
 LOG  ok 4942 no error from next()
 LOG  ok 4943 seek(6) on {"lte":"5","reverse":true} yields undefined
 LOG  ok 4944 no error from next()
 LOG  ok 4945 seek(4) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 4946 no error from next()
 LOG  ok 4947 seek(5) on {"gt":"5","reverse":true} yields undefined
 LOG  ok 4948 no error from next()
 LOG  ok 4949 seek(6) on {"gt":"5","reverse":true} yields 6
 LOG  ok 4950 no error from next()
 LOG  ok 4951 seek(4) on {"gte":"5","reverse":true} yields undefined
 LOG  ok 4952 no error from next()
 LOG  ok 4953 seek(5) on {"gte":"5","reverse":true} yields 5
 LOG  ok 4954 no error from next()
 LOG  ok 4955 seek(6) on {"gte":"5","reverse":true} yields 6
 LOG  ok 4956 no error from next()
 LOG  ok 4957 seek(7) on {"gt":"7","lt":"8"} yields undefined
 LOG  ok 4958 no error from next()
 LOG  ok 4959 seek(7) on {"gte":"7","lt":"8"} yields 7
 LOG  ok 4960 no error from next()
 LOG  ok 4961 seek(8) on {"gte":"7","lt":"8"} yields undefined
 LOG  ok 4962 no error from next()
 LOG  ok 4963 seek(8) on {"gt":"7","lte":"8"} yields 8
 LOG  ok 4964 no error from close()
 LOG  ok 4965 no error from close()
 LOG  ok 4966 no error from close()
 LOG  ok 4967 no error from close()
 LOG  ok 4968 no error from close()
 LOG  ok 4969 no error from close()
 LOG  ok 4970 no error from close()
 LOG  ok 4971 no error from close()
 LOG  ok 4972 no error from close()
 LOG  ok 4973 no error from close()
 LOG  ok 4974 no error from close()
 LOG  ok 4975 no error from close()
 LOG  ok 4976 no error from close()
 LOG  ok 4977 no error from close()
 LOG  ok 4978 no error from close()
 LOG  ok 4979 no error from close()
 LOG  ok 4980 no error from close()
 LOG  ok 4981 no error from close()
 LOG  ok 4982 no error from close()
 LOG  ok 4983 no error from close()
 LOG  ok 4984 no error from close()
 LOG  ok 4985 no error from close()
 LOG  ok 4986 no error from close()
 LOG  ok 4987 no error from close()
 LOG  ok 4988 no error from close()
 LOG  ok 4989 no error from close()
 LOG  ok 4990 no error from close()
 LOG  ok 4991 no error from close()
 LOG  ok 4992 no error from close()
 LOG  ok 4993 no error from close()
 LOG  ok 4994 no error from close()
 LOG  ok 4995 no error from close()
 LOG  ok 4996 no error from close()
 LOG  ok 4997 no error from close()
 LOG  ok 4998 no error from close()
 LOG  ok 4999 no error from close()
 LOG  ok 5000 no error from close()
 LOG  ok 5001 no error from close()
 LOG  ok 5002 no error from close()
 LOG  ok 5003 no error from close()
 LOG  # delete key after creating iterator
 LOG  ok 5004 no open error
 LOG  ok 5005 no batch error
 LOG  ok 5006 no run error
 LOG  ok 5007 no iterator error
 LOG  ok 5008 maybe supports snapshots
 LOG  # batch delete key after creating iterator
 LOG  ok 5009 no open error
 LOG  ok 5010 no batch error
 LOG  ok 5011 no run error
 LOG  ok 5012 no iterator error
 LOG  ok 5013 maybe supports snapshots
 LOG  # test clear() with legacy range options
 LOG  ok 5014 undefined
 LOG  ok 5015 should be strictly equal
 LOG  ok 5016 should be strictly equal
 LOG  ok 5017 undefined
 LOG  # test clear() with options emits clear event
 LOG  ok 5018 should be truthy
 LOG  ok 5019 should be deeply equivalent
 LOG  # test clear() without options emits clear event
 LOG  ok 5020 should be truthy
 LOG  ok 5021 should be deeply equivalent
 LOG  # test simple clear() on string keys
 LOG  ok 5022 no open error
 LOG  ok 5023 no batch error
 LOG  ok 5024 no all() error
 LOG  ok 5025 has entries
 LOG  ok 5026 no clear error
 LOG  ok 5027 no all() error
 LOG  ok 5028 has no entries
 LOG  ok 5029 no close error
 LOG  # test simple clear() on string keys, with promise
 LOG  ok 5030 no open error
 LOG  ok 5031 no batch error
 LOG  ok 5032 no all() error
 LOG  ok 5033 has entries
 LOG  ok 5034 no clear error
 LOG  ok 5035 no all() error
 LOG  ok 5036 has no entries
 LOG  ok 5037 no close error
 LOG  # test simple clear() on buffer keys
 LOG  ok 5038 no open error
 LOG  ok 5039 no batch error
 LOG  ok 5040 no all() error
 LOG  ok 5041 has entries
 LOG  ok 5042 no clear error
 LOG  ok 5043 no all() error
 LOG  ok 5044 has no entries
 LOG  ok 5045 no close error
 LOG  # test simple clear() on buffer keys, with promise
 LOG  ok 5046 no open error
 LOG  ok 5047 no batch error
 LOG  ok 5048 no all() error
 LOG  ok 5049 has entries
 LOG  ok 5050 no clear error
 LOG  ok 5051 no all() error
 LOG  ok 5052 has no entries
 LOG  ok 5053 no close error
 LOG  # test simple clear() on mixed keys
 LOG  ok 5054 no open error
 LOG  ok 5055 no batch error
 LOG  ok 5056 no all() error
 LOG  ok 5057 has entries
 LOG  ok 5058 no clear error
 LOG  ok 5059 no all() error
 LOG  ok 5060 has no entries
 LOG  ok 5061 no close error
 LOG  # test simple clear() on mixed keys, with promise
 LOG  ok 5062 no open error
 LOG  ok 5063 no batch error
 LOG  ok 5064 no all() error
 LOG  ok 5065 has entries
 LOG  ok 5066 no clear error
 LOG  ok 5067 no all() error
 LOG  ok 5068 has no entries
 LOG  ok 5069 no close error
 LOG  # test simple clear() on non-utf8 buffer keys
 LOG  ok 5070 no open error
 LOG  ok 5071 no batch error
 LOG  ok 5072 no all() error
 LOG  ok 5073 has entries
 LOG  ok 5074 no clear error
 LOG  ok 5075 no all() error
 LOG  not ok 5076 has no entries
 LOG    ---
 LOG      operator: equal
 LOG      expected: 0
 LOG      actual:   2
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        strictEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115833:17
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:136617:23
 LOG        [native code]
 LOG        value@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128295:13
 LOG        value@[native code]
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 5077 no close error
 LOG  # test simple clear() on non-utf8 buffer keys, with promise
 LOG  ok 5078 no open error
 LOG  ok 5079 no batch error
 LOG  ok 5080 no all() error
 LOG  ok 5081 has entries
 LOG  ok 5082 no clear error
 LOG  ok 5083 no all() error
 LOG  not ok 5084 has no entries
 LOG    ---
 LOG      operator: equal
 LOG      expected: 0
 LOG      actual:   2
 LOG      stack: |-
 LOG        assert@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115707:95
 LOG        strictEqual@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:115833:17
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:136649:23
 LOG        [native code]
 LOG        value@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:128295:13
 LOG        value@[native code]
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29742:26
 LOG        _callTimer@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29642:17
 LOG        _callReactNativeMicrotasksPass@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29677:17
 LOG        callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:29885:44
 LOG        __callReactNativeMicrotasks@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3068:46
 LOG        http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2846:45
 LOG        __guard@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:3051:15
 LOG        flushedQueue@http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.example.reactnativeleveldbleveldownadapter:2845:21
 LOG        flushedQueue@[native code]
 LOG        invokeCallbackAndReturnFlushedQueue@[native code]
 LOG    ...
 LOG  ok 5085 no close error
 LOG  # clear() with utf8 encoding (deferred: false)
 LOG  ok 5086 got expected keys
 LOG  # clear() with json encoding (deferred: false)
 LOG  ok 5087 got expected keys
 LOG  # clear() with utf8 encoding (deferred: true)
 LOG  ok 5088 should be strictly equal
 LOG  ok 5089 should be strictly equal
 LOG  ok 5090 undefined
 LOG  ok 5091 got expected keys
 LOG  # clear() with json encoding (deferred: true)
 LOG  ok 5092 should be strictly equal
 LOG  ok 5093 should be strictly equal
 LOG  ok 5094 undefined
 LOG  ok 5095 got expected keys
 LOG  # db#clear() with full range
 LOG  ok 5096 no open error
 LOG  ok 5097 no batch error
 LOG  ok 5098 no clear error
 LOG  ok 5099 no all() error
 LOG  ok 5100 correct number of entries
 LOG  ok 5101 should be deeply equivalent
 LOG  # db#clear() with reverse=true
 LOG  ok 5102 no open error
 LOG  ok 5103 no batch error
 LOG  ok 5104 no clear error
 LOG  ok 5105 no all() error
 LOG  ok 5106 correct number of entries
 LOG  ok 5107 should be deeply equivalent
 LOG  # db#clear() with gte=00
 LOG  ok 5108 no open error
 LOG  ok 5109 no batch error
 LOG  ok 5110 no clear error
 LOG  ok 5111 no all() error
 LOG  ok 5112 correct number of entries
 LOG  ok 5113 should be deeply equivalent
 LOG  # db#clear() with gte=50
 LOG  ok 5114 no open error
 LOG  ok 5115 no batch error
 LOG  ok 5116 no clear error
 LOG  ok 5117 no all() error
 LOG  ok 5118 correct number of entries
 LOG  ok 5119 should be deeply equivalent
 LOG  # db#clear() with lte=50 and reverse=true
 LOG  ok 5120 no open error
 LOG  ok 5121 no batch error
 LOG  ok 5122 no clear error
 LOG  ok 5123 no all() error
 LOG  ok 5124 correct number of entries
 LOG  ok 5125 should be deeply equivalent
 LOG  # db#clear() with gte=49.5 (midway)
 LOG  ok 5126 no open error
 LOG  ok 5127 no batch error
 LOG  ok 5128 no clear error
 LOG  ok 5129 no all() error
 LOG  ok 5130 correct number of entries
 LOG  ok 5131 should be deeply equivalent
 LOG  # db#clear() with gte=49999 (midway)
 LOG  ok 5132 no open error
 LOG  ok 5133 no batch error
 LOG  ok 5134 no clear error
 LOG  ok 5135 no all() error
 LOG  ok 5136 correct number of entries
 LOG  ok 5137 should be deeply equivalent
 LOG  # db#clear() with lte=49.5 (midway) and reverse=true
 LOG  ok 5138 no open error
 LOG  ok 5139 no batch error
 LOG  ok 5140 no clear error
 LOG  ok 5141 no all() error
 LOG  ok 5142 correct number of entries
 LOG  ok 5143 should be deeply equivalent
 LOG  # db#clear() with lt=49.5 (midway) and reverse=true
 LOG  ok 5144 no open error
 LOG  ok 5145 no batch error
 LOG  ok 5146 no clear error
 LOG  ok 5147 no all() error
 LOG  ok 5148 correct number of entries
 LOG  ok 5149 should be deeply equivalent
 LOG  # db#clear() with lt=50 and reverse=true
 LOG  ok 5150 no open error
 LOG  ok 5151 no batch error
 LOG  ok 5152 no clear error
 LOG  ok 5153 no all() error
 LOG  ok 5154 correct number of entries
 LOG  ok 5155 should be deeply equivalent
 LOG  # db#clear() with lte=50
 LOG  ok 5156 no open error
 LOG  ok 5157 no batch error
 LOG  ok 5158 no clear error
 LOG  ok 5159 no all() error
 LOG  ok 5160 correct number of entries
 LOG  ok 5161 should be deeply equivalent
 LOG  # db#clear() with lte=50.5 (midway)
 LOG  ok 5162 no open error
 LOG  ok 5163 no batch error
 LOG  ok 5164 no clear error
 LOG  ok 5165 no all() error
 LOG  ok 5166 correct number of entries
 LOG  ok 5167 should be deeply equivalent
 LOG  # db#clear() with lte=50555 (midway)
 LOG  ok 5168 no open error
 LOG  ok 5169 no batch error
 LOG  ok 5170 no clear error
 LOG  ok 5171 no all() error
 LOG  ok 5172 correct number of entries
 LOG  ok 5173 should be deeply equivalent
 LOG  # db#clear() with lt=50555 (midway)
 LOG  ok 5174 no open error
 LOG  ok 5175 no batch error
 LOG  ok 5176 no clear error
 LOG  ok 5177 no all() error
 LOG  ok 5178 correct number of entries
 LOG  ok 5179 should be deeply equivalent
 LOG  # db#clear() with gte=50.5 (midway) and reverse=true
 LOG  ok 5180 no open error
 LOG  ok 5181 no batch error
 LOG  ok 5182 no clear error
 LOG  ok 5183 no all() error
 LOG  ok 5184 correct number of entries
 LOG  ok 5185 should be deeply equivalent
 LOG  # db#clear() with gt=50.5 (midway) and reverse=true
 LOG  ok 5186 no open error
 LOG  ok 5187 no batch error
 LOG  ok 5188 no clear error
 LOG  ok 5189 no all() error
 LOG  ok 5190 correct number of entries
 LOG  ok 5191 should be deeply equivalent
 LOG  # db#clear() with gt=50 and reverse=true
 LOG  ok 5192 no open error
 LOG  ok 5193 no batch error
 LOG  ok 5194 no clear error
 LOG  ok 5195 no all() error
 LOG  ok 5196 correct number of entries
 LOG  ok 5197 should be deeply equivalent
 LOG  # db#clear() with lte=0
 LOG  ok 5198 no open error
 LOG  ok 5199 no batch error
 LOG  ok 5200 no clear error
 LOG  ok 5201 no all() error
 LOG  ok 5202 correct number of entries
 LOG  ok 5203 should be deeply equivalent
 LOG  # db#clear() with lt=0
 LOG  ok 5204 no open error
 LOG  ok 5205 no batch error
 LOG  ok 5206 no clear error
 LOG  ok 5207 no all() error
 LOG  ok 5208 correct number of entries
 LOG  ok 5209 should be deeply equivalent
 LOG  # db#clear() with gte=30 and lte=70
 LOG  ok 5210 no open error
 LOG  ok 5211 no batch error
 LOG  ok 5212 no clear error
 LOG  ok 5213 no all() error
 LOG  ok 5214 correct number of entries
 LOG  ok 5215 should be deeply equivalent
 LOG  # db#clear() with test iterator with gte=30 and lte=70 and gt=40 and lt=60
 LOG  ok 5216 no open error
 LOG  ok 5217 no batch error
 LOG  ok 5218 no clear error
 LOG  ok 5219 no all() error
 LOG  ok 5220 correct number of entries
 LOG  ok 5221 should be deeply equivalent
 LOG  # db#clear() with test iterator with gte=30 and lte=70 and gt=20 and lt=80
 LOG  ok 5222 no open error
 LOG  ok 5223 no batch error
 LOG  ok 5224 no clear error
 LOG  ok 5225 no all() error
 LOG  ok 5226 correct number of entries
 LOG  ok 5227 should be deeply equivalent
 LOG  # db#clear() with gt=29 and lt=71
 LOG  ok 5228 no open error
 LOG  ok 5229 no batch error
 LOG  ok 5230 no clear error
 LOG  ok 5231 no all() error
 LOG  ok 5232 correct number of entries
 LOG  ok 5233 should be deeply equivalent
 LOG  # db#clear() with gte=30 and lte=70 and reverse=true
 LOG  ok 5234 no open error
 LOG  ok 5235 no batch error
 LOG  ok 5236 no clear error
 LOG  ok 5237 no all() error
 LOG  ok 5238 correct number of entries
 LOG  ok 5239 should be deeply equivalent
 LOG  # db#clear() with gt=29 and lt=71 and reverse=true
 LOG  ok 5240 no open error
 LOG  ok 5241 no batch error
 LOG  ok 5242 no clear error
 LOG  ok 5243 no all() error
 LOG  ok 5244 correct number of entries
 LOG  ok 5245 should be deeply equivalent
 LOG  # db#clear() with limit=20
 LOG  ok 5246 no open error
 LOG  ok 5247 no batch error
 LOG  ok 5248 no clear error
 LOG  ok 5249 no all() error
 LOG  ok 5250 correct number of entries
 LOG  ok 5251 should be deeply equivalent
 LOG  # db#clear() with limit=20 and gte=20
 LOG  ok 5252 no open error
 LOG  ok 5253 no batch error
 LOG  ok 5254 no clear error
 LOG  ok 5255 no all() error
 LOG  ok 5256 correct number of entries
 LOG  ok 5257 should be deeply equivalent
 LOG  # db#clear() with limit=20 and reverse=true
 LOG  ok 5258 no open error
 LOG  ok 5259 no batch error
 LOG  ok 5260 no clear error
 LOG  ok 5261 no all() error
 LOG  ok 5262 correct number of entries
 LOG  ok 5263 should be deeply equivalent
 LOG  # db#clear() with limit=20 and lte=79 and reverse=true
 LOG  ok 5264 no open error
 LOG  ok 5265 no batch error
 LOG  ok 5266 no clear error
 LOG  ok 5267 no all() error
 LOG  ok 5268 correct number of entries
 LOG  ok 5269 should be deeply equivalent
 LOG  # db#clear() with limit=-1 should clear whole database
 LOG  ok 5270 no open error
 LOG  ok 5271 no batch error
 LOG  ok 5272 no clear error
 LOG  ok 5273 no all() error
 LOG  ok 5274 correct number of entries
 LOG  ok 5275 should be deeply equivalent
 LOG  # db#clear() with limit=0 should not clear anything
 LOG  ok 5276 no open error
 LOG  ok 5277 no batch error
 LOG  ok 5278 no clear error
 LOG  ok 5279 no all() error
 LOG  ok 5280 correct number of entries
 LOG  ok 5281 should be deeply equivalent
 LOG  # db#clear() with lte after limit
 LOG  ok 5282 no open error
 LOG  ok 5283 no batch error
 LOG  ok 5284 no clear error
 LOG  ok 5285 no all() error
 LOG  ok 5286 correct number of entries
 LOG  ok 5287 should be deeply equivalent
 LOG  # db#clear() with lte before limit
 LOG  ok 5288 no open error
 LOG  ok 5289 no batch error
 LOG  ok 5290 no clear error
 LOG  ok 5291 no all() error
 LOG  ok 5292 correct number of entries
 LOG  ok 5293 should be deeply equivalent
 LOG  # db#clear() with gte after database end
 LOG  ok 5294 no open error
 LOG  ok 5295 no batch error
 LOG  ok 5296 no clear error
 LOG  ok 5297 no all() error
 LOG  ok 5298 correct number of entries
 LOG  ok 5299 should be deeply equivalent
 LOG  # db#clear() with gt after database end
 LOG  ok 5300 no open error
 LOG  ok 5301 no batch error
 LOG  ok 5302 no clear error
 LOG  ok 5303 no all() error
 LOG  ok 5304 correct number of entries
 LOG  ok 5305 should be deeply equivalent
 LOG  # db#clear() with lte after database end and reverse=true
 LOG  ok 5306 no open error
 LOG  ok 5307 no batch error
 LOG  ok 5308 no clear error
 LOG  ok 5309 no all() error
 LOG  ok 5310 correct number of entries
 LOG  ok 5311 should be deeply equivalent
 LOG  # db#clear() with lte and gte after database and reverse=true
 LOG  ok 5312 no open error
 LOG  ok 5313 no batch error
 LOG  ok 5314 no clear error
 LOG  ok 5315 no all() error
 LOG  ok 5316 correct number of entries
 LOG  ok 5317 should be deeply equivalent
 LOG  # db#clear() with lt and gt after database and reverse=true
 LOG  ok 5318 no open error
 LOG  ok 5319 no batch error
 LOG  ok 5320 no clear error
 LOG  ok 5321 no all() error
 LOG  ok 5322 correct number of entries
 LOG  ok 5323 should be deeply equivalent
 LOG  # db#clear() with gt greater than lt
 LOG  ok 5324 no open error
 LOG  ok 5325 no batch error
 LOG  ok 5326 no clear error
 LOG  ok 5327 no all() error
 LOG  ok 5328 correct number of entries
 LOG  ok 5329 should be deeply equivalent
 LOG  # db#clear() with gte greater than lte
 LOG  ok 5330 no open error
 LOG  ok 5331 no batch error
 LOG  ok 5332 no clear error
 LOG  ok 5333 no all() error
 LOG  ok 5334 correct number of entries
 LOG  ok 5335 should be deeply equivalent
 LOG  # sublevel.clear() (deferred: false)
 LOG  ok 5336 should be deeply equivalent
 LOG  ok 5337 should be deeply equivalent
 LOG  ok 5338 should be deeply equivalent
 LOG  # sublevel.clear() (deferred: true)
 LOG  ok 5339 should be deeply equivalent
 LOG  ok 5340 should be deeply equivalent
 LOG  ok 5341 should be deeply equivalent
 LOG  # iterate sublevel keys with bytes above 196 (buffer, deferred: false)
 LOG  ok 5342 sub1 yielded all entries
 LOG  ok 5343 sub2 yielded all entries
 LOG  ok 5344 should be truthy
 LOG  ok 5345 should be truthy
 LOG  ok 5346 sub1 yielded all values
 LOG  ok 5347 sub2 yielded all values
 LOG  ok 5348 should be truthy
 LOG  ok 5349 should be truthy
 LOG  ok 5350 sub1 yielded all values
 LOG  ok 5351 sub2 yielded all values
 LOG  ok 5352 should be truthy
 LOG  ok 5353 should be truthy
 LOG  ok 5354 cleared sub1
 LOG  ok 5355 did not clear sub2
 LOG  # iterate sublevel keys with bytes above 196 (view, deferred: false)
 LOG  ok 5356 sub1 yielded all entries
 LOG  ok 5357 sub2 yielded all entries
 LOG  ok 5358 should be truthy
 LOG  ok 5359 should be truthy
 LOG  ok 5360 sub1 yielded all values
 LOG  ok 5361 sub2 yielded all values
 LOG  ok 5362 should be truthy
 LOG  ok 5363 should be truthy
 LOG  ok 5364 sub1 yielded all values
 LOG  ok 5365 sub2 yielded all values
 LOG  ok 5366 should be truthy
 LOG  ok 5367 should be truthy
 LOG  ok 5368 cleared sub1
 LOG  ok 5369 did not clear sub2
 LOG  # iterate sublevel keys with bytes above 196 (buffer, deferred: true)
 LOG  ok 5370 sub1 yielded all entries
 LOG  ok 5371 sub2 yielded all entries
 LOG  ok 5372 should be truthy
 LOG  ok 5373 should be truthy
 LOG  ok 5374 sub1 yielded all values
 LOG  ok 5375 sub2 yielded all values
 LOG  ok 5376 should be truthy
 LOG  ok 5377 should be truthy
 LOG  ok 5378 sub1 yielded all values
 LOG  ok 5379 sub2 yielded all values
 LOG  ok 5380 should be truthy
 LOG  ok 5381 should be truthy
 LOG  ok 5382 cleared sub1
 LOG  ok 5383 did not clear sub2
 LOG  # iterate sublevel keys with bytes above 196 (view, deferred: true)
 LOG  ok 5384 sub1 yielded all entries
 LOG  ok 5385 sub2 yielded all entries
 LOG  ok 5386 should be truthy
 LOG  ok 5387 should be truthy
 LOG  ok 5388 sub1 yielded all values
 LOG  ok 5389 sub2 yielded all values
 LOG  ok 5390 should be truthy
 LOG  ok 5391 should be truthy
 LOG  ok 5392 sub1 yielded all values
 LOG  ok 5393 sub2 yielded all values
 LOG  ok 5394 should be truthy
 LOG  ok 5395 should be truthy
 LOG  ok 5396 cleared sub1
 LOG  ok 5397 did not clear sub2
 LOG  
 LOG  1..5397
 LOG  # tests 5397
 LOG  # pass  5341
 LOG  # fail  56
 LOG  

