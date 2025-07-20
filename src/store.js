import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/rootReducers.jsx";
import loggerMiddleware from './middlewares/logger-middleware.js';
import apiMiddleware from './middlewares/api-middleware.js';

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    apiMiddleware
  )
);

export default store;