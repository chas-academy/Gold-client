import {
    FETCH_SERVICES_START,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICE_START,
    FETCH_SERVICE_SUCCESS,
    FETCH_SERVICE_FAILURE,
    ORDER_CREATE_START,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAILURE,
    COMPLAINT_CREATE_START,
    COMPLAINT_CREATE_SUCCESS,
    COMPLAINT_CREATE_FAILURE,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    USER_UPDATE_START,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE
} from "../actions/customers/Action-types"
import { UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE } from "../actions/admin/Action-types";

const initialState = {
    services: [],
    service: {},
    order: {},
    complaint: {},
    user: {},
    isFetching: false,
    errorMessage: null
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERVICES_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                services: action.payload
            };
        case FETCH_SERVICES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            }
        case FETCH_SERVICE_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SERVICE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                service: action.payload
            };
        case FETCH_SERVICE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case ORDER_CREATE_START:
            return {
                ...state,
                isFetching: true,
            };
        case ORDER_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                order: action.payload
            };
        case ORDER_CREATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case COMPLAINT_CREATE_START:
            return {
                ...state,
                isFetching: true,
            };
        case COMPLAINT_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                complaint: action.payload
            };
        case COMPLAINT_CREATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case FETCH_USER_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        case USER_UPDATE_START:
            return {
                ...state,
                isFetching: true
            };
        case UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            };
        case UPDATE_CUSTOMER_FAILURE:
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