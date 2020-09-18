import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import infoReducer from './reducers/infoReducer';
import categoriesReducer from './reducers/categoriesReducer';

export const rootReducer = combineReducers({
  authReducer,
  infoReducer,
  categoriesReducer
});