import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello Ravii !</Text>
        <Text>Hello Ravii !</Text>
        <Text>Hello Ravii !</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="Name me!"
        />
        <Button title={'Button'}/>
      </View>
    </SafeAreaView>
  )
}

export default App;