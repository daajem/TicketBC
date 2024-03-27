import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usersData from './usersData.json'; // Importa los datos JSON

const ListaUsuarios = () => {
  const navigation = useNavigation();

  const handleNavigateToControlUsers = () => {
    navigation.navigate('Control de Usuarios');
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.fullName}>{item.fullName}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.username}>{item.username}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToControlUsers} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Volver a Control de Usuarios</Text>
      </TouchableOpacity>
      <View style={styles.table}>
        <Text style={styles.tableTitle}>Clientes</Text>
        <FlatList
          data={usersData.clientes} // Utiliza los datos de clientes desde el archivo JSON
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.table}>
        <Text style={styles.tableTitle}>Colaboradores</Text>
        <FlatList
          data={usersData.colaboradores} // Utiliza los datos de colaboradores desde el archivo JSON
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

// Estilos omitidos por brevedad

export default ListaUsuarios;
