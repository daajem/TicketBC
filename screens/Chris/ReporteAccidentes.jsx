import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AccidentReportScreen = () => {
  const [chofer, setChofer] = useState('');
  const [compania, setCompania] = useState('');
  const [ruta, setRuta] = useState('');
  const [zona, setZona] = useState('');
  const [estadoPasajeros, setEstadoPasajeros] = useState('');
  const [nivelDanios, setNivelDanios] = useState('');

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

          <Text style={styles.label}>Compañía de Transporte:</Text>
          <TextInput
            style={styles.input}
            value={compania}
            onChangeText={setCompania}
            placeholder="Compañía de transporte"
          />

          <Text style={styles.label}>Ruta Asignada Actualmente:</Text>
          <TextInput
            style={styles.input}
            value={ruta}
            onChangeText={setRuta}
            placeholder="Ruta asignada"
          />

          <Text style={styles.label}>Zona del Accidente:</Text>
          <TextInput
            style={styles.input}
            value={zona}
            onChangeText={setZona}
            placeholder="Zona del accidente"
          />

          <Text style={styles.label}>Estado de los Pasajeros:</Text>
          <TextInput
            style={styles.input}
            value={estadoPasajeros}
            onChangeText={setEstadoPasajeros}
            placeholder="Estado de los pasajeros"
          />

          <Text style={styles.label}>Nivel de Daños:</Text>
          <TextInput
            style={styles.input}
            value={nivelDanios}
            onChangeText={setNivelDanios}
            placeholder="Nivel de daños"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubirReporte}>
          <Text style={styles.buttonText}>Subir Reporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => console.log("Regresar al menú anterior")}>
          <Text style={styles.buttonText}>Regresar</Text>
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
