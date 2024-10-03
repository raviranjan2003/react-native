import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    }
})

export default FlatCards;