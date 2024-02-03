import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/logout', credentials);
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk('/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    token.set(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
