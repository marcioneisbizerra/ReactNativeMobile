import React from "react";
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Texto from './Texto';

export default function Botao({children, style}){
    //let estilo = estilos.texto;

    if (style?.fontWeight === 'bold'){
        estilo = estilo.textoNegrito;
    }
    return <>
    //<Text style={[style, estilo]}>{ children }</Text>
    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
            <Texto style={estilos.textobotao}>
            { botao }
            </Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textobotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})