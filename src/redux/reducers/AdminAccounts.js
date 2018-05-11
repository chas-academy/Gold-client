import {
    FETCH_CUSTOMERS_COMPANIES_START, 
    FETCH_CUSTOMERS_COMPANIES_SUCCESS, 
    FETCH_CUSTOMERS_COMPANIES_FAILURE,
    FETCH_CUSTOMERS_PRIVATE_START, 
    FETCH_CUSTOMERS_PRIVATE_SUCCESS, 
    FETCH_CUSTOMERS_PRIVATE_FAILURE,
    FETCH_EMPLOYEES_START, 
    FETCH_EMPLOYEES_SUCCESS, 
    FETCH_EMPLOYEES_FAILURE,
    FETCH_USER_START, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE,
} from '../actions/admin/Action-types'

const initialState = {
    isfetching: false,
    user: {},
    employees: [],
    companies: [],
    privateCustomers: []
};

const adminAccountsReducer = (state = initialState, action) => {
    switch (action.type) {
           case FETCH_USER_START:
           return {
               ...state,
               isfetching: true
            };
            case FETCH_USER_SUCCESS:
            return {
                ...state,
                isfetching: false,
                user: action.payload
             };
            case FETCH_USER_FAILURE:
            return {
                ...state,
                isfetching: false
             };
           case FETCH_EMPLOYEES_START:
           return {
               ...state,
               isfetching: true
            };
            case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isfetching: false,
                employees: action.payload
             };
            case FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                isfetching: false
             };
            case FETCH_CUSTOMERS_PRIVATE_START:
            return {
               ...state,
               isfetching: true
            };
            case FETCH_CUSTOMERS_PRIVATE_SUCCESS:
            return {
                ...state,
                isfetching: false,
                privateCustomers: action.payload
             };
            case FETCH_CUSTOMERS_PRIVATE_FAILURE:
            return {
                ...state,
                isfetching: false
             };
             case FETCH_CUSTOMERS_COMPANIES_START:
             return {
                ...state,
                isfetching: true
             };
             case FETCH_CUSTOMERS_COMPANIES_SUCCESS:
             return {
                 ...state,
                 isfetching: false,
                 companies: action.payload
              };
             case FETCH_CUSTOMERS_COMPANIES_FAILURE:
             return {
                 ...state,
                 isfetching: false
              };
            default:
            return state;
    }
}

export default adminAccountsReducer;