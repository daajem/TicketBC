import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AccidentReportScreen = () => {
  const [chofer, setChofer] = useState('');
  const [numTransporte, setNumeroTransporte] = useState('');
  const [ruta, setRuta] = useState('');
  const [zona, setZona] = useState('');

  const handleSubirReporte = () => {
    // Aquí puedes implementar la lógica para subir el reporte a la base de datos
    console.log('Reporte de accidente subido:', {
      chofer,
      compania,
      ruta,
      zona,
      estadoPasajeros,
      nivelDanios
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Reporte de Accidente</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nombre del Chofer:</Text>
          <TextInput
            style={styles.input}
            value={chofer}
            onChangeText={setChofer}
            placeholder="Nombre del chofer"
          />

          <Text style={styles.label}>Numero de Transporte:</Text>
          <TextInput
            style={styles.input}
            value={numTransporte}
            onChangeText={setNumeroTransporte}
            placeholder="123456"
          />

          <Text style={styles.label}>Ruta: </Text>
          <TextInput
            style={styles.input}
            value={ruta}
            onChangeText={setRuta}
            placeholder="Ruta A - Ruta B"
          />

          <Text style={styles.label}>Zona del Accidente:</Text>
          <TextInput
            style={styles.input}
            value={zona}
            onChangeText={setZona}
            placeholder="Zona del accidente"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubirReporte}>
          <Text style={styles.buttonText}>Subir Reporte</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: 'brown',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AccidentReportScreen;
