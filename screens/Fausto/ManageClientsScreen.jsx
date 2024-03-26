import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ListaUsuarios from './ListaUsuarios'; // Importa el componente ListaUsuarios aquí

const ManageClientsScreen = () => {
    const [showManageClients, setShowManageClients] = useState(false);

    const handlePress = () => {
        setShowManageClients(true);
    };

    return (
        <View style={styles.container}>
            {showManageClients ? (
                <ListaUsuarios />
            ) : (
                <TouchableOpacity
                    style={[styles.button, styles.clientButton]}
                    onPress={handlePress}
                >
                        
                        <Text style={[styles.buttonText, { color: '#575757' }]}>Gestionar usuarios</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity style={[styles.button, styles.employeeButton]}>
                
                <Text style={[styles.buttonText, { color: '#575757' }]}>Gestionar colaboradores</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFC97', // Fondo amarillo
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    clientButton: {
        backgroundColor: '#91F4FF', // Color azul para gestión de clientes
    },
    employeeButton: {
        backgroundColor: '#FFAA1F', // Color naranja oscuro para gestión de colaboradores
    },
});

export default ManageClientsScreen;
