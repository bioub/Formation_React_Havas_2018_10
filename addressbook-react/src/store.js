import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { contacts } from './contacts/reducers';

// Format du state
/*
{
  contacts: {
    loading: true,
    items: [],
  }
}
*/

 export const store = createStore(
  combineReducers({
    contacts,
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);