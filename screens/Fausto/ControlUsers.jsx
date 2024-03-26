import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ListaUsuarios from './ListaUsuarios'; // Importa el componente UserList aquí

const ControlUsers = () => {
    const [showUserList, setShowUserList] = useState(false);

    const handlePress = () => {
        setShowUserList(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {showUserList ? (
                    <ListaUsuarios />
                ) : (
                    <TouchableOpacity
                        style={[styles.button, styles.clientButton]}
                        onPress={handlePress}
                    >
                            
                        <Text style={[styles.buttonText, { color: '#575757' }]}>Gestionar Clientes</Text>
                    </TouchableOpacity>
                )}
            </View>
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
    buttonContainer: {
        marginVertical: 10,
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
});

export default ControlUsers;
