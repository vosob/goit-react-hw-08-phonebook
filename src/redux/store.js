import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/slice';
// import { createStore, combineReducers } from 'redux';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contact: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store);

export { persistor, store };
// const getItemLS = () => {
//   const storedContacts = localStorage.getItem('contacts');
//   return storedContacts ? JSON.parse(storedContacts) : {};
// };

// export const store = configureStore({
//   reducer,
//   // preloadedState: getItemLS(),
// });

// store.subscribe(() => {
//   const state = store.getState();
//   localStorage.setItem('contacts', JSON.stringify(state));
// });

// const reducer = combineReducers({
//   contact: contactReducer,
//   filter: filterReducer,
//   auth: authReducer,
// });
