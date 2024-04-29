import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConsultaRuta = () => {

  const [state, useState] = useState ({
    puntoInicio: "",
    puntoFinal: "",
    tiempoEstimado: ""
  });

  const handleChangeText = (puntoIncio, value) => {
    setState({...state, [puntoIncio]: value});
  }
    
  
  const navigation = useNavigation();
  const monthlyReportData = [
    { puntoIncio: 'Mariano Matamoros', puntoFinal: 'Centro', tiempoEstimado: '1hr' },
    { puntoIncio: '5 y 10', puntoFinal: 'Centro', tiempoEstimado: '30min' },
    { puntoIncio: '5 y 10', puntoFinal: 'Los Pinos', tiempoEstimado: '35min' },
  ];

  const consultar = () => {
    navigation.navigate('RegistrarRuta');

  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ruta</Text>
        {monthlyReportData.map((report) => (
          <TouchableOpacity onPress={consultar} style={styles.item}>
            
            <Text>Punto inicio: {report.puntoIncio}</Text>
            <Text>Destino: {report.puntoFinal}</Text>
            <Text>Tiempo estimado: {report.tiempoEstimado}</Text>
            
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ConsultaRuta;
