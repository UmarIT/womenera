import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import More from './More';
import Notifications from './Notifications';
import HomeScreen from './HomeScreen';
import chat from './chat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchBar from '../components/CustomSearchBar';
import Home from './Home';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: 'darkgray',
        activeTintColor: '#be7df0',
        keyboardHidesTabBar: true,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let activeIcon, InactiveIcon;

          if (route.name == 'Home') {
            activeIcon = 'home';
            InactiveIcon = 'home-outline';
          } else if (route.name == 'Notifications') {
            activeIcon = 'notifications';
            InactiveIcon = 'notifications-outline';
          } else if (route.name == 'More') {
            activeIcon = 'reorder-three';
            InactiveIcon = 'reorder-three-outline';
          } else if (route.name == 'chat') {
            activeIcon = 'chatbubbles';
            InactiveIcon = 'chatbubbles-outline';
          }
          return (
            <>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    borderTopColor: '#be7df0',
                    borderTopWidth: 3,
                    width: '100%',
                    paddingBottom: 20,
                  }}
                />
              )}
              <Ionicons
                name={color == 'darkgray' ? activeIcon : InactiveIcon}
                color={color == 'darkgray' ? 'black' : '#be7df0'}
                size={24}
              />
            </>
          );
        },
      })}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#be7df0',
            headerTitleAlign: 'center',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={Notifications}
        name="Notifications"
        options={{
          // title: 'Notifications',
          // headerStyle: {
          //   backgroundColor: '#be7df0',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={chat}
        name="chat"
        options={{
          // title: 'Inbox',
          // headerStyle: {
          //   backgroundColor: '#be7df0',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={More}
        name="More"
        options={{
          // title: 'More',
          // headerStyle: {
          //   backgroundColor: '#be7df0',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
