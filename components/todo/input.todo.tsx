import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import MineButton from "../button/mine.button";
const styles = StyleSheet.create({
    todoInput: {
        borderColor: 'violet',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    }
})

interface IProps {
    addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
    const { addTodo } = props;
    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert("Thong tin khong hop le",
                "tieu de khong duoc bo trong",
                [
                    // {
                    //     text: 'Cancel',
                    //     onPress: () => console.log('Cancel Pressed'),
                    //     style: 'cancel',
                    // },
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    }
                ]
            )
            return;
        }
        addTodo(name);
        setName("");
    }

    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    onChangeText={v => setName(v)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.todoInput}
                />

                <MineButton
                    title="add new"
                    onPress={handleAddNewTodo}
                />
            </View>

        </>
    )
}

export default InputTodo;