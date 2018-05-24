import {
	FETCH_USER_START,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	USER_UPDATE_START,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_FAILURE
 } from './Action-types';


/* ------------ GET USER --------------- */    
export const requestUser = () => ({
    type: FETCH_USER_START
});

export const recieveUser = user => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

export const fetchUser = (token) => dispatch => {
    dispatch(requestUser());
  
    return fetch(process.env.REACT_APP_API_BASE_URL + "/users/:id", {
        headers: {
            "Authorization": token
      }
    })
    .then(res => res.json())
    .then((user) => {
        return dispatch(recieveUser(user));
    })
    .catch(res => {
        return dispatch({ type: FETCH_USER_FAILURE })
    });
};



/* ------------ UPDATE USER --------------- */    
export const startUpdateUser = () => ({
    type: USER_UPDATE_START
});

export const updateUserSuccess = user => ({
    type: USER_UPDATE_SUCCESS,
    payload: user
});

export const updateUser = (token) => dispatch => {
    dispatch(requestUser());
  
    return fetch(process.env.REACT_APP_API_BASE_URL + "/users/:id/update", {
        headers: {
            "Authorization": token
      }
    })
    .then(res => res.json())
    .then((user) => {
        return dispatch(updateUserSuccess(user));
    })
    .catch(res => {
        return dispatch({ type: USER_UPDATE_FAILURE })
    });
}; 