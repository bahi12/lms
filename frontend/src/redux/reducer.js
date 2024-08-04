import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
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
                access: action.payload.access,
                refresh: action.payload.refresh,
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
        case USER_LOADED_FAIL:
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
