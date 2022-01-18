import React, { useState } from "react";
import { Text, Button } from "react-native";
import estilo from "./estilo";

export default props => {

    //useState server para monitorar os componentes e para atualizalos
    //let numero = props.inicial
    const [valor, setValor] = useState(props.inicial);

    const inc = () => setValor(valor + 1);
    const dec = () => setValor(valor - 1);
    

    return (

        <>
            <Text style={estilo.TxG}>{valor}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
            
        </>
    )
}