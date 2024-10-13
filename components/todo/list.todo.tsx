import { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: 'pink',
        marginBottom: 20,
        padding: 15
    }
})
interface IProps {
    todoList: ITodo[];

}
const ListTodo = (props: IProps) => {
    const { todoList } = props;

    return (
        <>
            <Text>{JSON.stringify(todoList)}</Text>
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
                            style={styles.todo}
                            key={item.id}
                        >
                            {item.title}
                        </Text>
                    )
                }}
            /></>
    )
}

export default ListTodo;