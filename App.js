import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/Component/Login/SplashScreen';
import LoginScreen from './src/Component/Login/LoginScreen';
import RegisterScreen from './src/Component/Login/RegisterScreen';
import DrawerNavigationRoutes from './src/Component/Login/DrawerNavigatorRoutes';

// MediMap
import MediMap from './src/Component/Map/MediMap';
import MediModal from './src/Component/Map/MediModal';
import MediMoreInfo from './src/Component/Map/MediMoreInfo';

//DrugInfo
import Drug from './src/Component/DrugInfo/Drug';
import DrugMoreInfo from './src/Component/DrugInfo/DrugMoreInfo';

// Alarm
import AlarmList from './src/Component/Alarm/AlarmList';
import AddAlarm from './src/Component/Alarm/AddAlarm';
import ModifyAlarm from './src/Component/Alarm/ModifyAlarm';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: 'black', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen name="MediMap" component={MediMap} />
        <Stack.Screen name="MediModal" component={MediModal} />
        <Stack.Screen name="MediMoreInfo" component={MediMoreInfo} />

        <Stack.Screen name="Drug" component={Drug} />
        <Stack.Screen name="DrugMoreInfo" component={DrugMoreInfo} options={{headerShown: false}} />
        
        <Stack.Screen name="AlarmList" component={AlarmList} />
        <Stack.Screen name="AddAlarm" component={AddAlarm} />
        <Stack.Screen name="ModifyAlarm" component={ModifyAlarm} />
      </Stack.Navigator>
        
    </NavigationContainer>
  );
};

export default App;