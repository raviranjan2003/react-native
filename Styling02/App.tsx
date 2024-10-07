import React from 'react';
import { 
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCards></FlatCards>
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;