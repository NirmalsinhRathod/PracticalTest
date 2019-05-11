import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './style';

class TextField extends React.Component {
    render() {
        const { value, placeholder, onChangeText, style, maxLength } = this.props;
        let keyboardType = this.props.keyboardType ? this.props.keyboardType : 'default'
        let length = maxLength ? maxLength : 60
        return (
            <View style={[style, styles.extraPadding]}>
                {
                    value !== '' && <Text style={styles.placeHolder}>{placeholder}</Text>
                }
                <TextInput
                    maxLength={length}
                    keyboardType={keyboardType}
                    secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
                    style={{ height: 45 }}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => {
                        onChangeText(text.trim())
                    }}
                    value={value}
                    placeholder={placeholder}
                />
            </View>
        );
    }

}
export default TextField;