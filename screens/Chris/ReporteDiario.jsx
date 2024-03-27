import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const DailyReportsScreen = () => {
  // Datos simulados de tickets y colaboradores
  const ticketsData = [
    { id: 1, description: 'Ticket 1', amount: '$10' },
    { id: 2, description: 'Ticket 2', amount: '$20' },
    { id: 3, description: 'Ticket 3', amount: '$15' },
  ];

  const colaboradoresData = [
    { id: 1, name: 'Colaborador 1', unidad: 'Unidad 1' },
    { id: 2, name: 'Colaborador 2', unidad: 'Unidad 2' },
    { id: 3, name: 'Colaborador 3', unidad: 'Unidad 3' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Datos de Tickets</Text>
        {ticketsData.map((ticket) => (
          <View key={ticket.id} style={styles.item}>
            <Text>{ticket.description}</Text>
            <Text>{ticket.amount}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Datos de Colaboradores y Unidad/Transporte</Text>
        {colaboradoresData.map((colaborador) => (
          <View key={colaborador.id} style={styles.item}>
            <Text>{colaborador.name}</Text>
            <Text>{colaborador.unidad}</Text>
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default DailyReportsScreen;
