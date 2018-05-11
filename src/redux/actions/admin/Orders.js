import {
  FETCH_SERVICES_START,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_NEW_START,
  FETCH_SERVICES_NEW_SUCCESS,
  FETCH_SERVICES_NEW_FAILURE,
  FETCH_SERVICES_ASSIGNED_START,
  FETCH_SERVICES_ASSIGNED_SUCCESS,
  FETCH_SERVICES_ASSIGNED_FAILURE,
  FETCH_SERVICES_TAKEN_START,
  FETCH_SERVICES_TAKEN_SUCCESS,
  FETCH_SERVICES_TAKEN_FAILURE,
  FETCH_SERVICES_DONE_START,
  FETCH_SERVICES_DONE_SUCCESS,
  FETCH_SERVICES_DONE_FAILURE,
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

/* ------------ SERVICES --------------- */

export const requestServices = () => ({
  type: FETCH_SERVICES_START
});

export const recieveServices = orders => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: orders
});

export const fetchServices = token => dispatch => {
  dispatch(requestServices());

  return fetch("https://gold-api-dev.chas.school/services", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(orders => {
      return dispatch(recieveServices(orders));
    })
    .catch(response => {
      console.error("An error occured when fetching the services");
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
      console.error("An error occured when fetching the order");
      return dispatch({ type: FETCH_SERVICES_NEW_FAILURE });
    });
};

/* ------------ SERVICES ASSIGNED --------------- */

export const requestServicesAssigned = () => ({
  type: FETCH_SERVICES_ASSIGNED_START
});

export const recieveServicesAssigned = orders => ({
  type: FETCH_SERVICES_ASSIGNED_SUCCESS,
  payload: orders
});

export const fetchServicesAssigned = token => dispatch => {
  dispatch(requestServicesAssigned());

  return fetch("https://gold-api-dev.chas.school/services/assigned", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(orders => {
      return dispatch(recieveServicesAssigned(orders));
    })
    .catch(response => {
      console.error("An error occured when fetching the order");
      return dispatch({ type: FETCH_SERVICES_ASSIGNED_FAILURE });
    });
};

/* ------------ SERVICES TAKEN --------------- */

export const requestServicesTaken = () => ({
  type: FETCH_SERVICES_TAKEN_START
});

export const recieveServicesTaken = orders => ({
  type: FETCH_SERVICES_TAKEN_SUCCESS,
  payload: orders
});

export const fetchServicesTaken = token => dispatch => {
  dispatch(requestServicesTaken());

  return fetch("https://gold-api-dev.chas.school/services/taken", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(orders => {
      return dispatch(recieveServicesTaken(orders));
    })
    .catch(response => {
      console.error("An error occured when fetching the order");
      return dispatch({ type: FETCH_SERVICES_TAKEN_FAILURE });
    });
};

/* ------------ SERVICES DONE --------------- */

export const requestServicesDone = () => ({
  type: FETCH_SERVICES_DONE_START
});

export const recieveServicesDone = orders => ({
  type: FETCH_SERVICES_DONE_SUCCESS,
  payload: orders
});

export const fetchServicesDone = token => dispatch => {
  dispatch(requestServicesDone());

  return fetch("https://gold-api-dev.chas.school/services/done", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(orders => {
      return dispatch(recieveServicesDone(orders));
    })
    .catch(response => {
      console.error("An error occured when fetching the order");
      return dispatch({ type: FETCH_SERVICES_DONE_FAILURE });
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

export const fetchOrder = token => dispatch => {
  dispatch(requestOrder());

  return fetch("https://gold-api-dev.chas.school/orders/:id", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(order => {
      return dispatch(recieveOrder(order));
    })
    .catch(response => {
      console.error("An error occured when fetching the order");
      return dispatch({ type: FETCH_ORDER_FAILURE });
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

  return fetch("https://gold-api-dev.chas.school/orders", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(orders => {
      return dispatch(recieveOrders(orders));
    })
    .catch(response => {
      console.error("An error occured when fetching the orders");
      return dispatch({ type: FETCH_ORDERS_FAILURE });
    });
};

/* ------------ INTERNAL ORDER --------------- */

export const requestInternalOrder = () => ({
  type: FETCH_INTERNAL_ORDER_START
});

export const recieveInternalOrder = order => ({
  type: FETCH_INTERNAL_ORDER_SUCCESS,
  payload: order
});

export const fetchInternalOrder = token => dispatch => {
  dispatch(requestInternalOrder());

  return fetch("https://gold-api-dev.chas.school/int_orders/:id", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(order => {
      return dispatch(recieveInternalOrder(order));
    })
    .catch(response => {
      console.error("An error occured when fetching the internal order");
      return dispatch({ type: FETCH_INTERNAL_ORDER_FAILURE });
    });
};

/* ------------INTERNAL ORDERS --------------- */

export const requestInternalOrders = () => ({
  type: FETCH_INTERNAL_ORDERS_START
});

export const recieveInternalOrders = orders => ({
  type: FETCH_INTERNAL_ORDERS_SUCCESS,
  payload: orders
});

export const fetchInternalOrders = token => dispatch => {
  dispatch(requestInternalOrders());

  return fetch("https://gold-api-dev.chas.school/int_orders", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(orders => {
      return dispatch(recieveInternalOrders(orders));
    })
    .catch(response => {
      console.error("An error occured when fetching the orders");
      return dispatch({ type: FETCH_INTERNAL_ORDERS_FAILURE });
    });
};

/* ------------ COMPLAINT --------------- */

export const requestComplaint = () => ({
  type: FETCH_COMPLAINT_START
});

export const recieveComplaint = order => ({
  type: FETCH_COMPLAINT_SUCCESS,
  payload: order
});

export const fetchComplaint = token => dispatch => {
  dispatch(requestComplaint());

  return fetch("https://gold-api-dev.chas.school/complaints/:id", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(order => {
      return dispatch(recieveComplaint(order));
    })
    .catch(response => {
      console.error("An error occured when fetching the complaint");
      return dispatch({ type: FETCH_COMPLAINT_FAILURE });
    });
};

/* ------------ COMPLAINTS --------------- */

export const requestComplaints = () => ({
  type: FETCH_COMPLAINTS_START
});

export const recieveComplaints = orders => ({
  type: FETCH_COMPLAINTS_SUCCESS,
  payload: orders
});

export const fetchComplaints = token => dispatch => {
  dispatch(requestComplaints());

  return fetch("https://gold-api-dev.chas.school/complaints", {
    headers: {
      Authorization: token
    }
  })
    .then(res => res.json())
    .then(orders => {
      return dispatch(recieveComplaints(orders));
    })
    .catch(response => {
      console.error("An error occured when fetching the complaints");
      return dispatch({ type: FETCH_COMPLAINTS_FAILURE });
    });
};
