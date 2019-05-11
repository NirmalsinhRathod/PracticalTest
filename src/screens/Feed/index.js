
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as ATOMS from '../../components/atoms';
import { logout } from '../../store/Auth/actions';
import * as COLOR from '../../constants/colors';
import styles from './style';


class Feed extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Feed</Text>
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

export default connect(mapStateToProps, null)(Feed)
