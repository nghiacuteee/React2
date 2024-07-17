import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CustomInput = ({title_text, plactholder_text}) => {
    const [text, setText] = useState("");
    const handleChangeText = (newText) =>{
        setText(newText);
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title_text}</Text>
        <TextInput 
        style ={styles.textInput}
        value={text}
        placeholder={plactholder_text}
        />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        margin:10,
    },
    title:{
        fontWeight:'bold',
        color:'black'
    },
    textInput:{
        borderBottomWidth:1,
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        fontSize:16,
        marginTop:10
    }

})