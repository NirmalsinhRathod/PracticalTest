import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,

} from './actionTypes';

import { AsyncStorage, Alert } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import * as ALERT from '../../constants/alerts';

// Check if user is already loggedin or not. 
// If user is logged in then application will redirectly redirect to Tabbar, otherwise it will redirect on Login
export const checkLogin = () => (dispatch) => {
    setTimeout(() => {
        try {
            AsyncStorage.getItem('userData').then((response) => {
                if (response) {
                    returnToDispatch(dispatch, LOGIN_SUCCESS, JSON.parse(response))
                    dispatch(NavigationActions.navigate({ routeName: 'MainTabbarScreen' }))
                } else {
                    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
                }
            }).done()
        } catch (error) {
            dispatch(NavigationActions.navigate({ routeName: 'Login' }))
        }
    }, 500);
}

// Check for Authenication.
export const login = (request) => (dispatch) => {
    returnToDispatch(dispatch, LOGIN_REQUEST)

    setTimeout(() => {

        // Create temp success response to store user data into AsyncStorage
        let objUser = {}
        objUser.firstName = 'Nirmalsinh'
        objUser.lastName = 'Rathod'
        objUser.email = request.email

        try {
            AsyncStorage.setItem('userData', JSON.stringify(objUser))
            returnToDispatch(dispatch, LOGIN_SUCCESS, objUser)
            dispatch(NavigationActions.navigate({ routeName: 'MainTabbarScreen' }))
        } catch (error) {
            alert(error)
            returnToDispatch(dispatch, LOGIN_FAILURE, error)
        }
    }, 1000);

}

export const signup = ({ request }) => (dispatch) => {
    returnToDispatch(dispatch, SIGNUP_REQUEST)

    setTimeout(() => {
        returnToDispatch(dispatch, SIGNUP_SUCCESS, '')
        // returnToDispatch(dispatch, SIGNUP_FAILURE, error)
    }, 2000);

}
export const logout = () => (dispatch) => {


    Alert.alert(
        '',
        ALERT.LOGOUT,
        [
            {
                text: 'Logout', onPress: () => {
                    returnToDispatch(dispatch, LOGOUT_REQUEST)

                    setTimeout(() => {
                        try {
                            AsyncStorage.removeItem('userData').then(() => {
                                const resetLogin = StackActions.reset({
                                    index: 0,
                                    actions: [NavigationActions.navigate({ routeName: 'Login' })],
                                });
                                dispatch(resetLogin)
                                returnToDispatch(dispatch, LOGOUT_SUCCESS, '')

                            }).done()
                        } catch (error) {
                            returnToDispatch(dispatch, LOGOUT_FAILURE, error)
                        }
                    }, 2000);
                }
            },
            {
                text: 'Cancel', onPress: () => {
                }
            },
        ],
        { cancelable: false },
    );


}
returnToDispatch = (dispatch, type, payload) => {
    dispatch({
        type: type,
        payload: payload
    })
}