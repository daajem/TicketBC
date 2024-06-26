import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import ColaboradorLogin from '../screens/ColaboradorLogin';


import { HomeAdmin, 
  HomeReportes, 
  HomeUsuarios,

  ListaColaboradores, 
  ListaCliente,

  GuardarReporteDiario,
  ListaReporteDiario, 
  ShowReporteDiario,

  GuardarReporteMensual,
  ListaReporteMensual,
  ShowReporteMensual,

  GuardarRuta,
  ListaRuta,
  ShowRuta,

  ListaAccidentes,
  ShowAccidentes, } from '../components/Administrador';

  import { HomeCliente,  
    ProfileCliente, 
    PurchaseCliente, 
    RegisterCliente,
    GuardarAccidente } from '../components/Cliente';

    
const Stack = createStackNavigator();
const MainStack = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Login Administrador" component={ColaboradorLogin} />
        

        {/* Administracion */}
        {/* Homes */}
        <Stack.Screen name="Administrador" component={HomeAdmin} />
        <Stack.Screen name="Reportes" component={HomeReportes} />
        <Stack.Screen name="Usuarios" component={HomeUsuarios} />

        {/* Usuarios */}
        <Stack.Screen name="ListaCliente" component={ListaCliente} />
        <Stack.Screen name="ListaColaboradores" component={ListaColaboradores} />
  

        {/* Accidentes */}
        <Stack.Screen name="Accidentes" component={ListaAccidentes} />
        <Stack.Screen name="Detalles Accidentes" component={ShowAccidentes} />
        
        {/* ReporteDiario */}
        <Stack.Screen name="Registar Reporte Diario" component={GuardarReporteDiario} />
        <Stack.Screen name="Reporte Diario" component={ListaReporteDiario} />
        <Stack.Screen name="Detalles Reporte Diario" component={ShowReporteDiario} />

        {/* ReporteMensual */}
        <Stack.Screen name="Registrar Reporte Mensual" component={GuardarReporteMensual} />
        <Stack.Screen name="Reporte Mensual" component={ListaReporteMensual} />
        <Stack.Screen name="Detalles Reporte Mensual" component={ShowReporteMensual}/>

        {/* Rutas */}
        <Stack.Screen name="Registrar Ruta" component={GuardarRuta} />
        <Stack.Screen name="Rutas" component={ListaRuta} />
        <Stack.Screen name="Detalles Ruta" component={ShowRuta} />

        {/* Cliente */}
        <Stack.Screen name="Cliente" component={HomeCliente} />
        <Stack.Screen name="Perfil" component={ProfileCliente} />
        <Stack.Screen name="Comprar" component={PurchaseCliente} />
        <Stack.Screen name="Registrar" component={RegisterCliente} />
        <Stack.Screen name="Registrar Accidente" component={GuardarAccidente} />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MainStack;