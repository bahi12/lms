import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
} from './actions';

const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,   
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isLoggedIn: true,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                token: null,
                isLoggedIn: false,
            };
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null,
            };
        case FETCH_USER_FAIL:
            return {
                ...state,
                user: null,
            };
        
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default authReducer;
