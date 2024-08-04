import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: { token }
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

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});

export const logoutFail = () => ({
    type: LOGOUT_FAIL
});

export const loginUser = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/token/login/', { username, password });
        console.log('Login response:', response.data);
        const { auth_token } = response.data; // Djoser's token response
        dispatch(loginSuccess(auth_token));

        // Load the user data after login
        const userResponse = await axios.get('http://localhost:8000/api/auth/user/', {
            headers: {
                Authorization: `Token ${auth_token}`
            }
        });
        dispatch(userLoadedSuccess(userResponse.data));
    } catch (error) {
        dispatch(loginFail());
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await axios.post('http://localhost:8000/api/auth/token/logout/');
        dispatch(logoutSuccess());
    } catch (err) {
        console.error('Logout error:', err);
        dispatch(logoutFail());
    }
};
