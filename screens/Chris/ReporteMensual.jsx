import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const MonthlyReportsScreen = () => {
  // Datos simulados de reporte mensual
  const monthlyReportData = [
    { id: 1, month: 'Enero', totalTickets: 100, totalAmount: '$1000' },
    { id: 2, month: 'Febrero', totalTickets: 120, totalAmount: '$1200' },
    { id: 3, month: 'Marzo', totalTickets: 150, totalAmount: '$1500' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reporte Mensual</Text>
        {monthlyReportData.map((report) => (
          <View key={report.id} style={styles.item}>
            <Text>Mes: {report.month}</Text>
            <Text>Total Tickets: {report.totalTickets}</Text>
            <Text>Total Amount: {report.totalAmount}</Text>
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default MonthlyReportsScreen;
