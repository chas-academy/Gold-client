import { 
    FETCH_ORDER_START, 
    FETCH_ORDER_SUCCESS, 
    FETCH_ORDER_FAILURE,
    FETCH_ORDERS_START, 
    FETCH_ORDERS_SUCCESS, 
    FETCH_ORDERS_FAILURE,
 } from './Action-types';

/* ------------ ORDER --------------- */    
export const requestOrder = () => ({
    type: FETCH_ORDER_START
});

export const recieveOrder = order => ({
    type: FETCH_ORDER_SUCCESS,
    payload: order
});

export const fetchOrder = (token) => dispatch => {
    
    dispatch(requestOrder());
  
    debugger;
    return fetch('https://gold-api-dev.chas.school/orders/:id', token)
    .then(res => res.json())
    .then((order) => {
        return dispatch(recieveOrders(order));
      })
      .catch(response => {
          console.error('An error occured when fetching the order')
          return dispatch({ type: FETCH_ORDER_FAILURE })
      })
  };


/* ------------ ORDERS --------------- */    
export const requestOrders = () => ({
    type: FETCH_ORDERS_START
});

export const recieveOrders = orders => ({
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
});

export const fetchOrders = (token) => dispatch => {
    
    dispatch(requestOrders());
  
    return fetch('https://gold-api-dev.chas.school/orders', token)
    .then(res => res.json())
    .then((orders) => {
        return dispatch(recieveOrders(orders));
      })
      .catch(response => {
          console.error('An error occured when fetching the orders')
          return dispatch({ type: FETCH_ORDERS_FAILURE })
      })
  };


