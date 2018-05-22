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
  FETCH_EMP_DONE_FAILURE,
  FETCH_SERVICE_COMPLETE_START,
  FETCH_SERVICE_COMPLETE_SUCCESS,
  FETCH_SERVICE_COMPLETE_FAILURE
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

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/services/${id}`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
      else {
        return dispatch({ type: FETCH_SERVICE_FAILURE,
                          message:"Kunde inte Koppla till nätverket kontrollera internetuppkoppling."});
      }
    })
    .then(service => {
      return dispatch(recieveService(service));
    })
    .catch(response => {
      console.error("An error occured when fetching the service");
      return dispatch({ type: FETCH_SERVICE_FAILURE,
                        message:"kunde inte hämta ärende."});
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
  type: FETCH_EMP_ASSIGNED_FAILURE,
  message: error

});

export const fetchAssigned = (userId, token) => dispatch => {
  dispatch(fetchAssignedRequest());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/employee/${userId}/assigned`, {
    headers: {
      authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json()
        
      }
      else {
        return res.json()
        .then(data => {
          return dispatch(fetchAssignedFailure(data.error));
        })
        
      }
    })
    .then(services => {
      return dispatch(fetchAssignedSuccess(services.services));
    })
    .catch(err => {
      return dispatch(fetchAssignedFailure("det uppståd et problem att hämta ärenden"));
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
  type: FETCH_EMP_INTERNAL_FAILURE,
  message: error
});

export const fetchInternal = (userId, token) => dispatch => {
  dispatch(fetchInternalRequest());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/employee/${userId}/assignedInt`, {
    headers: {
      authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
      else {
        return dispatch(fetchInternalFailure("Kunde inte Koppla till nätverket kontrollera internetuppkoppling."));
      }
    })
    .then(internal => {
      return dispatch(fetchInternalSuccess(internal));
    })
    .catch(err => {
      return dispatch(fetchInternalFailure("kunde inte hämta interna ärenden"));
    });
};



/* ------------- COMPLETED SERVICES -------------------- */ 

export const fetchDoneRequest = () => ({
  type: FETCH_EMP_DONE_REQUEST
});

export const fetchDoneFailure = error => ({
  type: FETCH_EMP_DONE_FAILURE,
  message: error
});

export const fetchDoneSuccess = services => ({
  type: FETCH_EMP_DONE_SUCCESS,
  payload: services
});

export const fetchDone = (userId, token) => dispatch => {
  dispatch(fetchDoneRequest());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/employee/${userId}/done`, {
    headers: {
      authorization: token
    }
  })
    .then(res => {
      if(res.status === 200) {
        return res.json();
      }
      else {
        return dispatch(fetchDoneFailure("Kunde inte Koppla till nätverket kontrollera internetuppkoppling."));
      }
    })
    .then(services => {
      return dispatch(fetchDoneSuccess(services.services));
    })
    .catch(err => {
      return dispatch(fetchDoneFailure("Det uppståd ett problem att hämta färdiga ärenden"));
    });
};


/* ------------ SERVICES COMPLETE --------------- */

export const requestServiceComplete = () => ({
  type: FETCH_SERVICE_COMPLETE_START
});

export const ServiceCompleteSuccess = serviceComplete => ({
  type: FETCH_SERVICE_COMPLETE_SUCCESS,
  payload: serviceComplete
});

export const fetchServiceComplete = (token, id) => dispatch => {
  dispatch(requestServiceComplete());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/services/${id}/complete`, {
    method: "PUT",
    body: JSON.stringify(),
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.message) {
        return dispatch(ServiceCompleteSuccess(res.message));
      } else {
        return dispatch({ type: FETCH_SERVICE_COMPLETE_FAILURE, payload: res.error });
      }
    })
    .catch(response => {
      console.error("An error occured when fetching the service");
      return dispatch({ type: FETCH_SERVICE_COMPLETE_FAILURE, payload: response.message });
    });
};
