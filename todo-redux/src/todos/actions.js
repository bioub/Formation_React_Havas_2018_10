import { TODO_CHANGE, TODO_ADD, TODO_REMOVE } from "./constants";

export const todoChange = (payload = '') => ({
  type: TODO_CHANGE,
  payload,
});

export const todoAdd = (payload = '') => ({
  type: TODO_ADD,
  payload,
});

export const todoRemove = (payload = 0) => ({
  type: TODO_REMOVE,
  payload,
});