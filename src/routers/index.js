import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../containers/Auth/login'
import LupaPassword from '../containers/Auth/lupapassword';
import HomeRouter from './home'


const Stack = createNativeStackNavigator();

function Router() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}  >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LupaPassword" component={LupaPassword} />
            <Stack.Screen name="Dashboard" component={HomeRouter} />
        </Stack.Navigator>
    );
}

export default Router;