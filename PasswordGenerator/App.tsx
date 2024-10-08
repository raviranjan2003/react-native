import React, { useState } from 'react';

import {View, Text} from 'react-native';
import * as Yup from 'yup';

const App = () => {
  const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .required('Password required !')
      .min(6, 'Password length min of 4')
      .max(16, 'Password length max of 16'),
  });

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charList = '';

    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChar = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+";

    if(isUpperCase) {
      charList += upperChar;
    }
    if(isLowerCase) {
      charList += lowerChar;
    }
    if(isNumber) {
      charList += numbers;
    }
    if(isSymbol) {
      charList += symbols;
    }

    const passwordResult = createPassword(charList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for(let i=0; i<passwordLength; i++) {
      const charInd = Math.round(Math.random() * characters.length);
      result += characters.charAt(charInd);
    }
    return result;
  }

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setIsLowerCase(false);
    setIsUpperCase(false);
    setIsNumber(false);
    setIsSymbol(false);
  }

  return (
    <View>
      <Text>Password Generator</Text>
    </View>
  );
};
export default App;
