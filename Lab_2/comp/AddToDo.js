import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddToDo = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const handleAdd = () => {
    if (title.length > 0) {
      onAdd(title, context);
      setTitle('');
      setContext('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Tiêu Đề</Text>
      <TextInput
        style={styles.input}
        placeholder="Thêm tiêu đề"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={[styles.title_text, { marginTop: 30 }]}>Nội Dung</Text>
      <TextInput
        style={styles.input}
        placeholder="Thêm nội dung"
        value={context}
        onChangeText={setContext}
      />
      <TouchableOpacity style={[styles.button]} onPress={handleAdd}>
        <Text style={[styles.button_text]}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    height: 50,
  },
  title_text: {
    color: "black",
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    height: 50,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  button_text: {
    color: 'white',
  },
});

export default AddToDo;
