import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { Loading } from './src/screens/Loading';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
