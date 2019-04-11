import {USER_LOGIN_ACTION} from "./constants";

export function loginAction(data) {
  return {
    type: USER_LOGIN_ACTION,
    payload: data
  }

}
