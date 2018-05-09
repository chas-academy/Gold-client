import { 
    FETCH_USER_START, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE,
    FETCH_USERS_START, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE,
 } from './Action-types';


/* ------------ USER --------------- */    
export const requestUser = () => ({
    type: FETCH_USER_START
});

export const recieveUser = user => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

export const fetchUser = (token) => dispatch => {
    
    dispatch(requestUser());
  
    return fetch('https://gold-api-dev.chas.school/users/:id', token)
      .then(res => res.json())
      .then((user) => {
          return dispatch(recieveUser(user));
      })
      .catch(response => {
          console.error('An error occured when fetching the user')
          return dispatch({ type: FETCH_USER_FAILURE })
      });
  }; 



/* ------------ USERS --------------- */    
export const requestUsers = () => ({
    type: FETCH_USERS_START
});

export const recieveUsers = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsers = (token) => dispatch => {
    
    dispatch(requestUsers());
  
    return fetch('https://gold-api-dev.chas.school/users', token)
      .then(res => res.json())
      .then((users) => {
          return dispatch(recieveUsers(users));
      })
      .catch(response => {
          console.error('An error occured when fetching the users')
          return dispatch({ type: FETCH_USERS_FAILURE })
      });
  };


