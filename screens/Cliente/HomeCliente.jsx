import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeCliente = () => {

  const navigation = useNavigation();

  
  const handleComprar = () => {
    navigation.navigate('ComprarCliente');

  }
  
  const handlePerfil = () => {
    navigation.navigate('Home');
  
  }
  
  const handleConsulta = () => {
    navigation.navigate('PerfilCliente');
  
  }
  
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={styles.containerMenu}>
        <Button title="Comprar" onPress={handleComprar}/>
        <Button title="Consulta" onPress={handlePerfil} />
      </View>

      <View style={styles.containerPerfil}>
        <Button title="Perfil" onPress={handleConsulta} />
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
