import * as types from '../actions/constants';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  user: {
    data: null,
    loading: false,
    success: false,
  },
});

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return state.setIn(['user', 'data'], null).setIn(['user', 'loading'], true);
    case types.USER_LOGIN_SUCCESS:
      return state.setIn(['user', 'data'], action.payload).setIn(['user', 'loading'], false);
    case types.USER_LOGIN_FAILURE:
      return state.setIn(['user', 'error'], action.error).setIn(['user', 'loading'], false);
    case types.RESET_LOGIN_STATE:
      return initialState;
    default:
      return state
  }
}
