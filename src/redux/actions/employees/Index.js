import {
    FETCH_EMP_INCOMING_REQUEST,
    FETCH_EMP_INCOMING_SUCCESS,
    FETCH_EMP_INCOMING_FAILURE
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


    return fetch(`http://localhost:7770/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            return dispatch(fetchEmpIncomingSucess(data.services))
        })
        .catch(err => {
            return dispatch(fetchEmpIncomingFailure());
        })
};