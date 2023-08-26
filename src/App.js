import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import BooksCategory from './Components/Category';
import Navbar from './Components/Navigation';
import BookContainer from './Components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/author" element={<BooksCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
