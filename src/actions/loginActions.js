import { USER_LOGIN_REQUEST } from "./constants";

export default function loginAction (data) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: data,
  };
}
