import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function App() {
  const [name, setName] = useState<string>("Phong");

  //number
  const [age, setAge] = useState<number>(21)

  //null, undefined, boolean
  const test = null;

  //object, array
  const [person, setPerson] = useState([6, 9])
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>
      </View>
      <Text style={styles.text}>Hoc lai</Text>
      <StatusBar style="auto" />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
