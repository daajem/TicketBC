import React, { useState } from 'react';
import { View, Button, ScrollView, StyleSheet, TextInput } from 'react-native';

const DetallesReporteDiario = (props) => {

  const initialState = {
    fecha: "",
    totalTickets: "",
    totalAmount: "",
  };

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleChangeText = (value, prop) => {
    setReporte({ ...state, [prop]: value });
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
        <Button title='Guardar colaborador' onPress={() => saveNewUser()} />
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

export default DetallesReporteDiario;
