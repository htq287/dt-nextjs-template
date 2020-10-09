import { createStore, applyMiddleware } from 'redux';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
//import thunk from 'redux-thunk';

import { createLogger } from "redux-logger"
import { promiseMiddleware, localStorageMiddleware } from "./middleware";
import { routerMiddleware } from "connected-react-router"

import createRootReducer from './reducer';

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(null);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger());
  }
};

export interface State {
}

// export const store = (initialState = {}) => {
//   //return createStore(createRootReducer(), initialState, getMiddleware());
//   return createStore(createRootReducer(), initialState);
// };

// create a makeStore function
const makeStore: MakeStore<State> = (context: Context) => createStore(createRootReducer());

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, {debug: true});