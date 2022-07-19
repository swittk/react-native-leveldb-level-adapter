import './App_prestart';
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
// import { SKReactNativeLevelDown } from 'react-native-leveldb-leveldown-adapter';
import { testLevelDown } from './_test_';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    (async () => {
      testLevelDown();
      // console.log('creating db')
      // const ldb = new SKReactNativeLevel('test');
      // console.log('opening db')
      // await ldb.open();
      // console.log('created db')
      // await ldb.put('hello', 'world');
      // console.log('put hello');
      // console.log('got hello', await ldb.get('hello'));
      // const iter = ldb.iterator();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
