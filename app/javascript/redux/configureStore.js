import { configureStore } from "@reduxjs/toolkit";
import greetingReducer, { fetchGreeting } from "./greetingReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: greetingReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(fetchGreeting);

export default store;
