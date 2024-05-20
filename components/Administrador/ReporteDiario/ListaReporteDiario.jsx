import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const ListaReporteDiario = (props) => {

  const [ lista, setLista ] = useState([])

  useEffect(() => {
    const getLista = async() => {
      try{
        const querySnapshot = await getDocs(collection(db, 'reportediario'))
        const docs = []
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const { fecha, totalTickets, totalAmount } = data;
          docs.push({
            id: doc.id,
            fecha,
            totalTickets,
            totalAmount,
          });
        });
        setLista(docs);
      }catch (error){
        console.error(error);
      }
    }
    getLista();
  },[lista])

  return (
    <ScrollView style={styles.container}>
      <Button onPress={()=>props.navigation.navigate('Registar Reporte Diario')} title="Registrar Reporte"/>

      <View style={styles.listaContainer}>
        {lista.map((list) => (
        <TouchableOpacity key={list.id} onPress={()=> props.navigation.navigate('Detalles Reporte Diario', {fechaID:list.id})}> 
          <Text style={styles.fechaText}>{list.fecha}</Text>
        </TouchableOpacity>
      ))}
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
  listaContainer: {
    marginTop: 20,
  },
  fechaText: {
    fontSize: 16,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
});

export default ListaReporteDiario;
