import {
    FETCH_EMP_INCOMING_REQUEST,
    FETCH_EMP_INCOMING_SUCCESS,
    FETCH_EMP_INCOMING_FAILURE,
    FETCH_EMP_DONE_REQUEST,
    FETCH_EMP_DONE_SUCCESS,
    FETCH_EMP_DONE_FAILURE
    } from "../actions/employees/Types";



const initialState = {
    empIncomingList: [],
    empfinishedList: [],
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
        case FETCH_EMP_INCOMING_SUCCESS:
            return { 
                ...state,
                isFetching: false,
                empIncomingList: action.payload
            }
        case FETCH_EMP_DONE_REQUEST:
            return { 
                ...state
            }
        case FETCH_EMP_DONE_FAILURE:
            return { 
                ...state
              
            }
        case FETCH_EMP_DONE_SUCCESS:
            return { 
                ...state,
                empFinishedList: action.payload
            }
        default:
            return state;
    }
}

export default employeeReducer;