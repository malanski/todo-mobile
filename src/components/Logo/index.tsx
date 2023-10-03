import React from 'react';
import { Platform, Image as RNImage } from 'react-native';

type ISource = {
  source: any
}
export const Logo = ({ source, ...props }: ISource) => {
  
  if (Platform.OS === 'web') {
    // Se for web, usa um componente React normal
    return <img src={source} {...props} />;
  } else {
    // Se for móvel, usa o componente Image do React Native
    return <RNImage source={source} {...props} />;
  }
};
