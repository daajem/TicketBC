import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ManageClientsScreen from './ManageClientsScreen'; // Importa el componente ManageClientsScreen aquí

const AdminMenu = () => {
    const [showManageClients, setShowManageClients] = useState(false);

    const handlePress = () => {
        setShowManageClients(true);
    };

    return (
        <View style={styles.container}>
            {showManageClients ? (
                <ManageClientsScreen />
            ) : (
                <TouchableOpacity
                    style={[styles.button, styles.clientButton]}
                    onPress={handlePress}
                >
                    
                <Text style={[styles.buttonText, { color: '#575757' }]}>Control de usuarios</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity style={[styles.button, styles.purchaseButton]}>
                
                <Text style={[styles.buttonText, { color: '#575757' }]}>Gestionar Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.salesButton]}>
                
                <Text style={[styles.buttonText, { color: '#575757' }]}>Registros de Ventas</Text>
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
    icon: {
        width: 60,
        height: 60,
    },
    clientButton: {
        backgroundColor: '#91F4FF', // Color azul para gestión de clientes
    },
    employeeButton: {
        backgroundColor: '#FFAA1F', // Color naranja oscuro para gestión de colaboradores
    },
    purchaseButton: {
        backgroundColor: '#25CA9A', // Color verdee para gestión de compras
    },
    salesButton: {
        backgroundColor: '#FF7F92', // Color rojo para registros de ventas
    },
});

export default AdminMenu;
