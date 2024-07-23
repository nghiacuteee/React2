import { View, Text, StyleProp, TextStyle, Platform } from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';
import { Weight } from 'iconsax-react-native';

interface Props {
    text: string;
    font?: string;
    size?: number;
    styles?: StyleProp<TextStyle>;
    color?: string;

    height?: number;
    flex?: number;
}

const TitleComponent = (props: Props) => {
    const { text, font, size, color, styles, height, flex } = props;
    const weight: any =
        Platform.OS === 'ios'
            ? font
                ? {
                    fontWeight: font ,
                }
                :{
                    fontWeight:fontFamilies.semiBold
                }:{

                }; 
                
    return (
        <TextComponent
            size={size ?? 20}
            font={font ?? fontFamilies.semiBold}
            styles={[
                globalStyles.text,
                weight, {
                    fontFamily: font ?? fontFamilies.bold,
                    fontSize: size ?? 16,
                    lineHeight: height ? height : size ? size + 4 : 20,
                    flex: flex ?? 0,
                },
                styles,
            ]}
            color={color}
            text={text}

        />
    );
};

export default TitleComponent;