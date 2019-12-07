import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import agentReducer from "./agent";

const rootReducer = combineReducers({ agentReducer });

export default function createReduxStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.runSaga = sagaMiddleware.run;

  return store;
}
