import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PurchaseScreen = () => {
  const [cashAmount, setCashAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const handleCashAmountChange = amount => {
    setCashAmount(amount);
  };

  const handleCardNumberChange = number => {
    setCardNumber(number);
  };

  const handleCardExpirationChange = expiration => {
    setCardExpiration(expiration);
  };

  const handleCardCVVChange = cvv => {
    setCardCVV(cvv);
  };

  const handlePurchase = () => {
    // Aquí iría la lógica para procesar la compra
    console.log('Compra procesada');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra</Text>
      <Text style={styles.label}>Monto en efectivo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el monto en efectivo"
        value={cashAmount}
        onChangeText={handleCashAmountChange}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Detalles de la tarjeta:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        value={cardNumber}
        onChangeText={handleCardNumberChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de vencimiento (MM/YY)"
        value={cardExpiration}
        onChangeText={handleCardExpirationChange}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cardCVV}
        onChangeText={handleCardCVVChange}
        keyboardType="numeric"
      />
      <Button title="Realizar Compra" onPress={handlePurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PurchaseScreen;
