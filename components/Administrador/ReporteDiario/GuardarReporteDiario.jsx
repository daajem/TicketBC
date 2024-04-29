import React, { useState } from 'react';
import { View, Button, ScrollView, StyleSheet, TextInput, Alert } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);


const GuardarReporteDiario = (props) => {

    const initialState = {
        fecha: "",
        totalTickets: "",
        totalAmount: "",
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value, field) => {
        setState({ ...state, [field]: value });
    };

    const saveReporteDiario = async () => {
        try {
            await addDoc(collection(db, 'reportediario'), {
                ...state
            });
            Alert.alert('Guardado con Éxito');
            props.navigation.navigate('DetallesReporte');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Fecha"
                    onChangeText={(value) => handleChangeText(value, 'fecha')}
                    value={state.fecha}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Total de Tickets"
                    onChangeText={(value) => handleChangeText(value, 'totalTickets')}
                    value={state.totalTickets}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Dinero total por los tickets"
                    onChangeText={(value) => handleChangeText(value, 'totalAmount')}
                    value={state.totalAmount}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Guardar" onPress={saveReporteDiario} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default GuardarReporteDiario;
