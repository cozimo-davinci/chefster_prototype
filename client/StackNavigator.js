import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import BottomTabNavigator from './BottomNavigator';
import GroupOverviewScreen from './screens/GroupOverviewScreen';
import MediaScreen from './screens/MediaScreen';
import FilesScreen from './screens/FilesScreen';
import LinkScreen from './screens/LinkScreen';

import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Login and Register screens (no bottom navigation) */}
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                {/* Home and other screens with bottom navigation */}
                <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Diet Together" component={Chat}
                    options={{
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="GroupOverview"
                    component={GroupOverviewScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Media"
                    component={MediaScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Files"
                    component={FilesScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Link"
                    component={LinkScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});
