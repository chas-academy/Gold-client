import Cookies from "universal-cookie";
import {
	FETCH_SERVICES_START,
	FETCH_SERVICES_SUCCESS,
	FETCH_SERVICES_FAILURE,
	FETCH_ORDER_START,
	FETCH_ORDER_SUCCESS,
	FETCH_ORDER_FAILURE,
	ORDER_CREATE_START,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAILURE,
	FETCH_COMPLAINT_START,
	FETCH_COMPLAINT_SUCCESS,
	FETCH_COMPLAINT_FAILURE,
	COMPLAINT_CREATE_START,
	COMPLAINT_CREATE_SUCCESS,
	COMPLAINT_CREATE_FAILURE
} from "./Action-types";
  

  
/* ------------ GET SERVICES --------------- */
export const requestServices = () => ({
	type: FETCH_SERVICES_START
});

export const recieveServices = orders => ({
	type: FETCH_SERVICES_SUCCESS,
	payload: orders
});

export const fetchServices = (token, id) => dispatch => {
	dispatch(requestServices());
	
	debugger;
	return fetch(process.env.REACT_APP_API_BASE_URL + `/customer/${id}/services`, {
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
		return dispatch({ type: FETCH_SERVICES_FAILURE });
	});
};



/* ------------ GET ORDER --------------- */
export const requestOrder = () => ({
	type: FETCH_ORDER_START
});

export const recieveOrder = order => ({
	type: FETCH_ORDER_SUCCESS,
	payload: order
});

export const fetchOrder = (token, id) => dispatch => {
	dispatch(requestOrder());
	
	debugger;
	return fetch(process.env.REACT_APP_API_BASE_URL + `/orders/${id}`, {
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
		return dispatch({ type: FETCH_ORDER_FAILURE });
	});
};



/* ------------ CREATE ORDER --------------- */
export const startCreateOrder = () => ({
	type: ORDER_CREATE_START
});

export const failedCreateOrder = order => ({
	type: ORDER_CREATE_FAILURE,
	payload: order
});

export const createOrderSuccess = order => ({
	type: ORDER_CREATE_SUCCESS,
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
		return dispatch({ type: ORDER_CREATE_FAILURE });
	});
};



/* ------------ GET COMPLAINT --------------- */
export const requestComplaint = () => ({
	type: FETCH_COMPLAINT_START
});

export const recieveComplaint = complaint => ({
	type: FETCH_COMPLAINT_SUCCESS,
	payload: complaint
});

export const fetchComplaint = (token, id) => dispatch => {
	dispatch(requestComplaint());
	
	debugger;
	return fetch(process.env.REACT_APP_API_BASE_URL + `/complaints/${id}`, {
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
		return dispatch({ type: FETCH_COMPLAINT_FAILURE });
	});
};



/* ------------ CREATE COMPLAINT --------------- */
export const startCreateComplaint = () => ({
	type: COMPLAINT_CREATE_START
});

export const failedCreateComplaint = complaint => ({
	type: COMPLAINT_CREATE_FAILURE,
	payload: complaint
});

export const createComplaintSuccess = complaint => ({
	type: COMPLAINT_CREATE_SUCCESS,
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
  