import thunk from "redux-thunk";
import { setupRNListener } from "react-native-redux-listener";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const enhancer = compose(
  setupRNListener({
    monitorAppState: false,
    monitorNetInfo: true,
    monitorKeyboard: false,
    monitorDeepLinks: false,
    monitorBackButton: false,
  }),
  applyMiddleware(thunk),
);

// export default createStore(
//   rootReducer(),
//   composeWithDevTools(enhancer),
// )


export default function configureStore () {
  return createStore(
    rootReducer(),
    composeWithDevTools(enhancer),
  );
}
