import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainMenu = () => {

  const navigation = useNavigation();
  
  const handleButtonPress = (buttonName) => {
    switch (buttonName) {

      case 'Boton 1':
        //navigation.navigate('Menu Admin');
        break;
      
      case 'Boton 2':
        navigation.navigate('LoginCliente');
      break;

      case 'Boton 3':
        navigation.navigate('Administrador');
      break;

      default:
        break;
    }
  };

  return (
    
    <View style={styles.container}>
  
      <View style={styles.button}>
        <Button
          title="Colaborador"
          onPress={() => handleButtonPress('Boton 1')}
          color="#8B4513" // Color café
        />
      </View>

      <View style={styles.button}>
      <Button
          title="Cliente"
          onPress={() => handleButtonPress('Boton 2')}
          color="#8B4513" // Color café
        />
      </View>

      <View style={styles.button}>
      <Button
          title="Administrador"
          onPress={() => handleButtonPress('Boton 3')}
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
  button: {
    marginBottom: 50, // Agrega espacio entre los botones
    borderRadius: 50, //Redondea los botones
    width: 200,
  },
  image: {
    width: 250, // Ajusta el ancho de la imagen según sea necesario
    height: 250, // Ajusta la altura de la imagen según sea necesario
    marginBottom: 20, // Ajusta la distancia entre la imagen y los botones
    marginLeft: 10,
  },
});

export default MainMenu;
