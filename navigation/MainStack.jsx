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
  RegisterColaborador, 
  GuardarReporteDiario,
  ListaReporteDiario, 
  ShowReporteDiario,
  GuardarReporteMensual,
  ListaReporteMensual,
  ShowReporteMensual, 
  ConsultaRuta,
  RegistrarRuta,
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

      <Stack.Navigator initialRouteName="Administrador">

        
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Login Administrador" component={ColaboradorLogin} />
        

        {/* Administracion */}
        {/* Homes */}
        <Stack.Screen name="Administrador" component={HomeAdmin} />
        <Stack.Screen name="Reportes" component={HomeReportes} />
        <Stack.Screen name="Usuarios" component={HomeUsuarios} />

        <Stack.Screen name="ListaCliente" component={ListaCliente} />
        <Stack.Screen name="ListaColaboradores" component={ListaColaboradores} />
        <Stack.Screen name="RegistrarColaborador" component={RegisterColaborador} />

        {/* Accidentes */}
        <Stack.Screen name="Consultar Accidentes" component={ListaAccidentes} />
        <Stack.Screen name="Detalles Accidentes" component={ShowAccidentes} />
        
        {/* ReporteDiario */}
        <Stack.Screen name="Registar Reporte Diario" component={GuardarReporteDiario} />
        <Stack.Screen name="Reporte Diario" component={ListaReporteDiario} />
        <Stack.Screen name="Detalles Reporte Diario" component={ShowReporteDiario} />

        {/* ReporteMensual */}
        <Stack.Screen name="Registar Reporte Mensual" component={GuardarReporteMensual} />
        <Stack.Screen name="Reporte Mensual" component={ListaReporteMensual} />
        <Stack.Screen name="Detalles Reporte Mensual" component={ShowReporteMensual}/>


        
        <Stack.Screen name="ConsultaRuta" component={ConsultaRuta} />
        <Stack.Screen name="RegistrarRuta" component={RegistrarRuta} />

        {/* Cliente */}
        <Stack.Screen name="Cliente" component={HomeCliente} />
        <Stack.Screen name="Perfil" component={ProfileCliente} />
        <Stack.Screen name="Comprar" component={PurchaseCliente} />
        <Stack.Screen name="Registrar" component={RegisterCliente} />
        <Stack.Screen name="Registrar Accidente" component={GuardarAccidente} />
        
        {/* Colaborador */}

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MainStack;