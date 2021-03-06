import {
  FETCH_SERVICE_START,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICES_START,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_NEW_START,
  FETCH_SERVICES_NEW_SUCCESS,
  FETCH_SERVICES_NEW_FAILURE,
  FETCH_SERVICES_ASSIGNED_START,
  FETCH_SERVICES_ASSIGNED_SUCCESS,
  FETCH_SERVICES_ASSIGNED_FAILURE,
  FETCH_SERVICES_DONE_START,
  FETCH_SERVICES_DONE_SUCCESS,
  FETCH_SERVICES_DONE_FAILURE,
  SERVICE_HANDLE_START,
  SERVICE_HANDLE_SUCCESS,
  SERVICE_HANDLE_FAILURE,
  FETCH_ORDER_START,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_INTERNAL_ORDER_START,
  FETCH_INTERNAL_ORDER_SUCCESS,
  FETCH_INTERNAL_ORDER_FAILURE,
  FETCH_INTERNAL_ORDERS_START,
  FETCH_INTERNAL_ORDERS_SUCCESS,
  FETCH_INTERNAL_ORDERS_FAILURE,
  FETCH_COMPLAINT_START,
  FETCH_COMPLAINT_SUCCESS,
  FETCH_COMPLAINT_FAILURE,
  FETCH_COMPLAINTS_START,
  FETCH_COMPLAINTS_SUCCESS,
  FETCH_COMPLAINTS_FAILURE
} from "./Action-types";

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
    .then(res => res.json())
    .then(service => {
      return dispatch(recieveService(service));
    })
    .catch(response => {
      return dispatch({ type: FETCH_SERVICE_FAILURE });
    });
};


/* ------------ SERVICES --------------- */

export const requestServices = () => ({
  type: FETCH_SERVICES_START
});

export const recieveServices = services => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: services
});

export const fetchServices = token => dispatch => {
  dispatch(requestServices());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/services`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(services => {
      return dispatch(recieveServices(services));
    })
    .catch(response => {
      return dispatch({ type: FETCH_SERVICES_FAILURE });
    });
};

/* ------------ SERVICES NEW --------------- */

export const requestServicesNew = () => ({
  type: FETCH_SERVICES_NEW_START
});

export const recieveServicesNew = servicesNew => ({
  type: FETCH_SERVICES_NEW_SUCCESS,
  payload: servicesNew
});

export const fetchServicesNew = token => dispatch => {
  dispatch(requestServicesNew());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/services/new`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(servicesNew => {
      return dispatch(recieveServicesNew(servicesNew));
    })
    .catch(response => {
      return dispatch({ type: FETCH_SERVICES_NEW_FAILURE });
    });
};

/* ------------ SERVICES ASSIGNED --------------- */

export const requestServicesAssigned = () => ({
  type: FETCH_SERVICES_ASSIGNED_START
});

export const recieveServicesAssigned = servicesAssigned => ({
  type: FETCH_SERVICES_ASSIGNED_SUCCESS,
  payload: servicesAssigned
});

export const fetchServicesAssigned = token => dispatch => {
  dispatch(requestServicesAssigned());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/services/assigned`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(servicesAssigned => {
      return dispatch(recieveServicesAssigned(servicesAssigned));
    })
    .catch(response => {
      return dispatch({ type: FETCH_SERVICES_ASSIGNED_FAILURE });
    });
};


/* ------------ SERVICES DONE --------------- */

export const requestServicesDone = () => ({
  type: FETCH_SERVICES_DONE_START
});

export const recieveServicesDone = servicesDone => ({
  type: FETCH_SERVICES_DONE_SUCCESS,
  payload: servicesDone
});

export const fetchServicesDone = token => dispatch => {
  dispatch(requestServicesDone());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/services/done`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200) {
        return res.json();
      }
      else {
        return dispatch({ type: FETCH_SERVICES_DONE_FAILURE });
      }
    })
    .then(servicesDone => {
      return dispatch(recieveServicesDone(servicesDone));
    })
    .catch(response => {
      return dispatch({ type: FETCH_SERVICES_DONE_FAILURE });
    });
};


/* ------------ SERVICES HANDLE --------------- */

export const requestServicesHandle = () => ({
  type: SERVICE_HANDLE_START
});

export const ServicesHandleSuccess = servicesHandle => ({
  type: SERVICE_HANDLE_SUCCESS,
  payload: servicesHandle
});

export const fetchServicesHandle = (token, id, form) => dispatch => {
  dispatch(requestServicesHandle());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/services/${id}/handle`, {
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.message) {
        return dispatch(ServicesHandleSuccess(res.message));
      } else {
        return dispatch({ type: SERVICE_HANDLE_FAILURE, payload: res.error });
      }
    })
    .catch(response => {
      return dispatch({ type: SERVICE_HANDLE_FAILURE, payload: response.message });
    });
};

/* ------------ ORDER --------------- */

export const requestOrder = () => ({
  type: FETCH_ORDER_START
});

export const recieveOrder = order => ({
  type: FETCH_ORDER_SUCCESS,
  payload: order
});

export const fetchOrder = (token, id) => dispatch => {
  dispatch(requestOrder());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}orders/${id}`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      }
      else {
        return dispatch({ type: FETCH_ORDER_FAILURE });
      }
    })
    .then(order => {
      return dispatch(recieveOrder(order));
    })
    .catch(response => {
      return dispatch({ type: FETCH_ORDER_FAILURE,
                        message:"kunde inte hämta beställing" });
    });
};

/* ------------ ORDERS --------------- */

export const requestOrders = () => ({
  type: FETCH_ORDERS_START
});

export const recieveOrders = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders
});

export const fetchOrders = token => dispatch => {
  dispatch(requestOrders());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/orders`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200) {
        return res.json() 
      }
      else {
        return dispatch({ type: FETCH_ORDERS_FAILURE,
                        message: "Kunde inte Koppla till nätverket kontrollera internetuppkoppling." });
      }
    })
    .then(orders => {
      return dispatch(recieveOrders(orders));
    })
    .catch(response => {
      return dispatch({ type: FETCH_ORDERS_FAILURE ,
                        message:"kunde inte hämta beställingar" });
    });
};

/* ------------ INTERNAL ORDER --------------- */

export const requestInternalOrder = () => ({
  type: FETCH_INTERNAL_ORDER_START
});

export const recieveInternalOrder = internalOrder => ({
  type: FETCH_INTERNAL_ORDER_SUCCESS,
  payload: internalOrder
});

export const fetchInternalOrder = (token, id ) => dispatch => {
  dispatch(requestInternalOrder());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/int_orders/${id}`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json()
      }
      else {
        return dispatch({ type: FETCH_INTERNAL_ORDER_FAILURE,
                          message:"Kunde inte Koppla till nätverket kontrollera internetuppkoppling." });
      }
    })
    .then(internalOrder => {
      return dispatch(recieveInternalOrder(internalOrder));
    })
    .catch(response => {
      return dispatch({ type: FETCH_INTERNAL_ORDER_FAILURE,
                        message:"det var ett problem att hämta interna beställningar"  });
    });
};

/* ------------INTERNAL ORDERS --------------- */

export const requestInternalOrders = () => ({
  type: FETCH_INTERNAL_ORDERS_START
});

export const recieveInternalOrders = internalOrders => ({
  type: FETCH_INTERNAL_ORDERS_SUCCESS,
  payload: internalOrders
});

export const fetchInternalOrders = token => dispatch => {
  dispatch(requestInternalOrders());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/int_orders`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200) {
        return res.json();
      }
      else {
        return dispatch({ type: FETCH_INTERNAL_ORDERS_FAILURE,
                          message:"Kunde inte Koppla till nätverket kontrollera internetuppkoppling." });
      }
    })
    .then(internalOrders => {
      return dispatch(recieveInternalOrders(internalOrders));
    })
    .catch(response => {
      return dispatch({ type: FETCH_INTERNAL_ORDERS_FAILURE,
        message:"det var ett problem att hämta interna beställningar" });
    });
};

/* ------------ COMPLAINT --------------- */

export const requestComplaint = () => ({
  type: FETCH_COMPLAINT_START
});

export const recieveComplaint = complaint => ({
  type: FETCH_COMPLAINT_SUCCESS,
  payload: complaint
});

export const fetchComplaint = (token, id ) => dispatch => {
  dispatch(requestComplaint());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/complaints/${id}`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json();
      } 
      else {
        return dispatch({ type: FETCH_COMPLAINT_FAILURE,
                          message:"Kunde inte Koppla till nätverket kontrollera internetuppkoppling." });
      }
    })
    .then(complaint => {
      return dispatch(recieveComplaint(complaint));
    })
    .catch(response => {
      return dispatch({ type: FETCH_COMPLAINT_FAILURE,
        message:"Det var problem att hämta klagomål" });
    });
};

/* ------------ COMPLAINTS --------------- */

export const requestComplaints = () => ({
  type: FETCH_COMPLAINTS_START
});

export const recieveComplaints = complaints => ({
  type: FETCH_COMPLAINTS_SUCCESS,
  payload: complaints
});

export const fetchComplaints = token => dispatch => {
  dispatch(requestComplaints());

  return fetch(`${process.env.REACT_APP_API_BASE_URL}/complaints`, {
    headers: {
      Authorization: token
    }
  })
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
      else {
        return dispatch({ type: FETCH_COMPLAINTS_FAILURE,
                          message:"Kunde inte Koppla till nätverket kontrollera internetuppkoppling."});
      }
    })
    .then(complaints => {
      return dispatch(recieveComplaints(complaints));
    })
    .catch(response => {
      return dispatch({ type: FETCH_COMPLAINTS_FAILURE,
                        message: "det var problem att hämta klagomål" });
    });
};
