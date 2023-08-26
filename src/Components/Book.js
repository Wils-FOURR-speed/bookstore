import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Book.css';

const Book = ({
  title, author, category, onDelete,
}) => (
  <div className="book">
    <div className="book-content">
      <div className="book-info">
        <span className="book-category">{category}</span>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <div className="action-buttons">
          <button className="button-outline" type="button">Comments</button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button" onClick={onDelete}>
            Delete
          </button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container"><div className="circular-progress" /></div>
        <div className="progress-stat">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
        </div>
      </div>
    </div>
  </div>

);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
