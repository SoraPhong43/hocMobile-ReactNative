import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  Text, TextInput, View
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen(props: any) {
    console.log("check props:", props)
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
            onPress={() => navigation.navigate("Details")} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            title='Go user id = 2'
            onPress={() => navigation.navigate("Details")} />
        </View>
      </View>
    );
  }

  function DetailsScreen() {
    const navigation: any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id = ???</Text>
        <Button
          title='Go back home'
          onPress={() => navigation.goBack()} />
      </View>
    );
  }

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Flexbox />
  );
}


