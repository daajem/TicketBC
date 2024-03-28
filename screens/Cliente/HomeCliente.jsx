import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeCliente = () => {

  const navigation = useNavigation();

  
  const handleComprar = () => {
    navigation.navigate('Comprar');
  }
  
  const handlePerfil = () => {
    navigation.navigate('Perfil');
  }
  
  const handleConsulta = () => {
    //navigation.navigate('PerfilCliente');
  }

  const handleReporte = () => {
    navigation.navigate('ReporteAccicentes');
  }
  
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={styles.containerMenu}>
        <Button title="Comprar" onPress={handleComprar}/>
        <Button title="Consulta" />
        <Button title="Reporte" onPress={handleReporte} />
      </View>

      <View style={styles.containerPerfil}>
        <Button title="Perfil" onPress={handlePerfil} />
      </View>
    </View>
    
  );
};


const styles = StyleSheet.create({
    containerPerfil:{
        position: 'absolute', 
        top: 50, 
        right: 25, 
        borderRadius: 30,
        borderWidth: 9,
    },

    containerMenu: {
        flexDirection: 'row', 
        marginBottom: 30,
        
    },

});

export default HomeCliente
