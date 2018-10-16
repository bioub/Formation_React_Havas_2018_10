import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { count, name } from './reducers';

// Single source of truth

export const store = createStore(combineReducers({
  counter: count,
  name,
}), composeWithDevTools());