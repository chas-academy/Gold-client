import {
    FETCH_EMP_INCOMING_REQUEST,
    FETCH_EMP_INCOMING_SUCCESS,
    FETCH_EMP_INCOMING_FAILURE
  } from "./Types";


export const fetchEmpIncomingRequest 

export const fetchEmpIncomingRequest  = ({
    type: FETCH_EMP_INCOMING_REQUEST

  });

export const fetchEmpIncomingFailure = error  => ({
    type: FETCH_EMP_INCOMING_FAILURE
  
});


export const fetchEmpIncoming = (userId) => dispatch => {
    dispatch(fetchEmpIncomingRequest());


    return fetch(`http://localhost:3001/photos${userId}`)
        .then(res => res.json())
        .then(data => {
            return console.log(data)
        })
};