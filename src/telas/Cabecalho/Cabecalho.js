import React from "react";
import { StyleSheet } from "react-native";

import topo from "../../../assets/topo.png";

export default function Cabecalho() {
    return<>
        <Image source= { topo } style={estilos.topo}/> 
        <Text style={ estilos.titulo }>Miniaturas 06</Text>
    </>
}

const estilos = StyleSheet.create({
topo: {
    width: '100%',
    height: 1440 / 2000 * width
},
titulo: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 32,
    lineHeight: 32,
    paddingTop: 48,
    color: 'white',
    fontFamily: 'MontSerratBold'
    }
});