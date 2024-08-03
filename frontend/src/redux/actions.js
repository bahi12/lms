import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';
export const LOGOUT = 'LOGOUT';

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

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return { type: LOGOUT };
};

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

export const loadUser = () => async (dispatch) => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const response = await axios.get('http://localhost:8000/api/auth/user/', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            dispatch(userLoadedSuccess(response.data));
        } else {
            dispatch(userLoadedFail());
        }
    } catch (error) {
        dispatch(userLoadedFail());
    }
};
