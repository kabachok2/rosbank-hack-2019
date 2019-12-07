import React from "react";
import "./App.css";
import Router from "../Router";

import rootSaga from "../../workflows/sagas";
import createReduxStore from "../../workflows/reducers/index";
import { Provider } from "react-redux";

const store = createReduxStore();
store.runSaga(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
