import React, {useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const ListaAccidentes = (props) => {
  const [ lista, setLista ] = useState([])
  
  useEffect(() => {
    const getLista = async() => {
      try{
        const querySnapshot = await getDocs(collection(db, 'accidentes'))
        const docs = []
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const { fecha, chofer, unidad, ruta, zona } = data;
            docs.push({
              id: doc.id,
              fecha,
              chofer,
              unidad,
              ruta,
              zona,
            });
          });
          setLista(docs);
        }catch (error){
          console.error(error);
        }
      }
      getLista();
    },[])



  return (
    <ScrollView style={styles.container}>
      <View style={styles.listaContainer}>
        {lista.map((list) => (
        <TouchableOpacity key={list.id} onPress={()=> props.navigation.navigate('Detalles Accidentes', {fechaID:list.id})}> 
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

export default ListaAccidentes;
