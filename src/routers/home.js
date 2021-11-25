import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../containers/Home/';
import SuratMasuk from '../containers/SuratMasuk';
import Disposisi from '../containers/Disposisi';
import DrafSuratKeluar from '../containers/DrafSuratKeluar';
import SuratKeluar from '../containers/SuratKeluar';

import DetailSuratMasuk from '../containers/SuratMasuk/DetailSuratMasuk';
import DetailDisposisi from '../containers/Disposisi/DetailDisposisi';
import DetailDraftSuratKeluar from '../containers/DrafSuratKeluar/DetailDraftSuratKeluar';
import DetailSuratKeluar from '../containers/SuratKeluar/DetailDraftSuratKeluar';

import Notifikasi from '../containers/SuratMasuk/Notifikasi';

const Tab = createBottomTabNavigator();
const StackTab = createNativeStackNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'dashboard' : 'dashboard';
            color = color ? color : '#2496F3';
          } else if (route.name === 'Surat Masuk') {
            iconName = focused ? 'inbox' : 'inbox';
          } else if (route.name === 'Disposisi') {
            iconName = focused ? 'assignment-ind' : 'assignment-ind';
          } else if (route.name === 'Draf Surat Keluar') {
            iconName = focused ? 'drafts' : 'drafts';
          } else if (route.name === 'Surat Keluar') {
            iconName = focused ? 'mail' : 'mail';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:
          route.name === 'Dashboard'
            ? '#2496F3'
            : route.name === 'Surat Masuk'
            ? '#C33831'
            : route.name === 'Disposisi'
            ? '#68B3C8'
            : route.name === 'Draf Surat Keluar'
            ? '#F3BA46'
            : '#EB5F3C',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Dashboard" component={Home} />
      <Tab.Screen name="Surat Masuk" component={SuratMasuk} />
      <Tab.Screen name="Disposisi" component={Disposisi} />
      <Tab.Screen name="Draf Surat Keluar" component={DrafSuratKeluar} />
      <Tab.Screen name="Surat Keluar" component={SuratKeluar} />
    </Tab.Navigator>
  );
};

const HomeRouter = () => {
  return (
    <StackTab.Navigator screenOptions={{headerShown: false}}>
      <StackTab.Screen name="TabHome" component={TabHome} />
      <StackTab.Screen name="DetailSuratMasuk" component={DetailSuratMasuk} />
      <StackTab.Screen name="DetailDisposisi" component={DetailDisposisi} />
      <StackTab.Screen
        name="DetailDraftSuratKeluar"
        component={DetailDraftSuratKeluar}
      />
      <StackTab.Screen name="DetailSuratKeluar" component={DetailSuratKeluar} />
      <StackTab.Screen name="Notifikasi" component={Notifikasi} />
    </StackTab.Navigator>
  );
};

export default HomeRouter;
