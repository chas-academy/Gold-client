import {
    FETCH_ORDER_START, 
    FETCH_ORDER_SUCCESS, 
    FETCH_ORDER_FAILURE,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE
} from '../actions/admin/Action-types'

const initialState = {
    isfetching: false,
    order: {},
    orders: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDER_START:
        return {
            ...state,
            isfetching: true
         };
        case FETCH_ORDER_SUCCESS:
        return {
            ...state,
            isfetching: false,
            order: action.payload
         };
        case FETCH_ORDER_FAILURE:
        return {
            ...state,
            isfetching: false
         };
        case FETCH_ORDERS_START:
            return {
                ...state,
                isfetching: true
             };
        case FETCH_ORDERS_SUCCESS:
        return {
            ...state,
            isfetching: false,
            orders: action.payload
         };
        case FETCH_ORDERS_FAILURE:
        return {
            ...state,
            isfetching: false
         };
        default:
            return state;
    }
}

export default adminReducer;