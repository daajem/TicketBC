import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const ListaRuta = (props) => {

  const [ lista, setLista ] = useState([])

  useEffect(() => {
    const getLista = async() => {
      try{
        const querySnapshot = await getDocs(collection(db, 'ruta'))
        const docs = []
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const { puntoInicio, puntoFinal, tiempoEstimado } = data;
          docs.push({
            id: doc.id,
            puntoInicio,
            puntoFinal,
            tiempoEstimado,
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
      <Button onPress={()=>props.navigation.navigate('Registrar Ruta')} title="Registrar Ruta"/>

      <View style={styles.listaContainer}>
        {lista.map((list) => (
        <TouchableOpacity key={list.id} onPress={()=> props.navigation.navigate('Detalles Ruta', {rutaID:list.id})}> 
          <Text style={styles.fechaText}>{list.puntoInicio} - {list.puntoFinal} </Text>
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

export default ListaRuta;
