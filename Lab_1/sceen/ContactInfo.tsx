import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Block from '../comp/Block';
import CustomInput from '../comp/CustomInput';
import CustomButton from '../comp/CustomButton';
import { ThemeContext } from '../comp/Theme/ThemeContext'; // Đường dẫn đúng đến ThemeContext
import { lightTheme, darkTheme } from '../comp/Theme/Themes';

const ContactInfo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Block title="Thông Tin liên hệ" content="Nơi nhập thông tin liên hệ" style={styles.backgroundBlock} />
      <CustomInput title_text="Họ và Tên" plactholder_text="Nhập họ và tên" style={styles.input} />
      <CustomInput title_text="Mã Sinh Viên" plactholder_text="Nhập mã sinh viên" style={styles.input} />
      <CustomInput title_text="Email" plactholder_text="Nhập email sinh viên" style={styles.input} />
      <CustomInput title_text="Số điện thoại" plactholder_text="Nhập số điện thoại" style={styles.input} />
      <CustomButton title="Xác Nhận" onPress={undefined} style={styles.button} />
      <CustomButton title="Chuyển Đổi Theme" onPress={toggleTheme} style={styles.button} />
    </ScrollView>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
 
  },
  backgroundBlock: {
    backgroundColor: "#30C7FF",
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
    backgroundColor: '#30C7FF',
    borderRadius: 5,
    alignItems: 'center',
  },
});
