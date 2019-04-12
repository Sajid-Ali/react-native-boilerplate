/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from '../reducers/loginReducer';

const selectLoginState = state => state.get('home', initialState);

const makeSelectLoginUser = () =>
  createSelector(selectLoginState, loginState => loginState.getIn(['user', 'data']));

export { selectLoginState, makeSelectLoginUser };
