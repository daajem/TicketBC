import React  from 'react';

import { View, StyleSheet } from 'react-native';

//ReporteAccidentes
//ReporteDiario, ReporteMensual, Rutas
//admin_menu, adminMenu
import MainStack from './navigation/MainStack';


const App = () => {
  return (
   <View style={styles.container}>

   <MainStack />
   
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App
