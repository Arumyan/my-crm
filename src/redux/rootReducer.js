import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import infoReducer from './reducers/infoReducer';

export const rootReducer = combineReducers({
  authReducer,
  infoReducer
});