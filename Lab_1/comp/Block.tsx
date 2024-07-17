import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block = ({ title, content, style }) => {
  return (
   <View style={[styles.block, style]}>
     <Text style={styles.blockTitle}>{title}</Text>
     <Text>{content}</Text>
   </View>
  )
}

export default Block

const styles = StyleSheet.create({
    block: {
    backgroundColor: '#FFCA22',
        marginBottom:10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
      },
      blockTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        
      },
})