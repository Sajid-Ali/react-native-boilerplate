import axios from "axios";
import { takeEvery, all, put } from "redux-saga/effects";

import * as actions from "../actions/loginActions";
import * as constants from "../actions/constants";

function* loginAction (action) {
  try {
    const response = yield axios.post("https://reqres.in/api/login", action.payload);
    yield put(actions.loginSuccess(response.data));
  } catch (error) {
    yield put(actions.loginFailure(error.message));
  }
}

function* watchAll () {
  yield all([takeEvery(constants.USER_LOGIN_REQUEST, loginAction)]);
}

export default watchAll;
