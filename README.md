# react-native-leveldb-level-adapter

`abstract-level` adapter for `react-native-leveldb`

Passes all 5395/5397 tests of `abstract-level` in full `Buffer` support! (The only 2 failing tests are ones where you store non-utf8 compliant character containing buffers into databases that are opened with `utf8` keys/values.. which shouldn't occur IRL)
(see `errorLogBufferTrue.md`)

To run tests, start up the example app and run it. The tests are run in a useEffect hook called once at app startup.


(If you get this in tests, it's due to an older version of Babel)
- TypeError: Invalid attempt to iterate non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method
    - Issue description (thanks to this comment [here](https://github.com/facebook/metro/issues/551#issuecomment-886758878) in the `facebook/metro` repository)
    - "That error is due to an error in the @babel/plugin-transform-for-of plugin. It (mistakenly) tries to convert for await of statements with the same code as for of, and uses the wrong iterator property accessor" 
        - Solution : if you encounter this, add "@babel/plugin-proposal-async-generator-functions" to babel.config.js of the application running the app.
        - Note : This should already be fixed

## Installation

```sh
npm install react-native-leveldb-level-adapter
```

## Usage

```js
import { SKReactNativeLevel } from 'react-native-leveldb-level-adapter';

const ldb = new SKReactNativeLevel('test');
await ldb.open();
console.log('created db')
await ldb.put("hello", "world");

// result : got hello world.
console.log('got hello', await ldb.get("hello"));

// ...

const result = await multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
