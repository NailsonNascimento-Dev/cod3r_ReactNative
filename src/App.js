import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Primeiro from './components/Primeiro';
import CompPadrao, { Comp1, Comp2 } from './components/Mult';

import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import estilo from "./components/estilo";


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
        {/* <MinMax min="3" max="20" /> */}
        {/* <CompPadrao />
        <Comp1 />
        <Primeiro  />  */}
        {/*//////////////////////////////////////*/}

        {/* <Aleatorio min={0} max={20} />
        <Aleatorio min={0} max={20} />
        <Aleatorio min={0} max={20} />
        <Aleatorio min={0} max={20} />
        <Aleatorio min={0} max={20} /> 
*/}
   
        <Contador  style={ estilo.TxG} inicial={100}/>
    
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
    
})