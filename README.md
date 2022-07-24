# react-native-leveldb-leveldown-adapter

`abstract-level` adapter for `react-native-leveldb`

Passes all 4605 tests of `abstract-level`!

To run tests, start up the example app and run it. The tests are run in a useEffect hook called once at app startup.

(Solved) issue in test
- TypeError: Invalid attempt to iterate non-iterable instance. In order to be iterable, non-array objects must have a [Symbol.iterator]() method
    - Issue description (thanks to this comment [here](https://github.com/facebook/metro/issues/551#issuecomment-886758878) in the `facebook/metro` repository)
    - "That error is due to an error in the @babel/plugin-transform-for-of plugin. It (mistakenly) tries to convert for await of statements with the same code as for of, and uses the wrong iterator property accessor" 
        - Solution : if you encounter this, add "@babel/plugin-proposal-async-generator-functions" to babel.config.js of the application running the app.
        - Note : This should already be fixed

## Installation

```sh
npm install react-native-leveldb-leveldown-adapter
```

## Usage

```js
import { multiply } from "react-native-leveldb-leveldown-adapter";

// ...

const result = await multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
