import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { Loading } from './src/screens/Loading';

export default function App() {
  return (
    <NativeBaseProvider>
      <Loading />
    </NativeBaseProvider>
  );
}
