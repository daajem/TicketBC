import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const FormularioReportesSeguridad = () => {
    const [tipoReporte, setTipoReporte] = useState('Mensual');
    const [cantidadTickets, setCantidadTickets] = useState('');
    const [nombreColaborador, setNombreColaborador] = useState('');
    const [nombreRuta, setNombreRuta] = useState('');
    const [numeroTransporte, setNumeroTransporte] = useState('');
    const [fechaReporte, setFechaReporte] = useState('');
    const [monetizacion, setMonetizacion] = useState('');
    const [gastosGasolina, setGastosGasolina] = useState('');
    const [plazoJornada, setPlazoJornada] = useState('');

    const handleSubmit = () => {
        // Aquí puedes realizar el envío de los datos a tu backend o realizar cualquier otra acción con ellos
        console.log('Tipo de reporte:', tipoReporte);
        console.log('Cantidad de tickets:', cantidadTickets);
        console.log('Nombre de colaborador:', nombreColaborador);
        console.log('Nombre de ruta:', nombreRuta);
        console.log('Número de transporte:', numeroTransporte);
        console.log('Fecha de reporte:', fechaReporte);
        console.log('Monetización:', monetizacion);
        console.log('Gastos en gasolina:', gastosGasolina);
        console.log('Plazo de jornada:', plazoJornada);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Generación de reportes de seguridad</Text>
            <Image
                source={require('./icons/boleto.png')}
                style={styles.imagen}
            />
            <View style={styles.tipoReporte}>
                <Button title="Mensual" onPress={() => setTipoReporte('Mensual')} />
                <Button title="Semanal" onPress={() => setTipoReporte('Semanal')} />
                <Button title="Diario" onPress={() => setTipoReporte('Diario')} />
            </View>
            <Text style={styles.subtitulo}>Reporte {tipoReporte}</Text>
            <TextInput
                style={styles.input}
                value={cantidadTickets}
                onChangeText={setCantidadTickets}
                placeholder="Cantidad de Tickets vendidos"
            />
            <TextInput
                style={styles.input}
                value={nombreColaborador}
                onChangeText={setNombreColaborador}
                placeholder="Nombre colaborador"
            />
            <TextInput
                style={styles.input}
                value={nombreRuta}
                onChangeText={setNombreRuta}
                placeholder="Nombre de Ruta"
            />
            <TextInput
                style={styles.input}
                value={numeroTransporte}
                onChangeText={setNumeroTransporte}
                placeholder="No. Transporte"
            />
            <TextInput
                style={styles.input}
                value={fechaReporte}
                onChangeText={setFechaReporte}
                placeholder="Fecha de reporte"
            />
            <TextInput
                style={styles.input}
                value={monetizacion}
                onChangeText={setMonetizacion}
                placeholder="Monetización"
            />
            <TextInput
                style={styles.input}
                value={gastosGasolina}
                onChangeText={setGastosGasolina}
                placeholder="Gastos en gasolina"
            />
            <TextInput
                style={styles.input}
                value={plazoJornada}
                onChangeText={setPlazoJornada}
                placeholder="Plazo de jornada"
            />
            <Button title="Guardar" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    imagen: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    tipoReporte: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
});

export default FormularioReportesSeguridad;
