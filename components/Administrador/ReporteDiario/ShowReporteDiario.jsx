import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const ShowReporteDiario = (props) => {
    const [reported, setReported] = useState({});

    const getOneReporte = async (id) => {
        try {
            const docRef = doc(db, 'reportediario', id);
            const docSnap = await getDoc(docRef);
            setReported(docSnap.data());
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getOneReporte(props.route.params.fechaID);
    }, []);

    const deleteReporte = async (id) => {
        try {
            await deleteDoc(doc(db, 'reportediario', id));
            Alert.alert('Reporte eliminado con éxito');
            props.navigation.navigate('Reporte Diario');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Fecha: {reported.fecha}</Text>
            <Text style={styles.text}>Total Tickets: {reported.totalTickets}</Text>
            <Text style={styles.text}>Total Dinero de Tickets: {reported.totalAmount}</Text>
            <TouchableOpacity style={styles.button} onPress={() => deleteReporte(props.route.params.fechaID)}>
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

export default ShowReporteDiario;