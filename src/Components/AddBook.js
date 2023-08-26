import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleEditInput = (event) => {
    const { name, value } = event.target;
    setNewBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBookAdding = async () => {
    if (newBook.title && newBook.author && newBook.category) {
      const thatMoment = new Date().getTime();
      const bookToBeAdded = {
        item_id: thatMoment.toString(),
        ...newBook,
      };
      await dispatch(addBookAsync(bookToBeAdded));
      setNewBook({
        title: '',
        author: '',
        category: '',
      });
    }
  };

  return (
    <div>
      <p>ADD A NEW BOOK</p>
      <form>
        <input type="text" placeholder="Book's Title" value={newBook.title} onChange={handleEditInput} />
        <input type="text" placeholder="Book's Author" value={newBook.author} onChange={handleEditInput} />
        <input type="text" placeholder="Book's Category" value={newBook.category} onChange={handleEditInput} />
        <button type="button" onClick={handleBookAdding}>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
