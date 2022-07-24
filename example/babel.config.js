const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
    // Need to use this according to this https://github.com/facebook/metro/issues/551#issuecomment-886758878
    // Because tests show this error : 
    // TypeError: Invalid attempt to iterate non-iterable instance.
    // In order to be iterable, non-array objects must have a [Symbol.iterator]() method.
    // "That error is due to an error in the @babel/plugin-transform-for-of plugin. It (mistakenly) tries to convert for await of statements with the same code as for of, and uses the wrong iterator property accessor" 
    "@babel/plugin-proposal-async-generator-functions"
  ],
};
