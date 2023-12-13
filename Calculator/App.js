import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplay(display + value);
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(display);
      if (calculatedResult === Infinity || calculatedResult === -Infinity || isNaN(calculatedResult)) {
        setResult('Error');
        setDisplay('');
      } else {
        setResult(calculatedResult.toString());
        setDisplay(calculatedResult.toString());
      }
    } catch (error) {
      setResult('Error');
      setDisplay('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handleButtonPress('0')}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('C')}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('=')}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingBottom: 20,
  },
  display: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  displayText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttons: {
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 8,
    width: '23%',
  },
  zeroButton: {
    width: '48%',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CalculatorApp;
