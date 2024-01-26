import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { contacts: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        const hasContact = state.contacts.some(
          ({ name }) =>
            name.toLowerCase().trim() === payload.name.toLowerCase().trim()
        );

        if (hasContact) {
          alert(`${payload.name} is already in contacts`);
          return;
        }

        state.contacts.push({ ...payload, id: nanoid() });
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
