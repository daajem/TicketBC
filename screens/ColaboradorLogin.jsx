import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';


const ColaboradorLogin = () => {
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleIniciarSesion = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Se inicio sesion')
      const user = userCredential.user;
      console.log(user)
      Alert.alert(user.message)
      navigation.navigate('Administrador');
    })    
     .catch(error => {
      console.log(error)
      Alert.alert(error.message)
     })
  }

  // const handleRegistrar = () => {
  //   createUserWithEmailAndPassword(auth, email, password )
  //   .then((userCredential) => {
  //     console.log('Cuenta Creada')
  //     const user = userCredential.user;
  //     console.log(user)
  //     Alert.alert(user.message)
  //   })    
  //    .catch(error => {
  //     console.log(error)
  //     Alert.alert(error.message)
  //    })
  // }

  return (

    <View style={styles.container}>
      <Text style={styles.texto}>Sesion de Colaborador</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder='Correo electronico'
        value={email}
         
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        placeholder='Contraseña'
        value={password}

      />
      
      <Button title="Iniciar sesión" onPress={handleIniciarSesion} />
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

export default ColaboradorLogin;
