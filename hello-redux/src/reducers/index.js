import { COUNTER_INCREMENT } from "../constants";

/*
export const count = (previousState = { count: 0, name: 'Romain' }, { type, val }) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return { ...previousState, count: previousState.count + val };
    case 'DECREMENT':
      return { ...previousState, count: previousState.count - val };
  }

  return previousState;
};
*/

export const count = (previousState = 0, { type, val }) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return previousState + val;
  }

  return previousState;
};


export const name = (previousState = 'Romain', { type, val }) => {
  switch (type) {
    case 'NAME_CHANGE':
      return val;
  }

  return previousState;
};