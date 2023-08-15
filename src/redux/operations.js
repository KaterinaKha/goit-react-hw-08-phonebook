import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const $instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    Authorization: `Bearer token...`,
  },
});

export const setToken = token => {
  $instance.defaults.headers['authorization'] = `Bearer ${token}`;
};
export const clearToken = () => {
  $instance.defaults.headers['authorization'] = '';
};

//----- registration -----
export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/signup', userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//----- login -----
export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/login', userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//----- refresh -----
export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const { data } = await $instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//----- logout -----
export const logOutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.post('/users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
