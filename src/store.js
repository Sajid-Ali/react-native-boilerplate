import createSagaMiddleware from "redux-saga";
import { setupRNListener } from "react-native-redux-listener";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import sagas from "./sagas";

export default function configureStore () {
  /* ------------- Redux Configuration ------------- */
  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  /* ------------- Create Redux Store ------------- */
  const store = createStore(
    rootReducer(),
    composeWithDevTools(compose(
      ...enhancers,
      setupRNListener({
        monitorAppState: false,
        monitorNetInfo: true,
        monitorKeyboard: false,
        monitorDeepLinks: false,
        monitorBackButton: false,
      }),
    )),
  );

  /* -------------  Then Run Saga ------------- */
  sagaMiddleware.run(sagas);

  return store;
}
