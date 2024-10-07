import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardEle]}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/'+
            'qTB-17h7GEuGMxRUBMH3GDpiJSq1bvnSioTsgGf6uUI/'+
            'rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/'+
            'dGNkbi5uZXQvanBn/LzA3Lzk2LzU3LzIx/LzM2MF9GXzc5NjU3/'+
            'MjE5Ml95VXlQTmx6/WkVGUXAyOVpYQkVt/MTg3Qlpqd3hWM1o3/OC5qcGc',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Title</Text>
            <Text style={styles.cardLabel}>Label</Text>
            <Text style={styles.cardDescription}>Description</Text>
            <Text style={styles.cardFooter}>Footer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card: {
      // width: 350,
      height: 300,
      borderRadius: 8,
      marginVertical: 12,
      marginHorizontal: 16,
    },
    cardEle: {
      backgroundColor: '#CAD5E2',
      elevation: 3
    },
    cardImage: {
      height: 180,
      // borderRadius: 6,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      marginBottom: 5
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 8

    },
    cardTitle: {
      color: '#000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 3
    },
    cardLabel: {

    },
    cardDescription: {

    },
    cardFooter: {

    }
});
