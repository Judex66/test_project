import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";
import { usersApi } from "../usersApi"; 

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, usersApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

if (module.hot) {
  module.hot.accept("../reducers", () => {
    const nextRootReducer = require("../reducers").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;