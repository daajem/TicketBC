import React, { useState } from 'react';
import { View, Button, ScrollView, StyleSheet, TextInput, Alert } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const GuardarRuta = (props) => {

    const initialState = {
        puntoInicio: "",
        puntoFinal: "",
        tiempoEstimado: "",
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value, field) => {
        setState({ ...state, [field]: value });
    };

    const saveRuta = async () => {
        try {
            await addDoc(collection(db, 'ruta'), {
                ...state
            });
            Alert.alert('Guardado con Éxito');
            props.navigation.navigate('Rutas');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Punto inicial de la ruta"
                    onChangeText={(value) => handleChangeText(value, 'puntoInicio')}
                    value={state.puntoInicio}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Destino de la ruta"
                    onChangeText={(value) => handleChangeText(value, 'puntoFinal')}
                    value={state.puntoFinal}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Tiempo estimado para llegar al destino"
                    onChangeText={(value) => handleChangeText(value, 'tiempoEstimado')}
                    value={state.tiempoEstimado}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Guardar" onPress={saveRuta} />
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

export default GuardarRuta;
