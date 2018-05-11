import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/Action-types';

const initialState = {
    isFetching: false,
    isauthenticated: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isauthenticated: false,
            } 
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isauthenticated: true,
                user: action.user
            } 
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isauthenticated: false,
                errorMessage: action.message
            }
        case LOGOUT_REQUEST:
        return {
            ...state,
            isFetching: true,
        }    
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isauthenticated: false
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                isFetching: true 
            } 
        case REGISTER_SUCCESS:
            return {
                ...state,
            } 
        case REGISTER_FAILURE:
            return {
                ...state,
                errorMessage: action.message
            }  
        default:
            return state;
    }
}

export default authReducer;