import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEle]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardEle]}>
            <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container: {

    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8
    },
    cardEle: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 3
    }
})