import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../../store/Auth/actions';

import styles from './style';
import * as IMAGE from '../../resources'
class Splash extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // Need to check if user is logged in or not.
        this.props.checkLogin()
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode={'contain'}
                    source={IMAGE.APP_LOGO}
                />
                <Text style={styles.text}>APP NAME</Text>
            </View>
        );
    }
}

export default connect(null, { checkLogin })(Splash)