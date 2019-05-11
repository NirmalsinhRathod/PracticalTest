import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
// This will help you to render custom navigation bar. 
// Its defualt component for my structure. We can modify as per requirement
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
