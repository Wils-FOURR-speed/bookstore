/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GyLXdEA2xBmwAoU8RmQR/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(apiEndpoint);
  return response.data;
});

export const addBookAsync = createAsyncThunk('books/addBookAsync', async (book) => {
  const response = await axios.post(apiEndpoint, book);
  return response.data;
});

export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (itemId) => {
  await axios.delete(`${apiEndpoint}/${itemId}`);
  return itemId;
});
const initialState = {
  books: [],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksData = action.payload;

        const booksArray = Object.keys(booksData).map((item_id) => ({
          item_id,
          ...booksData[item_id][0],
        }));

        return {
          ...state,
          isLoading: false,
          books: booksArray,
        };
      })

      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addBookAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addBookAsync.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: [...state.books, action.payload],
      }))
      .addCase(addBookAsync.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(removeBookAsync.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const itemIdToRemove = action.payload;
        return {
          ...state,
          isLoading: false,
          books: state.books.filter((book) => book.item_id !== itemIdToRemove),
        };
      })
      .addCase(removeBookAsync.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default booksSlice.reducer;
