import React from 'react';
import BookList from './Books';
import BookForm from './AddBook';

const BookContainer = () => (
  <>
    <BookList />
    <hr />
    <BookForm />
  </>
);

export default BookContainer;
