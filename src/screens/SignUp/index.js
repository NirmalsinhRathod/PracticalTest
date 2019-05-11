import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { signup } from '../../store/Auth/actions';
import * as ATOMS from '../../components/atoms';
import * as MSG from '../../constants/message';
import * as VALIDATE from '../../constants/validation';
import * as CONSTANT from '../../constants/constant';
import * as ALERT from '../../constants/alerts';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const className = 'SignUp'

class SignUp extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            picPath: '',
        };

        this.fncDoSignUP = this.fncDoSignUP.bind(this)
        this.renderBackButton = this.renderBackButton.bind(this)
        this.fncIsValidate = this.fncIsValidate.bind(this)
        this.clearState = this.clearState.bind(this)
    };

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userData !== this.props.userData) {
            if (this.props.loading === false && this.props.isSuccess) {

                setTimeout(() => {
                    this.clearState()
                    Alert.alert(
                        '',
                        ALERT.SIGNUP_SUCCESS,
                        [
                            {
                                text: 'OK', onPress: () => {
                                    this.props.navigation.goBack()
                                }
                            },
                        ],
                        { cancelable: false },
                    );
                }, 500);

            }
        }
    }

    clearState() {
        this.setState({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            picPath: '',
        })
    }
    // Check validation
    fncIsValidate() {
        let isValidate = false
        let messageText = ''
        if (VALIDATE.isBlank(this.state.picPath)) {
            messageText = MSG.ER_SELECTED_IMAGE
        } else if (VALIDATE.isBlank(this.state.firstName)) {
            messageText = MSG.ER_ENTER_FIRST_NAME
        } else if (VALIDATE.isBlank(this.state.lastName)) {
            messageText = MSG.ER_ENTER_LAST_NAME
        } else if (VALIDATE.isBlank(this.state.email)) {
            messageText = MSG.ER_ENTER_EMAIL
        } else if (!VALIDATE.isValidEmail(this.state.email)) {
            messageText = MSG.ER_VALID_EMAIL
        } else if (this.state.password === '') {
            messageText = MSG.ER_ENTER_PASS
        } else if (!VALIDATE.isValidPassword(this.state.password, CONSTANT.MIN_PASS_LENGHT)) {
            messageText = MSG.ER_PASS_MIN_LENGHT
        } else if (this.state.confirmPassword === '') {
            messageText = MSG.ER_ENTER_CONFIRM
        } else if (!VALIDATE.isValidPassword(this.state.confirmPassword, CONSTANT.MIN_PASS_LENGHT)) {
            messageText = MSG.ER_PASS_MIN_LENGHT
        } else if (!VALIDATE.isValidComparedPassword(this.state.password, this.state.confirmPassword)) {
            messageText = MSG.ER_PASS_NOT_MATCH
        } else {
            isValidate = true
        }

        if (isValidate === false) {
            alert(messageText)
        }

        return isValidate
    }
    fncDoSignUP() {
        if (this.fncIsValidate()) {
            let loginRequest = {}
            loginRequest.email = this.state.email
            loginRequest.password = this.state.password
            loginRequest.firstName = this.state.firstName
            loginRequest.lastName = this.state.lastName
            this.props.signup(loginRequest)
        }
    }


    renderBackButton() {
        return (
            <ATOMS.LinkButton
                title={'Already have an account. '}
                clickableTitle={'Login'}
                onPress={() => {
                    this.props.navigation.goBack()
                }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps='always'
                    contentContainerStyle={styles.keyboardView}>
                    <ATOMS.SelectPicture
                        currentImage={this.state.picPath}
                        updatePic={(pic) => {
                            this.setState({
                                picPath: pic
                            })
                        }}
                    />

                    <ATOMS.TextField
                        maxLength={30}
                        value={this.state.firstName}
                        placeholder={MSG.PH_FIRST_NAME}
                        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10 }}
                        onChangeText={(firstName) => {
                            this.setState({
                                firstName
                            })
                        }}
                    />

                    <ATOMS.TextField
                        maxLength={30}
                        value={this.state.lastName}
                        placeholder={MSG.PH_LAST_NAME}
                        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10 }}
                        onChangeText={(lastName) => {
                            this.setState({
                                lastName
                            })
                        }}
                    />

                    <ATOMS.TextField
                        value={this.state.email}
                        placeholder={MSG.PH_EMAIL}
                        keyboardType={'email-address'}
                        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10 }}
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
                        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10 }}
                        onChangeText={(password) => {
                            this.setState({
                                password
                            })
                        }}
                    />
                    <ATOMS.TextField
                        maxLength={15}
                        value={this.state.confirmPassword}
                        placeholder={MSG.ER_ENTER_CONFIRM}
                        secureTextEntry={true}
                        style={{ width: '80%', height: 40, backgroundColor: 'white', marginBottom: 10 }}
                        onChangeText={(confirmPassword) => {
                            this.setState({
                                confirmPassword
                            })
                        }}
                    />
                    <ATOMS.Button
                        title={'SignUp'}
                        onPress={this.fncDoSignUP}
                    />

                    {this.renderBackButton()}
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

export default connect(mapStateToProps, { signup })(SignUp)

