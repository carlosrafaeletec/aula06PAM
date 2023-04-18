import React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native";

import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

import Texto from "../componentes/Texto";

const width = Dimensions.get('screen').width;

export default function Miniatura() {
    return <>
        <Image source= { topo } style={estilos.topo}/> 
        <Texto style={ estilos.titulo }>Miniaturas 06</Texto>
        <View style={ estilos.expositor }>
            <View style={ estilos.logoNome }>
                <Image source={ logo } style={ estilos.logo }/>
                    <Texto style={ estilos.nomeLoja }>Miniaturas Mini</Texto>
            </View>
            <Texto style={ estilos.descricaoLoja }>Miniaturas reais de automóveis,
                caminhões, antigos e novos. Escolha a sua!</Texto>
            <Texto style={ estilos.preco }>R$ 20,00</Texto>
        </View>
        </>;
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
        paddingBottom: 550,
        color: 'black',
        fontFamily: 'MontSerratBold'
    },
    expositor: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    logoNome: {
        flexDirection:"row"
    },
    nomeLoja: {
        fontSize: 16,
        lineHeight: 24,
        paddingBottom: 12,
        fontFamily:'MontSerratBold'
    },
    descricaoLoja: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        fontFamily:'MontSerratBold'
    },
    preco: {
        color: "#FF4500",
        fontFamily:"MontSerratBold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    logo: {
        width: 32,
        height: 32,
        marginRight: 8
    }

})