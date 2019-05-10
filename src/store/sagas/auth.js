import { call, takeLatest, put } from 'redux-saga/effects';
import * as authActions from '../actions/auth';
import * as authTypes from '../types/auth';
import * as authApi from '../api/auth';

export function* loginSaga (action) {
    try {
        const response = yield call(authApi.login, {
            email: action.data.email,
            password: action.data.password,
        });
        return yield put(authActions.loginSuccess(response));
    } catch (error) {
        return yield put(authActions.logoutFailed(error));
    }
}

export function* logoutSaga(action) {
    try {
        const response = yield call(authApi.logout, action);

        return yield put(authActions.logoutSuccess(response));
    } catch (error) {
        return yield put(authActions.logoutFailed(error));
    }
}

export default function* authSaga() {
    yield takeLatest(authApi.login, loginSaga);
    yield takeLatest(authApi.logout, logoutSaga);
}