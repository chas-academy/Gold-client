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
} from "./Types";

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
    .then(res => res.json())
    .then(service => {
      return dispatch(recieveService(service));
    })
    .catch(response => {
      console.error("An error occured when fetching the service");
      return dispatch({ type: FETCH_SERVICE_FAILURE });
    });
};


/* ----------- INCOMING/ASSIGNED SERVICES -------------- */ 

export const fetchIncomingRequest = () => ({
  type: FETCH_EMP_INCOMING_REQUEST
});

export const fetchIncomingSuccess = services => ({
  type: FETCH_EMP_INCOMING_SUCCESS,
  payload: services
});

export const fetchIncomingFailure = error => ({
  type: FETCH_EMP_INCOMING_FAILURE
});

export const fetchIncoming = (userId, token) => dispatch => {
  dispatch(fetchIncomingRequest());

  return fetch(`https://gold-api-dev.chas.school/users/${userId}`, {
    headers: {
      authorization: token
    }
  })
    .then(res => res.json())
    .then(services => {
      return dispatch(fetchIncomingSuccess(services));
    })
    .catch(err => {
      return dispatch(fetchIncomingFailure());
    });
};



/* --------------- TAKEN SERVICES -------------- */ 

export const fetchTakenRequest = () => ({
    type: FETCH_EMP_TAKEN_REQUEST
  });
  
  export const fetchTakenFailure = error => ({
    type: FETCH_EMP_TAKEN_FAILURE
  });
  
  export const fetchTakenSuccess = services => ({
    type: FETCH_EMP_TAKEN_SUCCESS,
    payload: services
  });
  
  export const fetchTaken = (userId, token) => dispatch => {
    dispatch(fetchTakenRequest());
  
    return fetch(`https://gold-api-dev.chas.school/users/${userId}/taken`, {
      headers: {
        authorization: token
      }
    })
      .then(res => res.json())
      .then(services => {
        return dispatch(fetchTakenSuccess(services));
      })
      .catch(err => {
        return dispatch(fetchTakenFailure());
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

  return fetch(`https://gold-api-dev.chas.school/users/${userId}/done`, {
    headers: {
      authorization: token
    }
  })
    .then(res => res.json())
    .then(services => {
      return dispatch(fetchDoneSuccess(services));
    })
    .catch(err => {
      return dispatch(fetchDoneFailure());
    });
};


