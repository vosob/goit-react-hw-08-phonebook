import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65b422c1770d43aba47af427.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(`Error fetching contacts: ${error.message}`);
    }
  }
);
// Додавання контактів
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      await dispatch(fetchContacts());
      return response.data;
    } catch (error) {
      return rejectWithValue(`Error adding contact: ${error.message}`);
    }
  }
);
// Видалення контактів
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      await dispatch(fetchContacts());

      return contactId;
    } catch (error) {
      return rejectWithValue(`Error deleting contact: ${error.message}`);
    }
  }
);
