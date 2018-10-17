import axios from 'axios';
import { CONTACTS_LOADED, CONTACTS_LOADING } from './constants';

export const fetchContacts = () => {
  return function(dispatch) {
    // voir aussi redux-saga
    dispatch(contactsLoading());
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      dispatch(contactsLoaded(res.data));
    });
  }
};

export const contactsLoading = () => ({ type: CONTACTS_LOADING });
export const contactsLoaded = (payload) => ({ type: CONTACTS_LOADED, payload });