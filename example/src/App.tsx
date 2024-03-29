import './App_prestart';
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SKReactNativeLevel } from 'react-native-leveldb-level-adapter';
import { testLevelDown } from './_test_';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    (async () => {
      testLevelDown();
      // const ldb = new SKReactNativeLevel('test');
      // {
      //   const kv = ['foo', Buffer.from('0080c0ff', 'hex')]
      //   console.log('putting kv', kv)
      //   ldb.put(kv[0], kv[1]);
      //   console.log('got', await ldb.get(kv[0]))
      // }
      // const ldb = new SKReactNativeLevel('test');
      // await ldb.open();
      // console.log('created db')
      // await ldb.put("hello", "world");
      // // console.log('put hello');
      // console.log('got hello', await ldb.get("hello"));
      // console.log('opening db')
      // await ldb.open();
      // console.log('created db')
      // await ldb.put(Buffer.from(new Uint8Array([1, 1, 1])), Buffer.from(new Uint8Array([1, 2, 3])));
      // // console.log('put hello');
      // console.log('got hello', await ldb.get(Buffer.from(new Uint8Array([1, 1, 1]))));
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
