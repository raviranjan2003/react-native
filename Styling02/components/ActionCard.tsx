import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(webLink: string) {
    Linking.openURL(webLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.cardEle]}>
        <View style={styles.headingContainer}>
          <Text style={styles.header}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, corrupti.</Text>
        </View>
        <Image
        source={{
          uri: 'https://imgs.search.brave.com/b125XPj0IJ95T1gKRAHX5zA7hGyi7dJ96p0VKcYyGGY/'+
          'rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/'+
          'dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA'
        }}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2} style={styles.bodyText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Officia obcaecati nemo at odit distinctio tenetur, non maiores 
            eveniet esse, porro minima suscipit, pariatur amet culpa
             ducimus laboriosam soluta! Facere, blanditiis.
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => openWebsite('https://www.geeksforgeeks.org/what-is-react-fiber/')}>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {

  },
  card: {

  },
  cardEle: {

  },
  headingContainer: {

  },
  header: {

  },
  cardImage: {
    height: 180
  },
  bodyContainer: {
    paddingHorizontal: 5
  },
  bodyText: {

  },
  footer: {
    paddingHorizontal: 5,
    paddingBottom: 10
  },
  footerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  }
})