import React ,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import LogInScreen from '../screens/LogInScreen';
import ForgetPass from '../screens/ForgetPass';
import Scholarships from '../screens/Scholarships';
import BottomNavigation from '../screens/BottomNavigation';
import Aboutus from '../screens/Aboutus';

const Stack = createNativeStackNavigator();

const StudentStack = () =>{
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName='BottomNavigation'>
            {/* {showSplashScreen ? (<Stack.Screen component={SplashScreen} name='SplashScreen' options={{headerShown:false}}
            />
            ) : null
          } */}
           <Stack.Screen component={BottomNavigation} name='BottomNavigation' options={{headerShown:false}}/>
            <Stack.Screen  component={Profile} name='Profile' options={{headerShown:false}}/>
            <Stack.Screen component={SignUp} name='SignUp' options={{headerShown:false}} />
            <Stack.Screen component={LogInScreen} name='LogInScreen' options={{headerShown:false}} /> 
            <Stack.Screen component={ForgetPass} name='ForgetPass' options={{headerShown:false}} />
            <Stack.Screen component={Scholarships} name='Scholarships' options={{ title: 'Scholarships', headerStyle: {
                backgroundColor: '#be7df0',
                headerTitleAlign:'center',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }, }}   />
           <Stack.Screen component={Aboutus} name='Aboutus' options={{ title: 'About us', headerStyle: {
                backgroundColor: '#be7df0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }, }}   />
         </Stack.Navigator>
        </NavigationContainer>
      )
}

export default StudentStack;