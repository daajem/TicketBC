import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const ManagementScreen = () => {
  const [puntoPartida, setPuntoPartida] = useState('');
  const [destino, setDestino] = useState('');
  const [tiempoEstimado, setTiempoEstimado] = useState('');
  // const [puntosIntermedios, setPuntosIntermedios] = useState('');

  const handleAgregarRuta = () => {
    // Lógica para agregar una nueva ruta
    console.log('Agregar ruta:', { puntoPartida, destino, tiempoEstimado,});
    // Aquí puedes realizar la lógica para guardar la nueva ruta en la base de datos
  };

  const handleModificarRuta = () => {
    // Lógica para modificar datos de la ruta
    // Aquí puedes implementar la lógica para modificar datos de la ruta en la base de datos
  };

  const handleEliminarRuta = () => {
    // Lógica para eliminar ruta
    // Aquí puedes implementar la lógica para eliminar una ruta de la base de datos
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>

        <Text style={styles.title}>Registro de Rutas</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Punto de Partida:</Text>
          <TextInput
            style={styles.input}
            value={puntoPartida}
            onChangeText={setPuntoPartida}
            placeholder="Punto de partida"
          />
          <Text style={styles.label}>Destino:</Text>
          <TextInput
            style={styles.input}
            value={destino}
            onChangeText={setDestino}
            placeholder="Destino"
          />
          {/* <Text style={styles.label}>Puntos Intermedios:</Text>
          <TextInput
            style={styles.input}
            value={puntosIntermedios}
            onChangeText={setPuntosIntermedios}
            placeholder="Puntos intermedios"
          /> */}
          <Text style={styles.label}>Tiempo Estimado de Completación:</Text>
          <TextInput
            style={styles.input}
            value={tiempoEstimado}
            onChangeText={setTiempoEstimado}
            placeholder="Tiempo estimado"
          />
          <TouchableOpacity style={styles.button} onPress={handleAgregarRuta}>
            <Text style={styles.buttonText}>Agregar Ruta</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleModificarRuta}>
          <Text style={styles.buttonText}>Modificar Ruta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEliminarRuta}>
          <Text style={styles.buttonText}>Eliminar Ruta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => Alert.alert('Button Pressed!', 'Regresar a la página anterior')}>
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
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 200, // Ajusta el ancho de la imagen según sea necesario
    height: 200, // Ajusta la altura de la imagen según sea necesario
    marginBottom: 20, // Ajusta la distancia entre la imagen y los botones
    marginLeft: 40,
  },
});

export default ManagementScreen;
