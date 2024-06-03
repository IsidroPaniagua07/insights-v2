import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk action for searching patron
export const searchPatron = createAsyncThunk(
  'patron/searchPatron',
  async (accountNumber, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8484/api/search/patron/${accountNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('API Response:', data); 
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  patron: null,
  loading: false,
  error: null,
};

const patronSlice = createSlice({
  name: 'patron',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPatron.pending, (state) => {
        console.log('searchPatron.pending')
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPatron.fulfilled, (state, action) => {
        console.log('searchPatron.fulfilled', action.payload);
        state.loading = false;
        state.patron = action.payload[0];
      })
      .addCase(searchPatron.rejected, (state, action) => {
        console.log('searchPatron.rejected', action.payload);
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default patronSlice.reducer;
