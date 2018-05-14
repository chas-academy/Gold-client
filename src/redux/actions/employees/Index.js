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


export const fetchEmpIncoming = (userId, token) => dispatch => {
    dispatch(fetchEmpIncomingRequest());


    return fetch(`http://localhost:7770/users/${userId}/assigned`,{
        headers:{
            authorization: token 
        },
        })
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


export const fetchEmpFinished = (userId, token) => dispatch => {
    dispatch(fetchEmpFinishedRequest());


    return fetch(`http://localhost:7770/users/${userId}/done`,{
        headers:{
            authorization: token 
        },
        })
        .then(res => res.json())
        .then(data => {
            return dispatch(fetchEmpFinishedSucess(data.services))
        })
        .catch(err => {
            return dispatch(fetchEmpFinishedFailure());
        })
};


export const fetchEmpActiveRequest = ()  => ({
    type: FETCH_EMP_ACTIVE_REQUEST
    
  });

export const fetchEmpActiveFailure = error  => ({
    type: FETCH_EMP_ACTIVE_FAILURE
  
});

export const fetchEmpActiveSucess= data => ({
    type: FETCH_EMP_ACTIVE_SUCCESS,
    payload: data
});

export const fetchEmpActive = (userId, token) => dispatch => {
    dispatch(fetchEmpActiveRequest());


    return fetch(`http://localhost:7770/users/${userId}/taken`,{
        headers:{
            authorization: token 
        },
        })
        .then(res => res.json())
        .then(data => {
            return dispatch(fetchEmpActiveSucess(data.services))
        })
        .catch(err => {
            return dispatch(fetchEmpActiveFailure());
        })
};