import LottieView from 'lottie-react-native';
import { VStack } from 'native-base';

import loading from '../../assets/loading.json';

export function Loading() {
  return (
    <VStack flex={1} pb={6} bg="#DC0A2D">
      <LottieView source={loading} autoPlay loop />
    </VStack>
  );
}
