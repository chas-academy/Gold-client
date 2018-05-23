import Cookies from "universal-cookie";
import {
	FETCH_SERVICES_START,
	FETCH_SERVICES_SUCCESS,
	FETCH_SERVICES_FAILURE,
	FETCH_SERVICE_START,
	FETCH_SERVICE_SUCCESS,
	FETCH_SERVICE_FAILURE,
	ORDER_CREATE_START,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAILURE,
	COMPLAINT_CREATE_START,
	COMPLAINT_CREATE_SUCCESS,
	COMPLAINT_CREATE_FAILURE
} from "./Action-types";
  

  
/* ------------ GET SERVICES --------------- */
export const requestServices = () => ({
	type: FETCH_SERVICES_START
});

export const recieveServices = services => ({
	type: FETCH_SERVICES_SUCCESS,
	payload: services
});

export const fetchServices = (token, id) => dispatch => {
	dispatch(requestServices());
	
	return fetch(process.env.REACT_APP_API_BASE_URL + `/customer/${id}/services`, {
		headers: {
			"Authorization": token
		}
	})
	.then(res => res.json())
	.then(services => {
		return dispatch(recieveServices(services));
	})
	.catch(response => {
		console.error("An error occured when fetching the services");
		return dispatch({ type: FETCH_SERVICES_FAILURE });
	});
};



/* ------------ GET SERVICE --------------- */
export const requestService = () => ({
	type: FETCH_SERVICE_START
});

export const recieveService = service => ({
	type: FETCH_SERVICE_SUCCESS,
	payload: service
});

export const fetchService = (token, id) => dispatch => {
	dispatch(requestService());
	
	return fetch(process.env.REACT_APP_API_BASE_URL + `/services/${id}`, {
		headers: {
			"Authorization": token
		}
	})
	.then(res => res.json())
	.then(service => {
		return dispatch(recieveService(service));
	})
	.catch(response => {
		console.error("An error occured when fetching the service");
		return dispatch({ type: FETCH_SERVICE_FAILURE });
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
	.catch(response => {
		return dispatch(failedCreateComplaint(response.error));
	});
};
  