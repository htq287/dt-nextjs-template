import {

} from "./constants/actionTypes";

// How to use middleware in Redux:
// https://redux.js.org/advanced/middleware

const promiseMiddleware = store => next => action => {
  next(action);
};


const localStorageMiddleware = store => next => action => {
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export {promiseMiddleware, localStorageMiddleware}