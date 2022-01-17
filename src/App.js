import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Primeiro from './components/Primeiro';
import CompPadrao, { Comp1, Comp2 } from './components/Mult';


//declaração de função 
/*function App(){
    return <Text>Primeiro componente</Text>
    
}
*/

//função anonima 
/*const App = function(){
    return < Text> Primeiro componente!</Text>
}
*/

//componente de função
/* 
export default function(){
    return <Text>Primeiro componente !!</Text>
}
*/

//ctrl + ; 
//componente funcional 2
export default () => ( 
    <View style={style.App}>
        {/* <Text>{ 1 + 3 }</Text> */}
        <CompPadrao />
        <Comp1 />
        <Primeiro  /> 
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})