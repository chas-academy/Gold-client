import Cookies from "universal-cookie";
import {
	FETCH_SERVICES_GET_START,
	FETCH_SERVICES_GET_SUCCESS,
	FETCH_SERVICES_GET_FAILURE,
	FETCH_ORDER_GET_START,
	FETCH_ORDER_GET_SUCCESS,
	FETCH_ORDER_GET_FAILURE,
	FETCH_ORDER_CREATE_START,
	FETCH_ORDER_CREATE_SUCCESS,
	FETCH_ORDER_CREATE_FAILURE,
	FETCH_COMPLAINT_GET_START,
	FETCH_COMPLAINT_GET_SUCCESS,
	FETCH_COMPLAINT_GET_FAILURE,
	FETCH_COMPLAINT_CREATE_START,
	FETCH_COMPLAINT_CREATE_SUCCESS,
	FETCH_COMPLAINT_CREATE_FAILURE
} from "./Action-types";
  

  
/* ------------ GET SERVICES --------------- */
export const requestServices = () => ({
	type: FETCH_SERVICES_GET_START
});

export const recieveServices = orders => ({
	type: FETCH_SERVICES_GET_SUCCESS,
	payload: orders
});

export const fetchServices = token => dispatch => {
	dispatch(requestServices());
	
	debugger;
	return fetch(process.env.REACT_APP_API_BASE_URL + "/customer/id/services", {
		headers: {
			"Authorization": token
		}
	})
	.then(res => res.json())
	.then(orders => {
		return dispatch(recieveServices(orders));
	})
	.catch(response => {
		console.error("An error occured when fetching the services");
		return dispatch({ type: FETCH_SERVICES_GET_FAILURE });
	});
};



/* ------------ GET ORDER --------------- */
export const requestOrder = () => ({
	type: FETCH_ORDER_GET_START
});

export const recieveOrder = order => ({
	type: FETCH_ORDER_GET_SUCCESS,
	payload: order
});

export const fetchOrder = token => dispatch => {
	dispatch(requestOrder());
	
	debugger;
	return fetch(process.env.REACT_APP_API_BASE_URL + "/orders/:id", {
		headers: {
			"Authorization": token
		}
	})
	.then(res => res.json())
	.then(order => {
		return dispatch(recieveOrder(order));
	})
	.catch(response => {
		console.error("An error occured when fetching the order");
		return dispatch({ type: FETCH_ORDER_GET_FAILURE });
	});
};



/* ------------ CREATE ORDER --------------- */
export const startCreateOrder = () => ({
	type: FETCH_ORDER_CREATE_START
});

export const failedCreateOrder = order => ({
	type: FETCH_ORDER_CREATE_FAILURE,
	payload: order
});

export const createOrderSuccess = order => ({
	type: FETCH_ORDER_CREATE_SUCCESS,
	payload: order
});

export const createOrder = form => dispatch => {
	dispatch(startCreateOrder());
	
	const cookies = new Cookies();
	const token = cookies.get('token')
	return fetch(process.env.REACT_APP_API_BASE_URL + "/orders/create", {
		method: "POST",
			body: form.form,
			headers: {
				"Authorization": token
			}
	})
	.then(res => res.json())
	.then(res => {
		if (res.error) {
			return dispatch(failedCreateOrder(res.error));
		} else {
			return dispatch(createOrderSuccess(res.message));
		}
	})
	.catch(response => {
		return dispatch({ type: FETCH_ORDER_CREATE_FAILURE });
	});
};



/* ------------ GET COMPLAINT --------------- */
export const requestComplaint = () => ({
	type: FETCH_COMPLAINT_GET_START
});

export const recieveComplaint = complaint => ({
	type: FETCH_COMPLAINT_GET_SUCCESS,
	payload: complaint
});

export const fetchComplaint = token => dispatch => {
	dispatch(requestComplaint());
	
	debugger;
	return fetch(process.env.REACT_APP_API_BASE_URL + "/complaints/:id", {
		headers: {
			"Authorization": token
		}
	})
	.then(res => res.json())
	.then(complaint => {
		return dispatch(recieveComplaint(complaint));
	})
	.catch(response => {
		console.error("An error occured when fetching the complaint");
		return dispatch({ type: FETCH_COMPLAINT_GET_FAILURE });
	});
};



/* ------------ CREATE COMPLAINT --------------- */
export const startCreateComplaint = () => ({
	type: FETCH_COMPLAINT_CREATE_START
});

export const failedCreateComplaint = complaint => ({
	type: FETCH_COMPLAINT_CREATE_FAILURE,
	payload: complaint
});

export const createComplaintSuccess = complaint => ({
	type: FETCH_COMPLAINT_CREATE_SUCCESS,
	payload: complaint
});

export const createComplaint = form => dispatch => {
	dispatch(startCreateComplaint());
	
	const cookies = new Cookies();
	const token = cookies.get('token')
	return fetch(process.env.REACT_APP_API_BASE_URL + "/complaint/create", {
		method: "POST",
			body: form.form,
			headers: {
				"Authorization": token
			}
	})
	.then(res => res.json())
	.then(res => {
	if (res.error) {
		return dispatch(failedCreateComplaint(res.error));
	} else {
		return dispatch(createComplaintSuccess(res.message));
	}
	})
};
  