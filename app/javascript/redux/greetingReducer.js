import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_PATH = '/api/v1/hello'
const initialState = '';

const fetchGreetingFromAPI = async () => {
  const response = await axios.get(API_PATH);
  return response;
};

const fetchGreeting = createAsyncThunk(
  'FETCH_GREETING',
  async () => {
    const response = await fetchGreetingFromAPI();
    return response;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export { fetchGreeting, fetchGreetingFromAPI };

export default greetingSlice.reducer;
