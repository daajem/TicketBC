import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ControlUsers from '../Screens/ContolUsers';
import ListaUsuarios from './ListaUsuarios';
import ManageClientsScreen from './ManageClientsScreen';
import ReporteDiario from './reporteDiario';
import AdminMenu from './admin_menu';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Control de Usuarios"
                    component={ControlUsers}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Lista de Usuarios')}>
                                <Text style={styles.buttonText1}>Lista de Usuarios</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="Lista de Usuarios"
                    component={ListaUsuarios}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Administrar Clientes')}>
                                <Text style={styles.buttonText2}>Administrar Clientes</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="Administrar Clientes"
                    component={ManageClientsScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Reporte Diario')}>
                                <Text style={styles.buttonText3}>Reporte Diario</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="Reporte Diario"
                    component={ReporteDiario}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Menú de Administrador')}>
                                <Text style={styles.buttonText4}>Menú de Administrador</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="Menú de Administrador"
                    component={AdminMenu}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Control de Usuarios')}>
                                <Text style={styles.buttonText5}>Control de Usuarios</Text>
                            </TouchableOpacity>
                        )
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    buttonText1: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF5733', // Color naranja
    },
    buttonText2: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#33FF9C', // Color verde
    },
    buttonText3: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#33A6FF', // Color azul
    },
    buttonText4: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF33E6', // Color rosa
    },
    buttonText5: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFD233', // Color amarillo
    },
});

export default AppNavigator;
