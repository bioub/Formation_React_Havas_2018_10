import { TODO_CHANGE, TODO_ADD, TODO_REMOVE } from "./constants";

export const newTodo = (state = '', { type, payload }) => {
  switch (type) {
    case TODO_CHANGE:
      return payload;
  }

  return state;
};

export const todos = (state = [], { type, payload }) => {
  switch (type) {
    case TODO_ADD:
      return [
        ...state,
        {text: payload, done: false, id: Math.floor(Math.random() * 10000)}
      ];
    case TODO_REMOVE:
      return [
        ...state.slice(0, payload),
        ...state.slice(payload + 1),
      ];
  }

  return state;
};