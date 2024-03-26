import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const ManagementScreen = () => {
  const [colaborador, setColaborador] = useState('');
  const [matricula, setMatricula] = useState('');

  const handleAgregarColaborador = () => {
    // Lógica para agregar un nuevo colaborador
    console.log('Agregar colaborador:', colaborador);
    // Aquí puedes realizar la lógica para guardar el nuevo colaborador en la base de datos
  };

  const handleAgregarRutaTransporte = () => {
    // Lógica para agregar una nueva ruta de transporte
    console.log('Agregar ruta de transporte:', rutaTransporte);
    // Aquí puedes realizar la lógica para guardar la nueva ruta de transporte en la base de datos
  };

  const handleModificarDatos = () => {
    // Lógica para modificar datos existentes
    // Aquí puedes implementar la lógica para modificar datos existentes en la base de datos
  };

  const handleEliminarDatos = () => {
    // Lógica para eliminar datos existentes
    // Aquí puedes implementar la lógica para eliminar datos existentes de la base de datos
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
  
        <Text style={styles.title}>Registro de colaboradores</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nombre del Colaborador:</Text>
          <TextInput
            style={styles.input}
            value={colaborador}
            onChangeText={setColaborador}
            placeholder="Nombre del colaborador"
          />
          <Text style={styles.label}>Edad:</Text>
          <TextInput
            style={styles.input}
            value={matricula}
            onChangeText={setMatricula}
            placeholder="Matrícula del colaborador"
          />
          <Text style={styles.label}>Fecha de nacimiento:</Text>
          <TextInput
            style={styles.input}
            value={matricula}
            onChangeText={setMatricula}
            placeholder="Matrícula del colaborador"
          />
          <Text style={styles.label}>Numero telefonico:</Text>
          <TextInput
            style={styles.input}
            value={matricula}
            onChangeText={setMatricula}
            placeholder="Matrícula del colaborador"
          />
          <Text style={styles.label}>Matrícula del Colaborador:</Text>
          <TextInput
            style={styles.input}
            value={matricula}
            onChangeText={setMatricula}
            placeholder="Matrícula del colaborador"
          />
          <TouchableOpacity style={styles.button} onPress={handleAgregarColaborador}>
            <Text style={styles.buttonText}>Agregar Colaborador</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleModificarDatos}>
          <Text style={styles.buttonText}>Modificar Datos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEliminarDatos}>
          <Text style={styles.buttonText}>Eliminar Datos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
    marginLeft: 55,
  },
});

export default ManagementScreen;
