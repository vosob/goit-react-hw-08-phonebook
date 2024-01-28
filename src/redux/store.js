import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const reducer = {
  contact: contactReducer,
  filter: filterReducer,
};

// const getItemLS = () => {
//   const storedContacts = localStorage.getItem('contacts');
//   return storedContacts ? JSON.parse(storedContacts) : {};
// };

export const store = configureStore({
  reducer,
  // preloadedState: getItemLS(),
});

// store.subscribe(() => {
//   const state = store.getState();
//   localStorage.setItem('contacts', JSON.stringify(state));
// });
