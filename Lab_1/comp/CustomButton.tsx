import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress,style}) => {
  return (
    <View>
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
         </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
    backgroundColor: '#FFCA22', // Default button color
        padding: 15,
        borderRadius: 5,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center', // Center text vertically
        margin:15
      },
      buttonText: {
        color: 'black', // Default button text color
        fontSize: 16,
        fontWeight: 'regular',
      },
})