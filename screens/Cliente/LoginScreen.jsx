import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LoginScreen = () => {
  const auth = getAuth();
  const navigation = useNavigation();

  const [ state, setState ] = useState ({
    email: "",
    password: "",
  })

  const handleChangeText = (email, value) => {
    setState({...state, [email]: value})
  }

  const iniciarLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, state.email, state.password);
      const usuarios = userCredential.usuarios;
      console.log('Usuario autenticado:', usuarios.uid);

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Aquí podrías mostrar un mensaje de error al usuario, por ejemplo:
      // Alert.alert('Error', 'Hubo un error al iniciar sesión. Por favor, intenta de nuevo.');
    }
  };   

  const handleRegistro = () => {
    navigation.navigate('Registro');
  }

  return (

    <View style={styles.container}>
      <Text style={styles.texto}>TicketBC</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText('email', value)}
        placeholder='Correo electronico'
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText('password', value)}
        secureTextEntry={true}
        placeholder='Contraseña'
      />
      <TouchableOpacity onPress={handleRegistro}>
        <Text style = {styles.textNoAcount}>¿No tienes cuenta? Creala</Text>
      </TouchableOpacity>


      <Button title="Iniciar sesión" onPress={iniciarLogin} />
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
