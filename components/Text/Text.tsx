import { useEffect, useCallback } from 'react';
import { 
  StyleProp, 
  Text as TextComponent, 
  TextStyle 
} from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
  init,
  translate
} from '../../translations';

interface fontList {
  'nunito-bold': 'nunito-bold'
  'nunito-extra-bold': 'nunito-extra-bold'
  'nunito-black': 'nunito-black'
  'nunito-black-italic': 'nunito-black-italic'
}

interface ScreenContainerProps {
  TextKey: string
  styles?: StyleProp<TextStyle>;
  font?: keyof fontList
}

export const Text:React.FC<ScreenContainerProps> =({
  TextKey,
  font = 'nunito-black',
  styles
})=> {

  init();
  const [fontsLoaded] = useFonts({
    'nunito-bold': require('./nunito/Nunito-Bold.ttf'),
    'nunito-extra-bold': require('./nunito/Nunito-ExtraBold.ttf'),
    'nunito-black': require('./nunito/Nunito-Black.ttf'),
    'nunito-black-italic': require('./nunito/Nunito-BlackItalic.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <TextComponent style={[
        styles, 
        {fontFamily: font}
        ]}>
        {translate(TextKey)}
      </TextComponent>
    </>
  );
}