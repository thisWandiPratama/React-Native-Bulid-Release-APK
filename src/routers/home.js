import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from '../containers/Home/'
import SuratMasuk from '../containers/SuratMasuk'
import Disposisi from '../containers/Disposisi'
import DrafSuratKeluar from '../containers/DrafSuratKeluar'
import SuratKeluar from '../containers/SuratKeluar'


const Tab = createBottomTabNavigator();

function HomeRouter() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'dashboard'
                            : 'dashboard';
                        color = color ? color : '#2496F3'
                    } else if (route.name === 'SuratMasuk') {
                        iconName = focused ? 'inbox' : 'inbox';
                    }
                    else if (route.name === 'Disposisi') {
                        iconName = focused ? 'assignment-ind' : 'assignment-ind';
                    }
                    else if (route.name === 'DrafSuratKeluar') {
                        iconName = focused ? 'drafts' : 'drafts';
                    }
                    else if (route.name === 'SuratKeluar') {
                        iconName = focused ? 'mail' : 'mail';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: route.name === 'Home' ? '#2496F3' : 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="SuratMasuk" component={SuratMasuk} />
            <Tab.Screen name="Disposisi" component={Disposisi} />
            <Tab.Screen name="DrafSuratKeluar" component={DrafSuratKeluar} />
            <Tab.Screen name="SuratKeluar" component={SuratKeluar} />
        </Tab.Navigator>
    );
}

export default HomeRouter;