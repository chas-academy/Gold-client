import {
  FETCH_SERVICE_START,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  FETCH_EMP_INCOMING_REQUEST,
  FETCH_EMP_INCOMING_SUCCESS,
  FETCH_EMP_INCOMING_FAILURE,
  FETCH_EMP_TAKEN_REQUEST,
  FETCH_EMP_TAKEN_SUCCESS,
  FETCH_EMP_TAKEN_FAILURE,
  FETCH_EMP_DONE_REQUEST,
  FETCH_EMP_DONE_SUCCESS,
  FETCH_EMP_DONE_FAILURE
} from "../actions/employees/Types";

const initialState = {
  Incoming: [],
  Taken: [],
  Done: [],
  service: {},
  isFetching: false
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_START:
      return {
        ...state,
        isfetching: true
      };
    case FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        isfetching: false,
        service: action.payload
      };
    case FETCH_SERVICE_FAILURE:
      return {
        ...state,
        isfetching: false
      };
    case FETCH_EMP_INCOMING_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EMP_INCOMING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Incomingt: action.payload
      };
    case FETCH_EMP_INCOMING_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case FETCH_EMP_TAKEN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EMP_TAKEN_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case FETCH_EMP_TAKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Taken: action.payload
      };
    case FETCH_EMP_DONE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EMP_DONE_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case FETCH_EMP_DONE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Done: action.payload
      };
    default:
      return state;
  }
};

export default employeeReducer;
