import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native'; // Importa el componente ManageClientsScreen aquí
import { useNavigation } from '@react-navigation/native';

const AdminMenu = () => {
    const navigation = useNavigation();
    const handlePress = (buttonName) => {
        
        switch (buttonName) {

        case 'Boton 1':
          navigation.navigate('Usuarios');
        break;
        
        case 'Boton 2':
          navigation.navigate('Accidentes');
        break;
  
        case 'Boton 3':
            navigation.navigate('Rutas');
        break;

        case 'Boton 4':
            navigation.navigate('Reportes');
        break;
  
        default:
          break;
      }
    };
        
    return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Menú</Text>

        <View style={styles.button}>
            <Button 
            title="Usuarios"
            onPress={() => handlePress('Boton 1')}
            color="#8B4513" // Color café
            />
        </View>

        <View style={styles.button}>
            <Button 
            title="Accidentes"
            onPress={() => handlePress('Boton 2')}
            color="#8B4513" // Color café
            />
        </View>

        <View style={styles.button}>
            <Button 
            title="Rutas"
            onPress={() => handlePress('Boton 3')}
            color="#8B4513" // Color café
            />
        </View>

        <View style={styles.button}>
            <Button 
            title="Reportes"
            onPress={() => handlePress('Boton 4')}
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
      marginBottom: 10, // Agrega espacio entre los botones
      borderRadius: 50, //Redondea los botones
      width: 150,
    },

  });

export default AdminMenu;
