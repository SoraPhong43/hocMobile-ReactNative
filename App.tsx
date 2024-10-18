import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  Text, TextInput, View
} from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from './components/learn/home';
import HomeDetails from './components/learn/home.details';
import Like from './components/learn/like';
import LikeDetails from './components/learn/like.details';
import About from './components/learn/About';
import ChangePassword from './components/learn/Change.Password';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const TabApp = () => {
    return (
      < Tab.Navigator
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Like" component={Like} />
      </Tab.Navigator >
    )
  }

  const StackApp = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TabApp"
          component={TabApp}
          options={{ headerTitle: 'Trang chu', headerShown: false }} />
        <Stack.Screen
          name="HomeDetails"
          component={HomeDetails}
          options={({ route }: { route: any }) => ({
            headerTitle: `Xem chi tiet ${route?.params?.userId ?? ""}`,
          })} />
        <Stack.Screen
          name="LikeDetails"
          component={LikeDetails}
          options={({ route }: { route: any }) => ({
            headerTitle: `Xem chi tiet ${route?.params?.userId ?? ""}`,
          })} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen
          name="StackApp"
          component={StackApp} />
        <Drawer.Screen
          name="About"
          component={About} />
        <Drawer.Screen
          name="Change Password"
          component={ChangePassword} />
      </Drawer.Navigator>

      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName as any}
              size={size} color={color}
            />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={HomeDetails} />
      </Tab.Navigator> */}

    </NavigationContainer>
    // <Flexbox />
  );
}


