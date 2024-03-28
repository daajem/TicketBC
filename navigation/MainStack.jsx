import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainMenu from '../screens/MainMenu';

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
  ConsultaAccidentes} from '../screens/Administrador';

  import { HomeCliente, 
    LoginCliente, 
    ProfileCliente, 
    PurchaseCliente, 
    RegisterCliente,
    ReporteAccidentes } from '../screens/Cliente';
    

const Stack = createStackNavigator();
const MainStack = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Principal">

        <Stack.Screen name="Principal" component={MainMenu} />

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
        <Stack.Screen name="LoginCliente" component={LoginCliente} />
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