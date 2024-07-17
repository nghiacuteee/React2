import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Block from '../comp/Block';
import CustomInput from '../comp/CustomInput';
import CustomButton from '../comp/CustomButton';
import { ThemeContext } from '../comp/Theme/ThemeContext'; // Đường dẫn đúng đến ThemeContext
import { lightTheme, darkTheme } from '../comp/Theme/Themes';

const CourseInformation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Block title="Thông Tin khóa học" content="Nơi nhập thông tin khóa học" style={styles.backgroundBlock} />
      <CustomInput title_text="Lớp" plactholder_text="Nhập mã lớp" style={styles.input} />
      <CustomInput title_text="Giờ Học" plactholder_text="Nhập giờ học bạn muốn" style={styles.input} />
      <CustomInput title_text="Nguyện Vọng" plactholder_text="Nhập nguyện vọng bạn muốn" style={styles.input} />
      <CustomInput title_text="Giảng Viên" plactholder_text="Nhập mã giảng viên bạn muốn học" style={styles.input} />
      <CustomButton title="Xác Nhận" onPress={undefined} style={styles.button} />
      <CustomButton title="Chuyển Đổi Theme" onPress={toggleTheme} style={styles.button} />
    </ScrollView>
  );
};

export default CourseInformation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,

  },
  backgroundBlock: {
    backgroundColor: "#FF6C37",
    padding: 16,
    marginVertical: 8,
    width: '100%',
    borderRadius: 5,
  },
  input: {
    width: '100%',
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#FF6C37',
    borderRadius: 5,
    alignItems: 'center',
  },
});
