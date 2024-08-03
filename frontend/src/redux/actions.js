import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED_SUCCESS, USER_LOADED_FAIL } from './actions';

// Action creators
export const loginSuccess = (access, refresh) => ({
    type: LOGIN_SUCCESS,
    payload: { access, refresh }
});

export const loginFail = () => ({
    type: LOGIN_FAIL
});

export const userLoadedSuccess = (user) => ({
    type: USER_LOADED_SUCCESS,
    payload: user,
});

export const userLoadedFail = () => ({
    type: USER_LOADED_FAIL,
});

// Thunk action creator for login
export const loginUser = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/login/', { username, password });
        const { access, refresh } = response.data;
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        dispatch(loginSuccess(access, refresh));
    } catch (error) {
        dispatch(loginFail());
        throw error;
    }
};
