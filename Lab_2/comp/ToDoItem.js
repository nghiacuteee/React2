import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ToDoItem = ({ item, onToggle, onDelete, onEdit }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(item.id)}>
        <Icon name={item.completed ? 'check-square' : 'square-o'} size={24} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={[styles.title, item.completed && styles.completedText]}>Tiêu Đề : {item.title}</Text>
        <Text style={[styles.text, item.completed && styles.completedText]}>Nội Dung : {item.context}</Text>
      </View>
      <TouchableOpacity onPress={() => onEdit(item.id)} style={styles.editIconContainer}>
        <Icon name="edit" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteIconContainer}>
        <Icon name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15, // Increased padding for better spacing
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18, // Larger font size for title
    lineHeight: 24, // Increased line height for readability
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  completedText: {
    color: '#888', // Subdued color for completed tasks
    textDecorationLine: 'line-through',
  },
  editIconContainer: {
    padding: 5, // Optional padding for edit icon
  },
  deleteIconContainer: {
    padding: 5, // Optional padding for delete icon
  },
});
