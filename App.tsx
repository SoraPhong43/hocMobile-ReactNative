import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';


export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([])

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addTodo = (text: string) => {
    // alert(text)
    const todo = { id: randomInteger(1, 1000000), title: text };
    setTodoList([...todoList, todo])
  }

  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter(todo => todo.id != id)
    setTodoList(newTodo)
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputTodo
          addTodo={addTodo}
        />
        <ListTodo
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 60,
    color: 'red',
    paddingHorizontal: 20,
    marginTop: 50
    //alignItems: 'center',
    // justifyContent: 'center',
  },

});
