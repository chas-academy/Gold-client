import {
    FETCH_SERVICES_GET_START,
    FETCH_SERVICES_GET_SUCCESS,
    FETCH_SERVICES_GET_FAILURE,
    FETCH_ORDER_GET_START,
    FETCH_ORDER_GET_SUCCESS,
    FETCH_ORDER_GET_FAILURE,
    FETCH_ORDER_CREATE_START,
    FETCH_ORDER_CREATE_SUCCESS,
    FETCH_ORDER_CREATE_FAILURE,
    FETCH_COMPLAINT_GET_START,
    FETCH_COMPLAINT_GET_SUCCESS,
    FETCH_COMPLAINT_GET_FAILURE,
    FETCH_COMPLAINT_CREATE_START,
    FETCH_COMPLAINT_CREATE_SUCCESS,
    FETCH_COMPLAINT_CREATE_FAILURE,
    FETCH_USER_GET_START,
    FETCH_USER_GET_SUCCESS,
    FETCH_USER_GET_FAILURE,
    FETCH_USER_UPDATE_START,
    FETCH_USER_UPDATE_SUCCESS,
    FETCH_USER_UPDATE_FAILURE
} from "../actions/customers/Action-types"

const initialState = {
    services: [],
    order: {},
    complaint: {},
    user: {},
    isFetching: false,
    errorMessage: null
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERVICES_GET_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SERVICES_GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                services: action.payload
            };
        case FETCH_SERVICES_GET_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            }
        case FETCH_ORDER_GET_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_ORDER_GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                order: action.payload
            };
        case FETCH_ORDER_GET_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case FETCH_ORDER_CREATE_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_ORDER_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                order: action.payload
            };
        case FETCH_ORDER_CREATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case FETCH_COMPLAINT_GET_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_COMPLAINT_GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                complaint: action.payload
            };
        case FETCH_COMPLAINT_GET_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case FETCH_COMPLAINT_CREATE_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_COMPLAINT_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                complaint: action.payload
            };
        case FETCH_COMPLAINT_CREATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case FETCH_USER_GET_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_USER_GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            };
        case FETCH_USER_GET_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        default:
            return state;
    }
}

export default customerReducer;