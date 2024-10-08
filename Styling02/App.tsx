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
import ContactCard from './components/ContactCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>App</Text> */}
        <FlatCards></FlatCards>
        <ElevatedCard />
        <FancyCard />
        <ContactCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;