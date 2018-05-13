import { 
    FETCH_CUSTOMERS_COMPANIES_START, 
    FETCH_CUSTOMERS_COMPANIES_SUCCESS, 
    FETCH_CUSTOMERS_COMPANIES_FAILURE,
    FETCH_CUSTOMERS_PRIVATE_START, 
    FETCH_CUSTOMERS_PRIVATE_SUCCESS, 
    FETCH_CUSTOMERS_PRIVATE_FAILURE,
    FETCH_EMPLOYEES_START, 
    FETCH_EMPLOYEES_SUCCESS, 
    FETCH_EMPLOYEES_FAILURE,
    FETCH_USER_START, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE,
    FETCH_USERS_START, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE,
    UPDATE_USER_START, 
    UPDATE_USER_SUCCESS, 
    UPDATE_USER_FAILURE,
 } from './Action-types';


/* ------------ USER --------------- */    
export const requestUser = () => ({
    type: FETCH_USER_START
});

export const recieveUser = user => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

export const fetchUser = (id, token) => dispatch => {
    
    dispatch(requestUser());
  
    return fetch(`https://gold-api-dev.chas.school/users/${id}`, {
        headers: {
        "Authorization": token
      }})
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
  
    return fetch('https://gold-api-dev.chas.school/users', {
        headers: {
            "Authorization": token
          }
    })
      .then(res => res.json())
      .then((users) => {
          return dispatch(recieveUsers(users));
      })
      .catch(response => {
          console.error('An error occured when fetching the users')
          return dispatch({ type: FETCH_USERS_FAILURE })
      });
  };

  /* ------------ UPDATE USER --------------- */    
  export const startUpdate = () => ({
    type: UPDATE_USER_START
});

export const updateSuccess = user => ({
    type: UPDATE_USER_SUCCESS,
    payload: user
});

export const updateUser = (user, token) => dispatch => {

    debugger;
    
    dispatch(startUpdate());
  
    return fetch(`https://gold-api-dev.chas.school/users/update/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
        "Authorization": token
      }})
      .then(res => res.json())
      .then((user) => {
          return dispatch(updateSuccess(user));
      })
      .catch(response => {
          console.error('The user was not updated')
          return dispatch({ type: UPDATE_USER_FAILURE })
      });
  }; 
  

/* ------------ EMPLOYEES --------------- */    
export const requestEmployees = () => ({
    type: FETCH_EMPLOYEES_START
});

export const recieveEmployees = users => ({
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: users
});

export const fetchEmployees = (token) => dispatch => {
    
    dispatch(requestEmployees());
  
    return fetch('https://gold-api-dev.chas.school/employees', {
        headers: {
        "Authorization": token
      }})
      .then(res => res.json())
      .then((users) => {
          return dispatch(recieveEmployees(users));
      })
      .catch(response => {
          console.error('An error occured when fetching the employee')
          return dispatch({ type: FETCH_EMPLOYEES_FAILURE })
      });
  }; 



  /* ------------ PRIVATE CUSTOMERS --------------- */    
export const requestPrivateCustomers = () => ({
    type: FETCH_CUSTOMERS_PRIVATE_START
});

export const recievePrivateCustomers = users => ({
    type: FETCH_CUSTOMERS_PRIVATE_SUCCESS,
    payload: users
});

export const fetchPrivateCustomers = (token) => dispatch => {
    
    dispatch(requestPrivateCustomers());
  
    return fetch('https://gold-api-dev.chas.school/customers/privates', {
        headers: {
        "Authorization": token
      }})
      .then(res => res.json())
      .then((users) => {
          return dispatch(recievePrivateCustomers(users));
      })
      .catch(response => {
          console.error('An error occured when fetching the private customers')
          return dispatch({ type: FETCH_CUSTOMERS_PRIVATE_FAILURE })
      });
  }; 


    /* ------------  COMPANIES --------------- */    
export const requestCompanies = () => ({
    type: FETCH_CUSTOMERS_COMPANIES_START
});

export const recieveCompanies = companies => ({
    type: FETCH_CUSTOMERS_COMPANIES_SUCCESS,
    payload: companies
});

export const fetchCompanies = (token) => dispatch => {
    
    dispatch(requestCompanies());
  
    return fetch('https://gold-api-dev.chas.school/customers/companies', {
        headers: {
        "Authorization": token
      }})
      .then(res => res.json())
      .then((companies) => {
          return dispatch(recieveCompanies(companies));
      })
      .catch(response => {
          console.error('An error occured when fetching the companies')
          return dispatch({ type: FETCH_CUSTOMERS_COMPANIES_FAILURE })
      });
  }; 