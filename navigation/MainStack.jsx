import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainMenu from '../screens/MainMenu';
import LoginScreen from '../screens/LoginScreen';
import ColaboradorLogin from '../screens/ColaboradorLogin';


import { HomeAdmin, 
  HomeReportes, 
  HomeUsuarios, 
  ListaColaboradores, 
  ListaCliente, 
  RegisterColaborador, 
  ReporteDiario, 
  ReporteMensual, 
  ConsultaRuta,
  RegistrarRuta,
  ConsultaAccidentes} from '../components/Administrador';

  import { HomeCliente,  
    ProfileCliente, 
    PurchaseCliente, 
    RegisterCliente,
    ReporteAccidentes } from '../components/Cliente';

    
const Stack = createStackNavigator();
const MainStack = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Principal" component={MainMenu} />
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Login Administrador" component={ColaboradorLogin} />
        

        {/* Administracion */}
        <Stack.Screen name="Administrador" component={HomeAdmin} />
        <Stack.Screen name="ReporteMenu" component={HomeReportes} />
        <Stack.Screen name="UsuariosMenu" component={HomeUsuarios} />
        <Stack.Screen name="ListaCliente" component={ListaCliente} />
        <Stack.Screen name="ListaColaboradores" component={ListaColaboradores} />
        <Stack.Screen name="RegistrarColaborador" component={RegisterColaborador} />
        <Stack.Screen name="ConsultaAccidentes" component={ConsultaAccidentes} />
        <Stack.Screen name="ReporteDiario" component={ReporteDiario} />
        <Stack.Screen name="ReporteMensual" component={ReporteMensual} />
        <Stack.Screen name="ConsultaRuta" component={ConsultaRuta} />
        <Stack.Screen name="RegistrarRuta" component={RegistrarRuta} />

        {/* Cliente */}
        <Stack.Screen name="Cliente" component={HomeCliente} />
        <Stack.Screen name="Perfil" component={ProfileCliente} />
        <Stack.Screen name="Comprar" component={PurchaseCliente} />
        <Stack.Screen name="Registrar" component={RegisterCliente} />
        <Stack.Screen name="ReporteAccicentes" component={ReporteAccidentes} />
        
        {/* Colaborador */}

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MainStack;