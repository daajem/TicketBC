import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const RegisterScreen = () => {

  const [ state, setState ] = useState ({
    name: "",
    email: "",
    lastname: "",
    password: "",
    passwordC: "",
    
  })
  
  const handleChangeText = (name, value) => {
    setState({...state, [name]: value})
  }

  const navigation = useNavigation();
  
  const newUser = async () => {

    if (state.name == '' && state.email == '' && state.lastname == '' && state.password == '' && state.passwordC == '' ) {
      alert('Los campos estan vacios')
    }else if (state.name == '') {
      alert('Agregue al menos un nombre')
    }else if (state.email == '') {
      alert('Agregue un email')
    }else if (state.lastname == ''){
      alert('Agregue al menos un apellido')
    }else if (state.password == ''){
      alert('Agregue una contrasena al menos de 6 caracteres')
    }else if (state.passwordC == ''){
      alert('Vuelva a ingresar la contrasena')
    }else if (state.password == state.passwordC) {
      
      try {
        // Añadir un documento a la colección "users"
        const docRef = await addDoc(collection(db, 'usuarios'), {
          name: state.name,
          email: state.email,
          lastname: state.lastname,
          password: state.password,
        });
        console.log('Usuario registrado con ID: ', docRef.id);
        alert('Registro guardado exitosamente');
        navigation.navigate('Login');

      } catch (error) {
        console.error('Error al agregar usuario: ', error);
        alert('Hubo un error al intentar registrar al usuario.');
      }
    } else {
      alert('Las contrasenas no son iguales')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Registro</Text>

      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText('name', value)}
        placeholder='Nombres(S)'
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText('lastname', value)}
        placeholder='Apellidos(S)'
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText('email', value)}
        placeholder='email@ejemplo.com'
      />

      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText('password', value)}
        secureTextEntry={true}
        placeholder='Contraseña'
      />

     <TextInput
        style={styles.input}
        onChangeText={(value) => handleChangeText('passwordC', value)}
        secureTextEntry={true}
        placeholder='Confirmar Contraseña'
      />

      <Button title="Registrar" onPress={() => newUser()} />
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
