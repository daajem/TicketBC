import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Suponiendo que estás usando FontAwesome para el ícono

const HomeCliente = () => {
  const navigation = useNavigation();
  
  const handlePerfilCliente = () => {
    navigation.navigate('Perfil');

  }
  const handlePress = (buttonName) => {
      
      switch (buttonName) {

      case 'Boton 1':
        navigation.navigate('Comprar');
        break;
      
      case 'Boton 2':
        navigation.navigate('Consultar QR');
      break;

      case 'Boton 3':
          navigation.navigate('Registrar Accidente');
      break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.profileIcon} onPress={handlePerfilCliente}>
        <Icon name="user" size={24} color="#001BFF" />
      </TouchableOpacity>

      <View style={styles.button}>
        <Button
          title="Comprar"
          onPress={() => handlePress('Boton 1')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Consultar QR"
          onPress={() => handlePress('Boton 2')}
          
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Registrar Accidente"
          onPress={() => handlePress('Boton 3')}
          
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
  profileIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 999,
  },
  button: {
    marginVertical: 10,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#8B4513', // Color café
  },
});



export default HomeCliente;
