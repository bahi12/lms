import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

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
      const { auth_token } = response.data; // Djoser's token response
  
      // Dispatch login success action with token
      dispatch(loginSuccess(auth_token));
  
      // Store token in a secure storage mechanism (e.g., redux-persist)
      storeTokenSecurely(auth_token); // Implement your secure storage function
  
      // Fetch user data using the retrieved token
      const userResponse = await axios.get('http://localhost:8000/api/auth/users/me', {
        headers: {
          Authorization: `Bearer ${auth_token}` // Use 'Bearer' for JWT tokens
        }
      });
  
      dispatch(userLoadedSuccess(userResponse.data));
    } catch (error) {
      dispatch(loginFail(error)); // Pass the error for better error handling
    }
  };
  
  // Function to store the token securely (replace with your preferred method)
  const storeTokenSecurely = (token) => {
    // Implement secure storage using a library like redux-persist
    // with encryption for stronger security
    localStorage.setItem('auth_token', token); // Temporary solution for demonstration
  };
  

export const logoutUser = () => async (dispatch) => {
    try {
        const authToken = localStorage.getItem('auth_token');
        if (!authToken) {
            throw new Error('No auth token available');
        }

        await axios.post('http://localhost:8000/api/auth/token/logout/', null, {
            headers: {
                Authorization: `Token ${authToken}`
            }
        });

        localStorage.removeItem('auth_token');
        dispatch(logoutSuccess());
    } catch (err) {
        console.error('Logout error:', err);
        dispatch(logoutFail());
    }
};

export const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user,
});

export const fetchUserFail = () => ({
    type: FETCH_USER_FAIL,
});

export const fetchUser = () => async (dispatch, getState) => {
    const { token } = getState();

    try {
        const response = await axios.get('http://localhost:8000/api/users/me/', {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        dispatch(fetchUserSuccess(response.data));
    } catch (error) {
        dispatch(fetchUserFail());
    }
};
