import Cookies from "universal-cookie";


import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "./Action-types";

export const requestLogin = creds => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  authenticated: false,
  creds
});

export const recieveLogin = user => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  authenticated: true
});

export const loginError = message => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  authenticated: false,
  message:message
});

export const loginUser = user => dispatch => {
  dispatch(requestLogin());

  return fetch(process.env.REACT_APP_API_BASE_URL+`/login`, {
    method: "POST",
    body: JSON.stringify(user.user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if(res.status === 200) {
        return res.json();
      }
      else {
        dispatch(loginError("could not connect to server check you internet connection"));
      }
    })
    .then(res => {
      if (res.error) {
        dispatch(loginError(res.error))
        return res.error
      } else {
        const cookies = new Cookies();
        cookies.set("token", res.token, { path: "/", maxAge: 86399 });
      }
    });
};

export const requestRegister = creds => ({
  type: REGISTER_REQUEST,
  isFetching: true,
  creds
});

export const recieveRegister = user => ({
  type: REGISTER_SUCCESS,
  isFetching: false,
  id_token: user.id_token
});

export const RegisterError = message => ({
  type: REGISTER_FAILURE,
  isFetching: false,
  message:message
});

export const registerUser = regUser => dispatch => {
  dispatch(requestRegister());

  var error = { name: "ValidationError", errors: [] }
  if (regUser.regUser.address.length < 1) {
    error.errors.push({ message: ' '})
    return fetch(process.env.REACT_APP_API_BASE_URL + "/", {}).then(() => { return error })
  }

  return fetch(process.env.REACT_APP_API_BASE_URL + "/register", {
    method: "POST",
    body: JSON.stringify(regUser.regUser),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        dispatch(RegisterError(res.error))
        return res.error
      }
      else {
        const cookies = new Cookies();
        cookies.set("token", res.token, { path: "/", maxAge: 86399 });
      }
    });
};


