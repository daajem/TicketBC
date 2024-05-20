import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

import appFirebase from '../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const GuardarAccidente = (props) => {
  const initialState = {
    fecha: "",
    chofer: "",
    unidad: "",
    ruta: "",
    zona: "",

};
const [state, setState] = useState(initialState);

const handleChangeText = (value, field) => {
    setState({ ...state, [field]: value });
};

const saveAccidente = async() => {
  try {
    await addDoc(collection(db, 'accidentes'), {
      ...state
    });
    Alert.alert('Enviado con Éxito');
    props.navigation.navigate('Reporte Diario');
  }catch (error) {
    console.error(error);
  }

  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Registra</Text>

        <View style={styles.inputGroup}>
          <Text>Fecha:</Text>
          <TextInput
            style={styles.input}
            placeholder="01/02/2003"
            onChangeText={(value) => handleChangeText(value, 'fecha')}
            value={state.fecha}
          />
          
          <Text>Nombre del Chofer:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del chofer"
            onChangeText={(value) => handleChangeText(value, 'chofer')}
            value={state.chofer}
          />

          <Text>Numero de Transporte:</Text>
          <TextInput
            style={styles.input}
            placeholder="123456"
            onChangeText={(value) => handleChangeText(value, 'unidad')}
            value={state.unidad}
          />

          <Text>Ruta:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ruta A - Ruta B"
            onChangeText={(value) => handleChangeText(value, 'ruta')}
            value={state.ruta}
          />

          <Text>Zona del Accidente:</Text>
          <TextInput
            style={styles.input}
            placeholder="Zona del accidente"
            onChangeText={(value) => handleChangeText(value, 'zona')}
            value={state.zona}
          />
        </View>

        <TouchableOpacity onPress={saveAccidente} style={styles.button}>
          <Text style={styles.buttonText}>Mandar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});



export default GuardarAccidente;
