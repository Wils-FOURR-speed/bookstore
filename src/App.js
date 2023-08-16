import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import BooksList from './Components/BooksList';
import Navbar from './Components/Navigation';
import Books from './Components/BooksState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/author" element={<BooksList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
