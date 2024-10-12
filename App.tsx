import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';




export default function App() {
  const [name, setName] = useState<string>("Phong");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "learn React Native" },
    { id: 2, title: "learn React " },
    { id: 3, title: "learn React JS" },
    { id: 4, title: "learn React 1" },
    { id: 5, title: "learn React 2" },
    { id: 6, title: "learn React 3" },
    { id: 7, title: "learn React 4" },
    { id: 8, title: "learn React 5" },
  ])


  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={v => setName(v)}
          value={name}
          autoCapitalize='none'
          //multiline
          //keyboardType='numeric'
          //maxLength={2}
          autoCorrect={false}
          style={{
            borderColor: 'violet',
            borderWidth: 1,
            padding: 10
          }}
        />
        <Text style={styles.text}>{name}</Text>
      </View>

      <Button title='add' color={"green"}
        onPress={() => alert("tap")} />
      {/* <ScrollView style={{ marginTop: 20, borderColor: 'red', borderWidth: 1 }}>
        {todoList.map(todo => {
          return (
            <Text
              key={todo.id}
              style={styles.todo}>
              {todo.title}
            </Text>
          )
        })}
      </ScrollView> */}

      <FlatList
        style={{
          marginTop: 20,
          borderColor: "red",
          borderWidth: 1
        }}
        data={todoList}
        renderItem={({ item }) => {
          return (
            <Text
              key={item.id}
              style={styles.todo}>
              {item.title}
            </Text>
          )
        }}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  },
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
  todo: {
    fontSize: 30,
    backgroundColor: 'pink',
    marginBottom: 20,
    padding: 15
  }
});
