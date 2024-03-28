import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://via.placeholder.com/150'}}
        />
      </View>
      <View style={styles.profile}>
        <Text style={styles.label}>Nombre:</Text> 
        <Text style={styles.value}>John</Text>
        <Text style={styles.label}>Apellido:</Text>
        <Text style={styles.value}>Doe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150,
   
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 350,
    height: 350,
    borderRadius: 75,
  },
  profile: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 50,
    borderRadius: 10,
  },
  label: {
    fontSize: 25,
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
    marginBottom: 10,
  },
});
