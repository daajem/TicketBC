import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import app from '../../firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth';


const RegisterScreen = () => {
  const auth = getAuth(app);

  
  const  [nombre, setNombre] = useState('');
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');
  const  [passwordC, setPasswordC] = useState('');

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder='Nombres Completo'
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder='email@ejemplo.com'
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

     <TextInput
        style={styles.input}
        placeholder='Confirmar Contraseña'
        onChangeText={(text) => setPasswordC(text)}
        value={passwordC}
        secureTextEntry={true}
      />

      <Button title="Registrar" onPress={handleSignUp()} />
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
});

export default RegisterScreen;
