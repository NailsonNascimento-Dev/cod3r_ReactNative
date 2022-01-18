// passagem de componentes

import React from "react";
import { Text } from "react-native"
import estilo from "./estilo";


// export default Props => {


export default (Props) => {
    console.warn(Props)
    return (
        <Text style={estilo.TxG}>
            O valor {Props.max} é maior que o valor {Props.min}!!!!!!!!
        </Text>
    )
}