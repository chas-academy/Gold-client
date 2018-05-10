import {
    FETCH_EMP_INCOMING_REQUEST,
    FETCH_EMP_INCOMING_SUCCESS,
    FETCH_EMP_INCOMING_FAILURE,
    FETCH_EMP_DONE_REQUEST,
    FETCH_EMP_DONE_SUCCESS,
    FETCH_EMP_DONE_FAILURE
  } from "./Types";


export const fetchEmpIncomingRequest = ()  => ({
    type: FETCH_EMP_INCOMING_REQUEST
    
  });

export const fetchEmpIncomingFailure = error  => ({
    type: FETCH_EMP_INCOMING_FAILURE
  
});

export const fetchEmpIncomingSucess= data => ({
    type: FETCH_EMP_INCOMING_SUCCESS,
    payload: data
});


export const fetchEmpIncoming = (userId) => dispatch => {
    dispatch(fetchEmpIncomingRequest());


    return fetch(`http://localhost:7770/users/${userId}/assigned`)
        .then(res => res.json())
        .then(data => {
            return dispatch(fetchEmpIncomingSucess(data.services))
        })
        .catch(err => {
            return dispatch(fetchEmpIncomingFailure());
        })
};


export const fetchEmpFinishedRequest = ()  => ({
    type: FETCH_EMP_DONE_REQUEST
    
  });

export const fetchEmpFinishedFailure = error  => ({
    type: FETCH_EMP_DONE_FAILURE
  
});

export const fetchEmpFinishedSucess= data => ({
    type: FETCH_EMP_DONE_SUCCESS,
    payload: data
});


export const fetchEmpFinished = (userId) => dispatch => {
    dispatch(fetchEmpFinishedRequest());


    return fetch(`http://localhost:7770/users/${userId}/done`)
        .then(res => res.json())
        .then(data => {
            return dispatch(fetchEmpFinishedSucess(data.services))
        })
        .catch(err => {
            return dispatch(fetchEmpFinishedFailure());
        })
};