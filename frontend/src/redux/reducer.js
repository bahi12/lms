import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    LOGOUT
} from './actions';

const initialState = {
    isLoggedIn: false,
    user: null,
    access: null,
    refresh: null,
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
        case LOGOUT:
            return {
                ...state,
                access: null,
                refresh: null,
                isLoggedIn: false,
                user: null,
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
        default:
            return state;
    }
};

export default authReducer;
