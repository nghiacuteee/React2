import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = ({ source }) => {
  return (
    <View style={styles.banner}>
      <Image source={source} style={styles.image} />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    banner: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 200,
      },
      image: {
        width: '100%',
        height: '100%',
      },
})