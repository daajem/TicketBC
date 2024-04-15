import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Suponiendo que estás usando FontAwesome para el ícono

const HomeCliente = () => {
  const navigation = useNavigation();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleComprar = () => {
    navigation.navigate('Comprar');
  }

  const handleOpenProfileMenu = () => {
    setShowProfileMenu(true);
  }

  const handleCloseProfileMenu = () => {
    setShowProfileMenu(false);
  }

  const handleConsulta = () => {
    // navigation.navigate('PerfilCliente');
  }

  const handleReporte = () => {
    navigation.navigate('ReporteAccicentes');
  }

  const handleLogout = () => {
    // Aquí podrías agregar la lógica para cerrar sesión
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.containerMenu}>
        <Button title="Comprar" onPress={handleComprar}/>
        <Button title="Consulta" onPress={handleConsulta} />
        <Button title="Reporte" onPress={handleReporte} />
      </View>

      <View style={styles.containerPerfil}>
        <TouchableOpacity onPress={handleOpenProfileMenu}>
          <Icon name="user" size={30} color="blue" />
        </TouchableOpacity>
        {showProfileMenu && (
          <View style={styles.profileMenu}>
            
            <TouchableOpacity onPress={handleCloseProfileMenu}>
              <Text style={styles.menuItem}>Entrar al perfil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.menuItem}>Cerrar Sesión</Text>
            </TouchableOpacity>
            {/* Aquí podrías agregar más opciones de menú */}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPerfil: {
    position: 'absolute',
    top: 50,
    right: 25,
  },
  containerMenu: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  profileMenu: {
    position: 'absolute',
    top: 30,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default HomeCliente;
