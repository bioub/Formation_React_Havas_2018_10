import { COUNTER_INCREMENT, NAME_CHANGE } from "../constants";

/*
export const count = (previousState = { count: 0, name: 'Romain' }, { type, val }) => {
  switch (type) {
    case COUNTER_INCREMENT:
      return { ...previousState, counter: previousState.count + val };
    case NAME_CHANGE:
      return { ...previousState, name: val };;
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
    case NAME_CHANGE:
      return val;
  }

  return previousState;
};