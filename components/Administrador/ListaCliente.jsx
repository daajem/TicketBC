import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data1 = [
  { id: '1', fullName: 'John Doe', email: 'john.doe@example.com', username: 'johndoe' },
  { id: '2', fullName: 'Jane Smith', email: 'jane.smith@example.com', username: 'janesmith' },
  // Agrega más usuarios si es necesario
];

const handleEliminarRuta = () => {
  // Lógica para eliminar usuarios
}

const ListaCliente = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>

      <Text style={styles.fullName}>{item.fullName}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.username}>{item.username}</Text>

    </TouchableOpacity>
  );

  return (
    <View>

      <View style={styles.container}>

        <View style={styles.table}>

          <Text style={styles.tableTitle}>Clientes</Text>
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 50,
  },
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
});

export default ListaCliente;
