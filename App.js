import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState(0);  
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(num1 + num2);
  }
  const restar = () => {
    setResultado(num1 - num2);
  }
  const multiplicar = () => {
    setResultado(num1 * num2);
  }
  const dividir = () => {
    if (num2 !== 0) {
      setResultado(num1 / num2);
    } else {
      alert("No se puede dividir por cero");
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese primer número"
        keyboardType="numeric"
        onChangeText={(text) => setNum1(parseFloat(text) || 0)}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingrese segundo número"
        keyboardType="numeric"
        onChangeText={(text) => setNum2(parseFloat(text) || 0)}
      />

      <View style={styles.buttons}>
        <Button title="+" onPress={sumar} />
        <Button title="-" onPress={restar} />
        <Button title="×" onPress={multiplicar} />
        <Button title="÷" onPress={dividir} />
      </View>

      <Text style={styles.result}>Resultado: {resultado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3436',
  },
  input: {
    borderWidth: 1,
    borderColor: '#b2bec3',
    borderRadius: 8,
    width: '80%',
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0984e3',
  },
});