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
    FETCH_CUSTOMER_START, 
    FETCH_CUSTOMER_SUCCESS, 
    FETCH_CUSTOMER_FAILURE,
    UPDATE_CUSTOMER_START, 
    UPDATE_CUSTOMER_SUCCESS, 
    UPDATE_CUSTOMER_FAILURE,
    FETCH_USER_START, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE,
    FETCH_USERS_START, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE,
    UPDATE_USER_START, 
    UPDATE_USER_SUCCESS, 
    UPDATE_USER_FAILURE,
    CREATE_USER_START, 
    CREATE_USER_SUCCESS, 
    CREATE_USER_FAILURE,
 } from './Action-types';

 /* ------------ CREATE USER --------------- */    
export const CreateUserStart = () => ({
    type: CREATE_USER_START
});

export const SaveUser = user => ({
    type: CREATE_USER_SUCCESS,
    payload: user
});

export const CreateUser = (id, token) => dispatch => {
    
    dispatch(CreateUserStart());
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`, {
        headers: {
        "Authorization": token
      }})
      .then(res => {
          if(res.status === 200){
              return res.json();
          }
          else {
              return dispatch({ type: CREATE_USER_FAILURE })
          }
      })
      .then((user) => {
          return dispatch(SaveUser(user));
      })
      .catch(response => {
          return dispatch({ type: CREATE_USER_FAILURE,
                            message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling."})
      });
  }; 



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
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`, {
        headers: {
        "Authorization": token
      }})
      .then(res => {
          if(res.status === 200){
              return res.json();
          }
          else {
              return dispatch({ type: FETCH_USER_FAILURE,
                                message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
          }
      })
      .then((user) => {
          return dispatch(recieveUser(user));
          debugger;
      })
      .catch(response => {
          return dispatch({ type: FETCH_USER_FAILURE,
                            message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
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
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, {
        headers: {
            "Authorization": token
          }
    })
      .then(res => {
          if(res.status === 200){
              return res.json();
          }
          else {
            return dispatch({ type: FETCH_USERS_FAILURE,
                                 message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
          }
      })
      .then((users) => {
          return dispatch(recieveUsers(users));
      })
      .catch(response => {
          return dispatch({ type: FETCH_USERS_FAILURE,
                            message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling."})
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
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users/update/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
        "Authorization": token
      }})
      .then(res => {
          if(res.status === 200){
              return res.json();
          }
          else{ 
            return dispatch({ type: UPDATE_USER_FAILURE,
                                message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling."})
          }
      })
      .then((user) => {
          return dispatch(updateSuccess(user));
      })
      .catch(response => {
          return dispatch({ type: UPDATE_USER_FAILURE,
                            message: "kunde inte hämta användare" })
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
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/employees`, {
        headers: {
        "Authorization": token
      }})
      .then(res => {
          if(res.status === 200) {
              return res.json();
          }
          else {
            return dispatch({ type: FETCH_EMPLOYEES_FAILURE,
                                message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
          }
      })
      .then((users) => {
          return dispatch(recieveEmployees(users));
      })
      .catch(response => {
          return dispatch({ type: FETCH_EMPLOYEES_FAILURE,
                            message: "Något Gick fill med att hämta informationen"})
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
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/customers/privates`, {
        headers: {
        "Authorization": token
      }})
      .then(res => {
          if(res.status === 200){
              return res.json();
          }
          else {
            return dispatch({ type: FETCH_CUSTOMERS_PRIVATE_FAILURE,
                              message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
          }
      })
      .then((users) => {
          return dispatch(recievePrivateCustomers(users));
      })
      .catch(response => {
          return dispatch({ type: FETCH_CUSTOMERS_PRIVATE_FAILURE,
                            message:"det var ett problem att hämta kunder" })
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
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/customers/companies`, {
        headers: {
        "Authorization": token
      }})
      .then(res => {
          if(res.status === 200){
              return res.json();
          }
          else {
               return dispatch({ type: FETCH_CUSTOMERS_COMPANIES_FAILURE,
                                 message:"Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
          }
      })
      .then((companies) => {
          return dispatch(recieveCompanies(companies));
      })
      .catch(response => {
          return dispatch({ type: FETCH_CUSTOMERS_COMPANIES_FAILURE,
                            message:"Kunde inte hämta kunder företag." })
      });
  }; 


/* ------------ CUSTOMER --------------- */    
export const requestCustomer = () => ({
    type: FETCH_CUSTOMER_START
});

export const recieveCustomer = customer => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customer
});

export const fetchCustomer = (id, token) => dispatch => {
    
    dispatch(requestCustomer());
  
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/customers/${id}`, {
        headers: {
        "Authorization": token
      }})
      .then(res => {
          if(res.status === 200){
              return res.json();
          }
          else {
              return dispatch({ type: FETCH_CUSTOMER_FAILURE,
                                message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
          }
      })
      .then((customer) => {
          return dispatch(recieveCustomer(customer));
      })
      .catch(response => {
          return dispatch({ type: FETCH_CUSTOMER_FAILURE,
                            message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
      });
  };



    /* ------------ UPDATE CUSTOMER --------------- */    
    export const startUpdateCustomer = () => ({
        type: UPDATE_CUSTOMER_START
    });
    
    export const updateCustomerSuccess = customer => ({
        type: UPDATE_CUSTOMER_SUCCESS,
        payload: customer
    });
    
    export const updateCustomer = (customer, token) => dispatch => {
    
        debugger;
        
        dispatch(startUpdateCustomer());
      
        return fetch(`${process.env.REACT_APP_API_BASE_URL}/customers/update/${customer.id}`, {
            method: "PUT",
            body: JSON.stringify(customer),
            headers: {
            "Authorization": token
          }})
          .then(res => {
              if(res.status === 200) {
                  return res.json();
              }
              else {
                return dispatch({ type: UPDATE_CUSTOMER_FAILURE,
                                    message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." })
              }
          })
          .then((customer) => {
              return dispatch(updateCustomerSuccess(customer));
          })
          .catch(response => {
              return dispatch({ type: UPDATE_CUSTOMER_FAILURE,
                                message:"Kunde inte uppdatera kund" })
          });
      }; 
      