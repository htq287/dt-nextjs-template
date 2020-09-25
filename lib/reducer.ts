import { combineReducers } from 'redux';
import commonReducer from './reducers/commonReducer';

const createRootReducer = () => combineReducers({
    common: commonReducer
  });
  
  export default createRootReducer;