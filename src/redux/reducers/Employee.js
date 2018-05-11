import {
    FETCH_EMP_INCOMING_REQUEST,
    FETCH_EMP_INCOMING_SUCCESS,
    FETCH_EMP_INCOMING_FAILURE,
    FETCH_EMP_DONE_REQUEST,
    FETCH_EMP_DONE_SUCCESS,
    FETCH_EMP_DONE_FAILURE,
    FETCH_EMP_ACTIVE_REQUEST,
    FETCH_EMP_ACTIVE_SUCCESS,
    FETCH_EMP_ACTIVE_FAILURE
    } from "../actions/employees/Types";



const initialState = {
    empFinishedList: [],
    empIncomingList: [],
    empActiveList: [],
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
                ...state,
                isFetching: true
            }
        case FETCH_EMP_DONE_FAILURE:
            return { 
                ...state,
                isFetching: false
              
            }
        case FETCH_EMP_DONE_SUCCESS:
            return { 
                ...state,
                empFinishedList: action.payload
            }
        case FETCH_EMP_ACTIVE_REQUEST:
            return { 
                ...state,
                isFetching:true
            }
        case FETCH_EMP_ACTIVE_FAILURE:
            return { 
                ...state  
            }
        case FETCH_EMP_ACTIVE_SUCCESS:
            return { 
                ...state,
                empActiveList: action.payload
            }
        default:
            return state;
    }
}

export default employeeReducer;