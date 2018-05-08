import {
    FETCH_EMP_INCOMING_REQUEST,
    FETCH_EMP_INCOMING_SUCCESS,
    FETCH_EMP_INCOMING_FAILURE

    } from "../actions/employees/Types";



const initialState = {
    empIncomingList: [],
    isFetching: false
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMP_INCOMING_REQUEST:
            return { 
                ...state,
                isFetching: true
            }
        case FETCH_EMP_INCOMING_FAILURE:
            return { 
                ...state,
                isFetching: false


            }
        case FETCH_EMP_INCOMING_FAILURE:
            return { 
                ...state,
                isFetching: false,
                empIncomingList: action.payload


            }
        default:
            return state;
    }
}

export default employeeReducer;