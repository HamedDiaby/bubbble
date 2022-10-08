import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

interface ScreenContainerProps {
  children: React.ReactNode
}

export const ScreenContainer:React.FC<ScreenContainerProps> =({
  children
})=> {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
}