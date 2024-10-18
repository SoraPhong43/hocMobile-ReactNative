import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        borderColor: "red",
        borderWidth: 1,
        //flexDirection: "row",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
        // alignItems: "center"

    },
    item1: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "yellow",
        height: 100,
        width: 70,
        alignSelf: "stretch"

    },
    item2: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "violet",
        height: 300,
        width: 90
    },
    item3: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "orange",
        height: 200,
        width: 100
    },
    item4: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "grey",
        height: 100,
        width: 80
    }
})
const Flexbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.item1}>
                Item1
            </Text>
            <Text style={styles.item2}>
                Item2
            </Text>
            <Text style={styles.item3}>
                Item3
            </Text>
            <Text style={styles.item4}>
                Item4
            </Text>
        </View>
    )
}

export default Flexbox;