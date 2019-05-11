
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../store/Auth/actions';
import styles from './style';


class Calendar extends Component {

    componentDidUpdate(prevProps, prevState) {
    }


    render() {
        return (
            <View style={styles.container}>
            <Text>Calendar</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { loading, userData } = state.auth
    return {
        loading,
        userData
    }
};

export default connect(mapStateToProps, { login })(Calendar)
