import React, { useState } from "react";
import { Text, Button } from "react-native";
import estilo from "./estilo";


// usando destruct do valor recebido no paramentro da função 
export default ({ inicial = 0, passo=1 } ) => {

    //sem destruct
    //export default props =>{    

    //useState server para monitorar os componentes e para atualizalos
    //let numero = props.inicial
    const [valor, setValor] = useState(inicial);

    const inc = () => setValor(valor + passo);
    const dec = () => setValor(valor - passo);
    

    return (

        <>
            <Text style={estilo.TxG}>{valor}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
            
        </>
    )
}