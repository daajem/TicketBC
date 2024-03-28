import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

  const  [email, setEmail] = React.useState('');
  const  [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const iniciarSesion = () => {
    navigation.navigate('Cliente');
  }

  const RegistrarUsuario = () => {
    navigation.navigate('Registrar');
  }

  return (

    <View style={styles.container}>
      <Text style={styles.texto}>TicketBC</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder='Correo electronico'
         
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder='Contraseña'

      />
      <TouchableOpacity onPress={RegistrarUsuario}>
        <Text style = {styles.textNoAcount}>¿No tienes cuenta? Creala</Text>
      </TouchableOpacity>


      <Button title="Iniciar sesión" onPress={iniciarSesion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  texto: {
    fontSize: 48,
    margin: 30,
  },

  textNoAcount:{
    color: 'blue',
    marginBottom: 20,
  },

});

export default LoginScreen;
