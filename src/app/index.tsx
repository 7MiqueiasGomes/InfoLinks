// importando componentes de dentro do react native
import { View, Text, StyleSheet } from "react-native";

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function index () {
return (

// View é um componente que recebe estilização, semelhante a Div do HTML
<View style={styles.container}>
    <Text style={styles.title} >eu sou o melhor!!</Text>
    <Text style={styles.title2} >Miquéias</Text>
    <Text style={styles.title3} >Nascimento: 05/07</Text>
    <Text style={styles.title4} >Rua tal</Text>
</View>
);
}

// estilizações criadas usando o stylesheet
const styles = StyleSheet.create({
    
    container: {
        flex: 1, // considera toda a arca util da tela para os componentes
        justifyContent: "center", // justifica (ajusta) todos os elementos no centro da tela 
        alignItems: "center", // alinha todos os elementos no centro da tela
        flexDirection: "row", // organiza todos os elementos dentro do flex box em linha (esquerda)
    },

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





