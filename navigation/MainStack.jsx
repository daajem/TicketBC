import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pantallas Cliente
import LoginScreen from '../screens/Cliente/LoginScreen';
import RegisterScreen from '../screens/Cliente/RegisterScreen';
import HomeCliente from '../screens/Cliente/HomeCliente';
import PurchaseScreen from '../screens/Cliente/PurchaseScreen';
import ProfileScreen from '../screens/Cliente/ProfileScreen';

//Pantallas Chris
import ListaUsuarios from '../screens/Chris/ListaUsuarios'
import MainMenu from '../screens/Chris/MainMenu'
import ManejoDatosColaborador from '../screens/Chris/ManejoDatosColaborador'
import Rutas from '../screens/Chris/Rutas'

//Pantallas Fausto
import AdminMenu from '../screens/Fausto/AdminMenu';
//import ControlUsers from '../screens/Fausto/ControlUsers';
//import ManageClientsScreen from '../screens/Fausto/ManageClientsScreen';


const Stack = createStackNavigator();

const MainStack = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Principal">


        <Stack.Screen name="Principal" component={MainMenu} />
        <Stack.Screen name="Listado de Usuarios" component={ListaUsuarios} />
        <Stack.Screen name="Administracion Coloborador" component={ManejoDatosColaborador} />
        <Stack.Screen name="Rutas" component={Rutas} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeCliente} />
        <Stack.Screen name="ComprarCliente" component={PurchaseScreen} />
        <Stack.Screen name="PerfilCliente" component={ProfileScreen} />

        <Stack.Screen name="Menu Admin" component={AdminMenu} />


      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MainStack;