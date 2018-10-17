import { CONTACTS_LOADED, CONTACTS_LOADING } from './constants';

const initialState = {
  loading: false,
  items: []
};

export const contacts = (state = initialState, { type, payload}) => {
  switch (type) {
    case CONTACTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONTACTS_LOADED:
      return {
        loading: false,
        items: payload,
      };
    default:
      return state;
  }
};