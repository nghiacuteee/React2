import { StyleSheet, View, ScrollView, Image } from 'react-native';
import React, { useContext } from 'react';
import Block from '../comp/Block';
import Banner from '../comp/Banner';
import CustomInput from '../comp/CustomInput';
import CustomButton from '../comp/CustomButton';
import { ThemeContext } from '../comp/Theme/ThemeContext'; // Đường dẫn đúng đến ThemeContext
import { lightTheme, darkTheme } from '../comp/Theme/Themes';

const PersonalInformation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Block title="Thông Tin Cá Nhân" content="Nơi nhập thông tin cá nhân" style={undefined} />
      <Image
        source={{ uri: 'https://d3design.vn/uploads/Anh_bia_summer_sale_holiday_podium_display_on_yellow_background.jpg' }}
        style={styles.banner}
      />
      <CustomInput title_text="Họ và Tên" plactholder_text="Nhập họ và tên" style={[styles.input, { backgroundColor: currentTheme.inputBackground }]} />
      <CustomInput title_text="Lớp" plactholder_text="Nhập mã lớp" style={[styles.input, { backgroundColor: currentTheme.inputBackground }]} />
      <CustomButton title="Xác Nhận" onPress={undefined} style={styles.button} />
      <CustomButton title="Chuyển Đổi Theme" onPress={toggleTheme} style={styles.button} />
    </ScrollView>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
 
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    marginVertical: 8,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    
   
    padding: 10,
    borderRadius: 5,
  },
});
