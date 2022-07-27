import { CommonActions, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { VStack } from 'native-base';
import { useEffect } from 'react';

import loading from '../../assets/loading.json';

export function Loading() {
  const navigation = useNavigation();

  useEffect(()=> {
    setTimeout(() => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'home' }],
      }))
    }, 3000);
  }, [])

  return (
    <VStack flex={1} pb={6} bg="#DC0A2D">
      <LottieView source={loading} autoPlay loop />
    </VStack>
  );
}
