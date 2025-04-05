import { View, Text, StyleSheet } from "react-native";

export default function index () {
return (
<View>
    <Text style={styles.title} >eu sou o melhor!!</Text>
    <Text style={styles.title2} >Miquéias</Text>
    <Text style={styles.title3} >Nascimento: 05/07</Text>
    <Text style={styles.title4} >Rua tal</Text>
</View>
);
}

const styles = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 22,
    },

    title2: {
        color: "blue",
        fontSize: 26,
    },

    title3: {
        color: "green",
        fontSize: 24,
    },

    title4: {
        color: "orange",
        fontSize: 24,
    },


})





