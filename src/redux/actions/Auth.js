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
  message
});

export const loginUser = user => dispatch => {
  dispatch(requestLogin());

  return fetch('https://gold-api-dev.chas.school/login', {
    method: "POST",
    body: JSON.stringify(user.user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      const cookies = new Cookies();
      cookies.set("token", res.token, { path: "/", maxAge: 86399 });
      var token = cookies.get("token");
      console.log(
        JSON.parse(
          window.atob(
            token
              .split(".")[1]
              .replace("-", "+")
              .replace("_", "/")
          )
        )
      ); // decoded info from token
    });
};

export const requestRegister = creds => ({
  type: REGISTER_REQUEST,
  isFetching: true,
  authenticated: false,
  creds
});

export const recieveRegister = user => ({
  type: REGISTER_SUCCESS,
  isFetching: false,
  authenticated: true,
  id_token: user.id_token
});

export const RegisterError = message => ({
  type: REGISTER_FAILURE,
  isFetching: false,
  authenticated: false,
  message
});

export const registerUser = regUser => dispatch => {
  dispatch(requestRegister());

  return fetch('https://gold-api-dev.chas.school/register', {
    method: "POST",
    body: JSON.stringify(regUser.regUser),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    });
};

//     const request = {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     }

//     return fetch('/auth/register', request)
//     .then(res => res.json()
//     .then(user => ({ user, res }))
//     .then(({ user, res }) => {
//         if (!res.ok ) {
//             dispatch(loginError(user.message))
//             return Promise.reject(user)
//         } else {
//             localStorage.setItem('userId', user.user._id);
//             localStorage.setItem('username', user.user.username);
//             localStorage.setItem('token', user.token)
//         }
//         }).catch(err => console.error('Could not register user'))
//     )}
