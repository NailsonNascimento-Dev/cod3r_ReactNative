import React from "react";
import { Text } from "react-native"
import estilo from "./estilo";


function Aleatorio(props) {

    //destruction
    const {min, max} = props

    //criação das variaveis de
    const valorMin = min
    const valorMax = max

    //função para criar numero aleatorios inteiros 
    function random(valorMin, valorMax){
        return Math.round( Math.random() * (valorMax - valorMin) + valorMin);

    }

    return(
    <> {/*utilização de fragmento pode ser usandos (React.Fragment, <>,) */}
      
        < Text style={estilo.TxG}>O Numero Aleatório é: {random(valorMin,valorMax)} </Text>
       
    </>
)
}

export default Aleatorio;