import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

export default function index () {
  return combineReducers({
    user: loginReducer,
  });
};
