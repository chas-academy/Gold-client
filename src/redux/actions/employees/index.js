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
} from "./Types";
import { RSA_NO_PADDING } from "constants";

/* ------------ SERVICE --------------- */

export const requestService = () => ({
  type: FETCH_SERVICE_START
});

export const recieveService = service => ({
  type: FETCH_SERVICE_SUCCESS,
  payload: service
});

export const fetchService = ( token, id ) => dispatch => {
  dispatch(requestService());

  return fetch(`https://gold-api-dev.chas.school/services/${id}`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
      else {
        return dispatch({ type: FETCH_SERVICE_FAILURE });
      }
    })
    .then(service => {
      return dispatch(recieveService(service));
    })
    .catch(response => {
      console.error("An error occured when fetching the service");
      return dispatch({ type: FETCH_SERVICE_FAILURE });
    });
};


/* ----------- INCOMING/ASSIGNED SERVICES -------------- */ 

export const fetchAssignedRequest = () => ({
  type: FETCH_EMP_ASSIGNED_REQUEST
});

export const fetchAssignedSuccess = services => ({
  type: FETCH_EMP_ASSIGNED_SUCCESS,
  payload: services
});

export const fetchAssignedFailure = error => ({
  type: FETCH_EMP_ASSIGNED_FAILURE
});

export const fetchAssigned = (userId, token) => dispatch => {
  dispatch(fetchAssignedRequest());

  return fetch(`https://gold-api-dev.chas.school/employee/${userId}/assigned`, {
    headers: {
      authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
      else {
        return dispatch(fetchAssignedFailure());
      }
    })
    .then(services => {
      return dispatch(fetchAssignedSuccess(services.services));
    })
    .catch(err => {
      return dispatch(fetchAssignedFailure());
    });
};



/* ----------- INTERNAL ORDERS -------------- */ 

export const fetchInternalRequest = () => ({
  type: FETCH_EMP_INTERNAL_REQUEST
});

export const fetchInternalSuccess = internal => ({
  type: FETCH_EMP_INTERNAL_SUCCESS,
  payload: internal
});

export const fetchInternalFailure = error => ({
  type: FETCH_EMP_INTERNAL_FAILURE
});

export const fetchInternal = (userId, token) => dispatch => {
  dispatch(fetchInternalRequest());

  return fetch(`https://gold-api-dev.chas.school/employee/${userId}/assignedInt`, {
    headers: {
      authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
      else {
        return dispatch(fetchInternalFailure());
      }
    })
    .then(internal => {
      return dispatch(fetchInternalSuccess(internal));
    })
    .catch(err => {
      return dispatch(fetchInternalFailure());
    });
};



/* ------------- COMPLETED SERVICES -------------------- */ 

export const fetchDoneRequest = () => ({
  type: FETCH_EMP_DONE_REQUEST
});

export const fetchDoneFailure = error => ({
  type: FETCH_EMP_DONE_FAILURE
});

export const fetchDoneSuccess = services => ({
  type: FETCH_EMP_DONE_SUCCESS,
  payload: services
});

export const fetchDone = (userId, token) => dispatch => {
  dispatch(fetchDoneRequest());

  return fetch(`https://gold-api-dev.chas.school/employee/${userId}/done`, {
    headers: {
      authorization: token
    }
  })
    .then(res => {
      if(res.status === 200) {
        return res.json();
      }
      else {
        return dispatch(fetchDoneFailure());
      }
    })
    .then(services => {
      return dispatch(fetchDoneSuccess(services.services));
    })
    .catch(err => {
      return dispatch(fetchDoneFailure());
    });
};


