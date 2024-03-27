import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MenuReportes = ({ verReportesDiarios, verReportesMensuales }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/tecol/TicketBC/images/report.png')} // Ruta de tu imagen
        style={styles.image}
      />
      <Text style={styles.title}>Menú de Reportes</Text>
      <TouchableOpacity style={styles.button} onPress={verReportesDiarios}>
        <Text style={styles.buttonText}>Reportes Diarios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={verReportesMensuales}>
        <Text style={styles.buttonText}>Reportes Mensuales</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => console.log('Regresar al menú anterior')}>
        <Text style={styles.buttonText}>Regresar al Menú Anterior</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const verReportesDiarios = () => {
    console.log('Mostrar reportes diarios'); // Implementar lógica para mostrar los reportes diarios
  };

  const verReportesMensuales = () => {
    console.log('Mostrar reportes mensuales'); // Implementar lógica para mostrar los reportes mensuales
  };

  return (
    <MenuReportes
      verReportesDiarios={verReportesDiarios}
      verReportesMensuales={verReportesMensuales}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200, // Ancho de la imagen
    height: 200, // Alto de la imagen
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#4682B4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
