import {
    FETCH_CUSTOMER_SERVICE_START,
    FETCH_CUSTOMER_SERVICE_SUCCESS,
    FETCH_CUSTOMER_SERVICE_FAILURE,
    FETCH_CUSTOMER_SERVICES_START,
    FETCH_CUSTOMER_SERVICES_SUCCESS,
    FETCH_CUSTOMER_SERVICES_FAILURE,
    FETCH_CUSTOMER_SERVICES_NEW_START,
    FETCH_CUSTOMER_SERVICES_NEW_SUCCESS,
    FETCH_CUSTOMER_SERVICES_NEW_FAILURE,
    FETCH_CUSTOMER_SERVICES_ASSIGNED_START,
    FETCH_CUSTOMER_SERVICES_ASSIGNED_SUCCESS,
    FETCH_CUSTOMER_SERVICES_ASSIGNED_FAILURE,
    FETCH_CUSTOMER_SERVICES_TAKEN_START,
    FETCH_CUSTOMER_SERVICES_TAKEN_SUCCESS,
    FETCH_CUSTOMER_SERVICES_TAKEN_FAILURE,
    FETCH_CUSTOMER_SERVICES_DONE_START,
    FETCH_CUSTOMER_SERVICES_DONE_SUCCESS,
    FETCH_CUSTOMER_SERVICES_DONE_FAILURE
} from './Action-types';

/* ------------ SERVICE --------------- */

export const requestService = () => ({
    type: FETCH_CUSTOMER_SERVICE_START
  });
  
  export const recieveService = service => ({
    type: FETCH_CUSTOMER_SERVICE_SUCCESS,
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
        return dispatch({ type: FETCH_CUSTOMER_SERVICE_FAILURE });
      });
  };
  
  
  /* ------------ SERVICES --------------- */
  
  export const requestServices = () => ({
    type: FETCH_CUSTOMER_SERVICES_START
  });
  
  export const recieveServices = services => ({
    type: FETCH_CUSTOMER_SERVICES_SUCCESS,
    payload: services
  });
  
  export const fetchServices = token => dispatch => {
    dispatch(requestServices());
  
    return fetch("https://gold-api-dev.chas.school/services", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(services => {
        return dispatch(recieveServices(services));
      })
      .catch(response => {
        console.error("An error occured when fetching the services");
        return dispatch({ type: FETCH_CUSTOMER_SERVICES_FAILURE });
      });
  };
  
  /* ------------ SERVICES NEW --------------- */
  
  export const requestServicesNew = () => ({
    type: FETCH_CUSTOMER_SERVICES_NEW_START
  });
  
  export const recieveServicesNew = servicesNew => ({
    type: FETCH_CUSTOMER_SERVICES_NEW_SUCCESS,
    payload: servicesNew
  });
  
  export const fetchServicesNew = token => dispatch => {
    dispatch(requestServicesNew());
  
    return fetch("https://gold-api-dev.chas.school/services/new", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(servicesNew => {
        return dispatch(recieveServicesNew(servicesNew));
      })
      .catch(response => {
        console.error("An error occured when fetching the new services");
        return dispatch({ type: FETCH_CUSTOMER_SERVICES_NEW_FAILURE });
      });
  };
  
  /* ------------ SERVICES ASSIGNED --------------- */
  
  export const requestServicesAssigned = () => ({
    type: FETCH_CUSTOMER_SERVICES_ASSIGNED_START
  });
  
  export const recieveServicesAssigned = servicesAssigned => ({
    type: FETCH_CUSTOMER_SERVICES_ASSIGNED_SUCCESS,
    payload: servicesAssigned
  });
  
  export const fetchServicesAssigned = token => dispatch => {
    dispatch(requestServicesAssigned());
  
    return fetch("https://gold-api-dev.chas.school/services/assigned", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(servicesAssigned => {
        return dispatch(recieveServicesAssigned(servicesAssigned));
      })
      .catch(response => {
        console.error("An error occured when fetching the assigned services");
        return dispatch({ type: FETCH_CUSTOMER_SERVICES_ASSIGNED_FAILURE });
      });
  };
  
  /* ------------ SERVICES TAKEN --------------- */
  
  export const requestServicesTaken = () => ({
    type: FETCH_CUSTOMER_SERVICES_TAKEN_START
  });
  
  export const recieveServicesTaken = servicesTaken => ({
    type: FETCH_CUSTOMER_SERVICES_TAKEN_SUCCESS,
    payload: servicesTaken
  });
  
  export const fetchServicesTaken = token => dispatch => {
    dispatch(requestServicesTaken());
  
    return fetch("https://gold-api-dev.chas.school/services/taken", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(servicesTaken => {
        return dispatch(recieveServicesTaken(servicesTaken));
      })
      .catch(response => {
        console.error("An error occured when fetching the services taken");
        return dispatch({ type: FETCH_CUSTOMER_SERVICES_TAKEN_FAILURE });
      });
  };
  
  /* ------------ SERVICES DONE --------------- */
  
  export const requestServicesDone = () => ({
    type: FETCH_CUSTOMER_SERVICES_DONE_START
  });
  
  export const recieveServicesDone = servicesDone => ({
    type: FETCH_CUSTOMER_SERVICES_DONE_SUCCESS,
    payload: servicesDone
  });
  
  export const fetchServicesDone = token => dispatch => {
    dispatch(requestServicesDone());
  
    return fetch("https://gold-api-dev.chas.school/services/done", {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(servicesDone => {
        return dispatch(recieveServicesDone(servicesDone));
      })
      .catch(response => {
        console.error("An error occured when fetching the services");
        return dispatch({ type: FETCH_CUSTOMER_SERVICES_DONE_FAILURE });
      });
  };