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

const intialState = {
  loading: false,
  userData: {},
  error: null,
  isSuccess: true,
}

export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        userData: {},
      };
    case LOGIN_SUCCESS:
      // alert(JSON.stringify(action.payload))
      return {
        ...state,
        loading: false,
        isSuccess: true,
        userData: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        userData: {},
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        userData: {},
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        userData: {}
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        userData: {},
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        isSuccess: false,
      };
    default:
      return state
  }
}