import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./constants";

export function loginRequest (data) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: data,
  };
}

export function loginSuccess (data) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFailure () {
  return {
    type: USER_LOGIN_FAILURE,
  };
}
