
import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
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
            <View style={styles.info}>
                <Text>Hello {user.email}</Text>
                <Text>This is a dashboard</Text>
            </View>
        )
    }
    render() {
        let user = this.props.userData
        return (
            <View style={styles.container}>
                {user.firstName && this.renderUserInfo()}

                <ATOMS.Loader isLoading={this.props.loading} />

                <ATOMS.LogoutButton
                    moreStyle={{ position: 'absolute', top: 50, right: 20 }}
                    onPress={this.fncDoLogout}
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
