import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data1 = [
  { id: '1', fullName: 'John Doe', email: 'john.doe@example.com', username: 'johndoe' },
  { id: '2', fullName: 'Jane Smith', email: 'jane.smith@example.com', username: 'janesmith' },
  { id: '3', fullName: 'Alice Johnson', email: 'alice.johnson@example.com', username: 'alicejohnson' },
  { id: '1', fullName: 'Bob Johnson', email: 'bob.johnson@example.com', username: 'bobjohnson' },
  { id: '2', fullName: 'Emily Brown', email: 'emily.brown@example.com', username: 'emilybrown' },
  { id: '3', fullName: 'Jack Davis', email: 'jack.davis@example.com', username: 'jackdavis' },
  { id: '1', fullName: 'Bob Johnson', email: 'bob.johnson@example.com', username: 'bobjohnson' },
  { id: '2', fullName: 'Emily Brown', email: 'emily.brown@example.com', username: 'emilybrown' },
  { id: '3', fullName: 'Jack Davis', email: 'jack.davis@example.com', username: 'jackdavis' },
  // Agrega más usuarios si es necesario
];

const data2 = [
  { id: '1', fullName: 'Bob Johnson', email: 'bob.johnson@example.com', username: 'bobjohnson' },
  { id: '2', fullName: 'Emily Brown', email: 'emily.brown@example.com', username: 'emilybrown' },
  { id: '3', fullName: 'Jack Davis', email: 'jack.davis@example.com', username: 'jackdavis' },
  { id: '1', fullName: 'John Doe', email: 'john.doe@example.com', username: 'johndoe' },
  { id: '2', fullName: 'Jane Smith', email: 'jane.smith@example.com', username: 'janesmith' },
  { id: '3', fullName: 'Alice Johnson', email: 'alice.johnson@example.com', username: 'alicejohnson' },
  { id: '1', fullName: 'Bob Johnson', email: 'bob.johnson@example.com', username: 'bobjohnson' },
  // Agrega más usuarios si es necesario
];

const UserList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.fullName}>{item.fullName}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.username}>{item.username}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Text style={styles.tableTitle}>Clientes</Text>
        <FlatList
          data={data1}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.table}>
        <Text style={styles.tableTitle}>Colaboradores</Text>
        <FlatList
          data={data2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEliminarRuta}>
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
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

export default UserList;
