import * as authTypes from '../types/auth';

export const login = (data) => ({
    type: authTypes.LOGIN,
    data,
});

export const loginSuccess = (data) => ({
    type: authTypes.LOGIN_SUCCESS,
    data,
});

export const loginFailed = (data) => ({
    type: authTypes.LOGIN_FAILED,
    data,
});


export const logout = (data) => ({
    type: authTypes.LOGOUT,
    data,
});

export const logoutSuccess = (data) => ({
    type: authTypes.LOGOUT_SUCCESS,
    data,
});

export const logoutFailed = (data) => ({
    type: authTypes.LOGOUT_FAILED,
    data,
});


