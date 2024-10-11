/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import { currencyByRupee } from './constant';
import CurrencyBtn from './components/CurrencyBtn';
import Snackbar from 'react-native-snackbar';



function App(): React.JSX.Element {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [target, setTarget] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if(!input) {
      return Snackbar.show({
        text: "Enter some value to conver",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    }
    
    const inputAmt = parseFloat(input);
    if(!isNaN(inputAmt)) {
      const convertedValue = inputAmt * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResult(result);
      setTarget(targetValue.name)
    }else {
      return Snackbar.show({
        text: "Not a valid number to convert !",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }

  }
  return (
    <>
      <StatusBar />
      {/* <CurrencyBtn name="India" value = {12} flag= "EU"/> */}
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>Rs</Text>
            <TextInput 
              maxLength={14}
              value={input}
              onChangeText={setInput}
              keyboardType='number-pad'
              placeholder='Enter amount in Rupees'
            />
          </View>
          {result && (
            <Text style={styles.resultTxt}>{result}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable 
              style={[
                styles.button,
                target === item.name && styles.selected
              ]}
              onPress={() => buttonPressed(item)}
              >
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
