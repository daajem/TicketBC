import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConsultaAccidentes = () => {
    const navigation = useNavigation();


  const monthlyReportData = [
    { id: 1, nombreChofer: 'John Doe', numeroTransporte: '56748', ruta: '5y10 - Centro ', zona: 'Estadio Caliente' },
    { id: 2, nombreChofer: 'Esquival Perez', numeroTransporte: '53683', ruta: '5y10 - Centro', zona: 'Centro' },
    { id: 3, nombreChofer: 'Guillermo Lozano', numeroTransporte: '78432', ruta: 'Presidentes - 5y10', zona: 'Plaza Peninsula' },

  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ruta</Text>
        {monthlyReportData.map((report) => (
          <TouchableOpacity key={report.id} style={styles.item}>

            <Text>Nombre Chofer: {report.nombreChofer}</Text>
            <Text>Numero Transporte: {report.numeroTransporte}</Text>
            <Text>Ruta: {report.ruta}</Text>
            <Text>Zona: {report.zona}</Text>
            
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

export default ConsultaAccidentes;
