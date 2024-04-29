import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';

import appFirebase from '../../../firebaseFirestore';
import { getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoct} from 'firebase/firestore';
const db = getFirestore(appFirebase);

const ShowAccidentes = (props) => {
  const [accidente, setAccidente] = useState({});

  const getOneReporte = async (id) => {
      try {
          const docRef = doc(db, 'accidentes', id);
          const docSnap = await getDoc(docRef);
          setAccidente(docSnap.data());
      } catch (error) {
          console.error(error);
      }
  };

  useEffect(() => {
      getOneReporte(props.route.params.fechaID);
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fecha:</Text>
      <Text style={styles.text}>{accidente.fecha}</Text>
  
      <Text style={styles.label}>Nombre del chofer:</Text>
      <Text style={styles.text}>{accidente.chofer}</Text>
  
      <Text style={styles.label}>Unidad:</Text>
      <Text style={styles.text}>{accidente.unidad}</Text>
  
      <Text style={styles.label}>Ruta:</Text>
      <Text style={styles.text}>{accidente.ruta}</Text>
  
      <Text style={styles.label}>Zona del accidente:</Text>
      <Text style={styles.text}>{accidente.zona}</Text>
    </View>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    text: {
      marginBottom: 10,
    },
  });
  
export default ShowAccidentes