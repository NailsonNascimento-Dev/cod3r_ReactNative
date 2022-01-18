import React from "react";
import { Button } from "react-native";

function executar() {
    console.warn("EXc!!!");
}

export default props => {
    return (
        <>
            {/*exemplo de função passando 
                a referencia de outra fução */ }

            <Button
                title="Executar!"
                onPress={executar}
            />

            {/*exemplo de função pdefinida diretament
                no onPress */ }
            <Button
                title="Executar! #2"
                onPress={function () {
                    console.warn('Exec #02!!!!')
                }}
            />

            {/*exemplo de função chamada atraves de uma arraw function */ }
            <Button
                title="Executar! #3"
                onPress={ ()=>console.warn('Exec #03!!!!') }
            />


        </>
    )
}