import React, { useState } from 'react';
import { View, Button, ScrollView, StyleSheet, TextInput } from 'react-native';

const GuardarReporteDiario = (props) => {

  const initialState = {
    fecha: "",
    totalTickets: "",
    totalAmount: "",
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (value, fecha) => {
    setState({ ...state, [fecha]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        
        <TextInput
        placeholder="Fecha"
        onChange={(value) => handleChangeText(value, "fecha")}
        value={state.fecha}
        />
       </View> 

       <View>
        <TextInput 
        placeholder="Total de Tickets"
        onChange={(value) => handleChangeText(value, "totalTickets")}
        value={state.totalTickets}
        />
       </View>

       <View>
        <TextInput 
        placeholder="Dinero total por los tickets"
        onChange={(value) => handleChangeText(value, "totalAmount")}
        value={value.totalAmount}
        />
       </View>

       <View>
        <Button title="Update" onPress={() => updateUser()} color="#19AC52" />
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

export default GuardarReporteDiario;
