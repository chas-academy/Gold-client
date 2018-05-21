import {
  FETCH_SERVICE_START,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  FETCH_EMP_ASSIGNED_REQUEST,
  FETCH_EMP_ASSIGNED_SUCCESS,
  FETCH_EMP_ASSIGNED_FAILURE,
  FETCH_EMP_INTERNAL_REQUEST,
  FETCH_EMP_INTERNAL_SUCCESS,
  FETCH_EMP_INTERNAL_FAILURE,
  FETCH_EMP_DONE_REQUEST,
  FETCH_EMP_DONE_SUCCESS,
  FETCH_EMP_DONE_FAILURE
} from "../actions/employees/Types";

const initialState = {
  Assigned: [],
  Done: [],
  Internal: [],
  service: {},
  isFetching: false,
  errorMessage: null,
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
        isfetching: false,
        errorMessage:action.message
      };
    case FETCH_EMP_ASSIGNED_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EMP_ASSIGNED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Assigned: action.payload
      };
    case FETCH_EMP_ASSIGNED_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
      case FETCH_EMP_INTERNAL_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EMP_INTERNAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        Incoming: action.payload
      };
    case FETCH_EMP_INTERNAL_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case FETCH_EMP_DONE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EMP_DONE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
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
