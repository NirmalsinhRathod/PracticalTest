import React from 'react';
import { View, Keyboard, } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../store/Auth/actions';
import * as ATOMS from '../../components/atoms';
import * as MSG from '../../constants/message';
import * as VALIDATE from '../../constants/validation';
import * as CONSTANT from '../../constants/constant';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const className = 'Login'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.fncDoLogin = this.fncDoLogin.bind(this)
        this.fncIsValidate = this.fncIsValidate.bind(this)
        this.clearState = this.clearState.bind(this)
    };

    componentWillMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userData !== this.props.userData) {
            if (this.props.loading === false && this.props.isSuccess) {
                this.clearState()
            }
        }
    }

    // Clear state
    clearState() {
        this.setState({
            email: '',
            password: ''
        })
    }

    // This function will use to check the validation for email and password
    // If any of below condition will failed then alert will prompt and return with false

    fncIsValidate() {
        let isValidate = false
        let messageText = ''
        if (VALIDATE.isBlank(this.state.email)) {
            messageText = MSG.ER_ENTER_EMAIL
        } else if (!VALIDATE.isValidEmail(this.state.email)) {
            messageText = MSG.ER_VALID_EMAIL
        } else if (VALIDATE.isBlank(this.state.password)) {
            messageText = MSG.ER_ENTER_PASS
        } else if (!VALIDATE.isValidPassword(this.state.password, CONSTANT.MIN_PASS_LENGHT)) {
            messageText = MSG.ER_PASS_MIN_LENGHT
        } else {
            isValidate = true
        }

        if (isValidate === false) {
            alert(messageText)
        }

        return isValidate
    }
    fncDoLogin() {
        Keyboard.dismiss()
        // Check if all the validation will true then process with login api.
        if (this.fncIsValidate()) {
            let loginRequest = {}
            loginRequest.email = this.state.email
            loginRequest.password = this.state.password
            this.props.login(loginRequest)
        }
    }


    renderSignUp() {
        return (
            <ATOMS.LinkButton
                title={'Don\'t have an account? '}
                clickableTitle={'SignUp'}
                onPress={() => {
                    this.props.navigation.navigate('SignUp')
                }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={styles.keyboardView}>
                    <ATOMS.TextField
                        value={this.state.email}
                        placeholder={MSG.PH_EMAIL}
                        keyboardType={'email-address'}
                        style={styles.textField}
                        onChangeText={(email) => {
                            this.setState({
                                email
                            })
                        }}
                    />

                    <ATOMS.TextField
                        maxLength={15}
                        value={this.state.password}
                        placeholder={MSG.PH_PASSWORD}
                        secureTextEntry={true}
                        style={styles.textField}
                        onChangeText={(password) => {
                            this.setState({
                                password
                            })
                        }}
                    />
                    <ATOMS.Button
                        title={'Login'}
                        onPress={this.fncDoLogin}
                    />

                    {this.renderSignUp()}
                </KeyboardAwareScrollView>
                <ATOMS.Loader
                    isLoading={this.props.loading}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { loading, userData, isSuccess } = state.auth
    return {
        loading,
        userData,
        isSuccess
    }
};

export default connect(mapStateToProps, { login })(Login)