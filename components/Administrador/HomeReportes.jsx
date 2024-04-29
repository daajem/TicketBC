import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeReportes = () => {
  const navigation = useNavigation();
  const handlePress = (buttonName) => {
      
      switch (buttonName) {

      case 'Boton 1':
        navigation.navigate('DetallesReporte');
        break;
      
      case 'Boton 2':
        navigation.navigate('ReporteMensual');
      break;

      default:
        break;
    }
  };
      

  return (
  <View style={styles.container}>

    <Text style={styles.title}>Menú de Reportes</Text>

      <View style={styles.button}>
          <Button 
          title="Reportes Diarios"
          onPress={() => handlePress('Boton 1')}
          color="#8B4513" // Color café
          />
      </View>

      <View style={styles.button}>
          <Button 
          title="Reportes Mensuales"
          onPress={() => handlePress('Boton 2')}
          color="#8B4513" // Color café
          />
      </View>
  
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 5,
    borderRadius: 50,
    marginBottom: 10,
    width: 150,
  },

});

export default HomeReportes;
