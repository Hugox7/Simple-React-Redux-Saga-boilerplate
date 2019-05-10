import { combineReducers } from 'redux';
import * as authTypes from '../types/auth';

const userInitialState = {
    loading: false,
    error: undefined,
    isConnected: false,
}

const user = (state = userInitialState, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.data,
                isConnected: true,
                loading: false,
            };
        case authTypes.LOGIN_FAILED:
            return {
                isConnected: false,
                loading: false,
                error: action.data,
            };
        case authTypes.LOGOUT_SUCCESS:
            return { isConnected: false };
        case authTypes.LOGOUT_FAILED:
            // return {}
            return { isConnected: false };
        case authTypes.LOGOUT:
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    user,
});