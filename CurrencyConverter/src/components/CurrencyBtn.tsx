import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react';

type CurrencyProps = PropsWithChildren<{
    name: string;
    value: number;
    flag: string;
}>

const CurrencyBtn = (props : CurrencyProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#ffffff",
        marginBottom: 5
    },
    country: {
        fontSize: 14,
        color: "#2d3436"
    }
})

export default CurrencyBtn;