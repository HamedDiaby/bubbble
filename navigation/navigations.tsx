import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { enumNavigationRoutes } from "../enums";

import {
    OnboardingPage
} from '../screens';

const Stack = createNativeStackNavigator();

export const Navigation:React.FC<any> = ({

})=> {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    options={{ headerShown: false, gestureEnabled: false }}
                    name={enumNavigationRoutes.OnboardingPage} component={OnboardingPage} 
                />
                {/* <Stack.Screen 
                    options={{ headerShown: false, gestureEnabled: false }}
                    name={enumNavigationRoutes.OTPvalidation} component={OTPvalidation} 
                />
                <Stack.Screen 
                    options={{ headerShown: false, gestureEnabled: false }}
                    name={enumNavigationRoutes.UserInfos} component={UserInfos} 
                />
                <Stack.Screen 
                    options={{ headerShown: false, gestureEnabled: false }}
                    name={enumNavigationRoutes.ProfileImages} component={ProfileImages} 
                /> */}
                
                {/* <Stack.Screen 
                    options={{ headerShown: false, gestureEnabled: false }}
                    name={enumNavigationRoutes.Home} component={BottomTab} 
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}