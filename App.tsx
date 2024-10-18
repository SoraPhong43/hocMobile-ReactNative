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

export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen(props: any) {
    // console.log("check props:", props)
    const navigation = props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            title='Go to details'
            onPress={() => navigation.navigate("Details")} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title='Go user id = 1'
            onPress={() => navigation.navigate("Details",
              { userId: 1, name: "Eric" }
            )} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title='Go user id = 2'
            onPress={() => navigation.navigate("Details",
              { userId: 2, name: "Hoi dan it" }
            )} />
        </View>
      </View>
    );
  }

  function DetailsScreen(props: any) {
    const route: any = useRoute();
    const navigation: any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id = {route?.params?.userId}</Text>
        <Button
          title='Go back home'
          onPress={() => navigation.goBack()} />
      </View>
    );
  }
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  return (
    // <TouchableWithoutFeedback
    //   onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <InputTodo
    //       addTodo={addTodo}
    //     />
    //     <ListTodo
    //       todoList={todoList}
    //       deleteTodo={deleteTodo}
    //     />
    //   </View>
    // </TouchableWithoutFeedback>

    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: 'Trang chu' }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }: { route: any }) => ({
            headerTitle: `Xem chi tiet ${route?.params?.userId ?? ""}`,
          })} />
      </Stack.Navigator> */}

      {/* <Drawer.Navigator>
        <Drawer.Screen
          options={{
            drawerLabel: "trang chu"
          }}
          name="Feed"
          component={HomeScreen} />
        <Drawer.Screen name="Article" component={DetailsScreen} />
      </Drawer.Navigator> */}

      <Tab.Navigator
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={DetailsScreen} />
      </Tab.Navigator>

    </NavigationContainer>
    // <Flexbox />
  );
}


