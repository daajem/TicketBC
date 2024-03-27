import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdminMenu = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Control de Usuarios');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.clientButton]}
                onPress={handlePress}
            >
                <Image source={require('../assets/bank.png')} style={styles.icon} />
                <Text style={[styles.buttonText, { color: '#575757' }]}>Control de usuarios</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.purchaseButton]}>
                <Image source={require('../assets/atm-machine.png')} style={styles.icon} />
                <Text style={[styles.buttonText, { color: '#575757' }]}>Gestionar Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.salesButton]}>
                <Image source={require('../assets/smartphone.png')} style={styles.icon} />
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
        marginVertical: 10,
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
