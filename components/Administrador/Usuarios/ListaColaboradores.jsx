import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data1 = [
  { id: '1', fullName: 'John Doe', email: 'john.doe@example.com', fechaN: '12/03/1980', numT: '664-555-55-55', matricula: '89896' },
  { id: '2', fullName: 'Martin Flow', email: 'm.flow@example.com', fechaN: '22/10/1978', numT: '664-333-33-33', matricula: '12576' },
  // Agrega más usuarios si es necesario
];

const ListaColaboradores = () => {
  const navigation = useNavigation();
  
  const registrar = () => {
  navigation.navigate('RegistrarColaborador');

}
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={registrar}  style={styles.item}>

      <Text style={styles.fullName}>{item.fullName}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.fechaN}>{item.fechaN}</Text>
      <Text style={styles.numT}>{item.numT}</Text>
      <Text style={styles.matricula}>{item.matricula}</Text>

    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.tableTitle}>Colaboradores</Text>
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

export default ListaColaboradores;
