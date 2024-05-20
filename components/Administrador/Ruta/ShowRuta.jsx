import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const ShowRuta = (props) => {
    const [rutaR, setRutaR] = useState({});

    const getOneReporte = async (id) => {
        try {
            const docRef = doc(db, 'ruta', id);
            const docSnap = await getDoc(docRef);
            setRutaR(docSnap.data());
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getOneReporte(props.route.params.rutaID);
    }, []);

    const deleteRuta = async (id) => {
        try {
            await deleteDoc(doc(db, 'ruta', id));
            Alert.alert('Ruta eliminada con éxito');
            props.navigation.navigate('Rutas');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Punto Inicial: {rutaR.puntoInicio}</Text>
            <Text style={styles.text}>Destino: {rutaR.puntoFinal}</Text>
            <Text style={styles.text}>Tiempo estimado: {rutaR.tiempoEstimado}</Text>
            <TouchableOpacity style={styles.button} onPress={() => deleteRuta(props.route.params.rutaID)}>
                <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ShowRuta;