import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from './src/screens/LogInScreen';
import SignUp from './src/screens/SignUp';
import Register from './src/screens/Register';
import BottomNavigation from './src/screens/BottomNavigation';
import SplashScreen from './src/screens/SplashScreen';
import ForgetPass from './src/screens/ForgetPass';
import ExpertHomescreen from './src/screens/ExpertHomescreen';
import Profile from './src/screens/Profile';
import Scholarships from './src/screens/Scholarships';
import Aboutus from './src/screens/Aboutus';
import Myexperts from './src/screens/Myexperts';
import RecommendedExperts from './src/screens/RecommendedExperts';
import BottomNavigationExpert from './src/screens/BottomNavigationExpert';
import Jobs from './src/screens/Jobs';
import Addjobs from './src/screens/Addjobs';
const Stack = createNativeStackNavigator();
const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        {showSplashScreen ? (
          <Stack.Screen
            component={SplashScreen}
            name="SplashScreen"
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          component={BottomNavigationExpert}
          name="BottomNavigationExpert"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={RecommendedExperts}
          name="RecommendedExperts"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Myexperts}
          name="Myexperts"
          options={{
            title: 'Experts',
            headerStyle: {
              backgroundColor: '#be7df0',
              headerTitleAlign: 'center',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          component={BottomNavigation}
          name="BottomNavigation"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Profile}
          name="Profile"
          options={{headerShown: false}}
        />
        <Stack.Screen component={ExpertHomescreen} name="ExpertHomescreen" />
        <Stack.Screen
          component={SignUp}
          name="SignUp"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LogInScreen}
          name="LogInScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Register}
          name="Register"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ForgetPass}
          name="ForgetPass"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Jobs}
          name="Jobs"
          options={{
            title: 'Jobs',
            headerStyle: {
              backgroundColor: '#be7df0',
              headerTitleAlign: 'center',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          component={Addjobs}
          name="Addjobs"
          options={{
            title: 'Addjobs',
            headerStyle: {
              backgroundColor: '#be7df0',
              headerTitleAlign: 'center',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          component={Scholarships}
          name="Scholarships"
          options={{
            title: 'Scholarships',
            headerStyle: {
              backgroundColor: '#be7df0',
              headerTitleAlign: 'center',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          component={Aboutus}
          name="Aboutus"
          options={{
            title: 'About us',
            headerStyle: {
              backgroundColor: '#be7df0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
