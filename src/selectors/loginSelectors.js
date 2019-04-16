/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from '../reducers/loginReducer';

const selectLoginState = state => state.get('user', initialState);

const makeSelectLoginUser = () =>
  createSelector(selectLoginState, loginState =>
    loginState.get('user'));

export { selectLoginState, makeSelectLoginUser };
