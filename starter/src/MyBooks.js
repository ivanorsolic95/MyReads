import { useState, useEffect } from "react";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MyBooks = ({ books, getBooks }) => {
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  const filterBooks = async (bookshelf) => {
    const filteredBooks = books.filter((book) => book.shelf === bookshelf);
    if (bookshelf === "currentlyReading") {
      setCurrentlyReadingBooks(filteredBooks);
    }
    if (bookshelf === "wantToRead") {
      setWantToReadBooks(filteredBooks);
    }
    if (bookshelf === "read") {
      setReadBooks(filteredBooks);
    }
  };

  useEffect(() => {
    filterBooks("currentlyReading");
    filterBooks("wantToRead");
    filterBooks("read");
  }, [books]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            bookshelfBooks={currentlyReadingBooks}
            shelfName="Currently Reading"
            getBooks={getBooks}
          />
          <Bookshelf
            bookshelfBooks={wantToReadBooks}
            shelfName="Want to Read"
            getBooks={getBooks}
          />
          <Bookshelf
            bookshelfBooks={readBooks}
            shelfName="Read"
            getBooks={getBooks}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="open-search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

MyBooks.propTypes = {
  books: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired,
};


export default MyBooks;
