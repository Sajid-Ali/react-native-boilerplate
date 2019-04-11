import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setupRNListener } from 'react-native-redux-listener';
import createSagaMiddleware from 'redux-saga'

import { combineReducers } from 'redux';

import rootReducer from '../reducers';
// import sagas from './sagas'

const getRootReducer = () => {
  return combineReducers({
    user: { name: "SAJID ALI", email: "test_1@example.com"},
    profile: { img_urs: 'tes/asa/asa', status: "login" }
  })
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  //inject store enhancer
  setupRNListener({
    monitorAppState: true,
    monitorNetInfo: true,
    monitorKeyboard: true,
    monitorDeepLinks: true,
    monitorBackButton: true,
  }),
  applyMiddleware(sagaMiddleware),
);

// then run the saga
// sagaMiddleware.run(sagas)

export default createStore(
  rootReducer(),
  composeWithDevTools(enhancer),
)
