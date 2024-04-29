import React, { useState } from 'react';
import { View, Button, ScrollView, StyleSheet, TextInput, Alert } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);


const GuardarReporteMensual = (props) => {

    const initialState = {
        month: "",
        totalTickets: "",
        totalAmount: "",
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value, field) => {
        setState({ ...state, [field]: value });
    };

    const saveReporteMensual = async () => {
        try {
            await addDoc(collection(db, 'reportemensual'), {
                ...state
            });
            Alert.alert('Guardado con Éxito');
            props.navigation.navigate('Reporte Mensual');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Mes"
                    onChangeText={(value) => handleChangeText(value, 'month')}
                    value={state.month}
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
                <Button title="Guardar" onPress={saveReporteMensual} />
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

export default GuardarReporteMensual;
