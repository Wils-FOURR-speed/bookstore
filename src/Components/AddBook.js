import React from 'react';

function AddBook() {
  return (
    <div>
      <p>ADD A NEW BOOK</p>
      <form>
        <input type="text" placeholder="Book's Title" />
        <input type="text" placeholder="Book's Author" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
