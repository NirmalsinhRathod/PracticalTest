
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as ATOMS from '../../components/atoms';
import { logout } from '../../store/Auth/actions';
import * as COLOR from '../../constants/colors';
import styles from './style';


class User extends Component {
    constructor(props) {
        super(props);
        this.fncDoLogout = this.fncDoLogout.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userData !== this.props.userData) {
            // Your data is ready to use. 
            // You can put your custom login if you want to some logic.
        }
    }

    fncDoLogout() {
        this.props.logout()
    }
    renderUserInfo() {
        let user = this.props.userData
        return (
            <View style={{ marginBottom: 30 }}>
                <Text>Name: {user.firstName} {user.lastName}</Text>
                <Text>Email: {user.email}</Text>
            </View>
        )
    }
    render() {
        let user = this.props.userData
        return (
            <View style={styles.container}>
                {
                    user.firstName && this.renderUserInfo()
                }

                <ATOMS.Button
                    title={'Logout'}
                    bgColor={COLOR.TAB_SELECTED}
                    txtColor={'white'}
                    onPress={this.fncDoLogout}
                />
                <ATOMS.Loader
                    isLoading={this.props.loading}
                />
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

export default connect(mapStateToProps, { logout })(User)
