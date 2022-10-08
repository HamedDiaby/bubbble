import React from 'react';
import { View } from 'react-native';
import { OnboardingPageProps } from './interfaces';
import { styles } from './styles';

import { 
  ScreenContainer,
  Text
} from '../../../components';

export const OnboardingPageComponent:React.FC<OnboardingPageProps> = ({

})=> {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text TextKey='hello' />
      </View>
    </ScreenContainer>
  );
}
