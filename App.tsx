import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';




export default function App() {
  const [name, setName] = useState<string>("Phong");

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

      <Button title='add' />
      <Text style={styles.text}>Hoc lai</Text>
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
    paddingTop: 10
    //alignItems: 'center',
    // justifyContent: 'center',
  },
});
