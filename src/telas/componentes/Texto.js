import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }){
  let estilo = estilos.texto;
  /*interrogação(para corrigir erro) quando nao tiver a 
  fonte style definida no cesta.js <Texto></Texto>*/
  if (style?. fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }
  return <Text style={[style, estilo]}>{ children }</Text>
}
const estilos = StyleSheet.create({
  texto:{
    fontFamily: "MontSerratRegular",
    fontWeight: "normal",
  }, 
  textoNegrito: {
    fontFamily: "MontSerratBold",
    fontWeight: "normal",
  },
})