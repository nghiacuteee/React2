import React from 'react';
import { TouchableOpacity, StyleSheet, Text, StyleProp, TextStyle } from 'react-native';

// import Ionicons from '@react-native-vector-icons/ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../constants/colors';
export interface GenderButtonSelectProps {
    selected?: boolean;
    gender?: 'male' | 'female',
    onPress?: () => void;
}

const GenderButtonSelect: React.FC<GenderButtonSelectProps> = ({
    selected, gender = 'male', onPress
}) => {

    // Styles
    const selectedStyle: StyleProp<TextStyle> = {
        color: 'white'
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.container]}
            onPress={onPress}
        >
            {/* <AntDesign name="close" size={14} color={colors.text} /> */}
            {
                gender === 'male' ?
                    <Ionicons name="male-outline" size={55} color={selected ? 'white' : '#8E8E98'} />
                    :
                    <Ionicons name="female-outline" size={55} color={selected ? 'white' : '#8E8E98'} />
            }
            <Text style={[styles.label, selected && selectedStyle]}>
                {gender.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1D1F32",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flex: 1
    },

    label: {
        color: '#8E8E98',
        fontSize: 20,
        fontWeight: "600",
    }
})

export default GenderButtonSelect;