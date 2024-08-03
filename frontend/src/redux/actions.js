import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';

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

export const loginUser = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/login/', { username, password });
        const { access, refresh } = response.data;
        dispatch(loginSuccess(access, refresh));

        // Load the user data after login
        const userResponse = await axios.get('http://localhost:8000/api/auth/user/', {
            headers: {
                Authorization: `Bearer ${access}`
            }
        });
        dispatch(userLoadedSuccess(userResponse.data));
    } catch (error) {
        dispatch(loginFail());
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        await axios.post('http://localhost:8000/api/auth/logout/', {
            refresh: localStorage.getItem('refreshToken'),
        });
        dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (err) {
        console.error('Logout error:', err);
        dispatch({ type: 'LOGOUT_FAIL' });
    }
};
