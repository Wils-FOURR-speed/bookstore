import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="right">
        <Link to="/">
          <h2>Book-State</h2>
        </Link>

        <Link to="/categories">
          <h2>Book-List</h2>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
