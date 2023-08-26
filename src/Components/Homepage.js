import React from 'react';
import BookList from './Books';
import BookForm from './AddBook';
import '../Styles/AddBook.css';

const BookContainer = () => (
  <div className="home">
    <BookList />
    <hr />
    <BookForm />
  </div>
);

export default BookContainer;
