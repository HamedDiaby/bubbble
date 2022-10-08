import React from 'react';
import { View } from 'react-native';
import { templateProps } from './interfaces';
import { styles } from './styles';

import {
  ScreenContainer
} from '../components';

export const TemplateComponent:React.FC<templateProps> = ({

})=> {
  return (
    <ScreenContainer>
      <View style={styles.container}>
      
      </View>
    </ScreenContainer>
  );
}
