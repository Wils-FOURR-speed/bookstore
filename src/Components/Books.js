import React from 'react';
import PropTypes from 'prop-types';

function Books({ title, author, category }) {
  return (
    <div className="main">
      <h3>
        Title:
        {' '}
        {title}
      </h3>
      <h3>
        By:
        {' '}
        {author}
      </h3>
      <h3>
        Category:
        {' '}
        {category}
      </h3>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
