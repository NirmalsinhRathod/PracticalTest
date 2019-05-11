import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

// This component will help to render button with title. 
class Button extends React.Component {
    render() {
        const { title, onPress, bgColor, txtColor } = this.props;

        return (
            <TouchableOpacity
                style={[styles.container, { backgroundColor: bgColor ? bgColor : 'white' }]}
                onPress={() => {
                    onPress()
                }}
            >
                <Text style={{ color: txtColor ? txtColor : 'black' }}>{title}</Text>
            </TouchableOpacity>
        );
    }
}
export default Button;