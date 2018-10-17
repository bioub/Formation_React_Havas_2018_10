import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  } from './todos/reducers';
 
// Forme du state
/*
{
  newTodo: 'Acheter de',
  todos: [
    'Faire les courses',
    'Acheter du pain',
  ]
}
*/
 
 export const store = createStore(
  combineReducers({
    // newTodo, // idem que name
    // todos, // penser au changement immuable sur le tableau
  }),
  // preloaded state à supprimer à la fin
  {
    newTodo: 'Acheter de',
    todos: [
      'Faire les courses',
      'Acheter du pain',
    ]
  },
  composeWithDevTools()
);