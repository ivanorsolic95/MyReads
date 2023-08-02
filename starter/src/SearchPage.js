import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";

const SearchPage = ({ getBooks, books }) => {
  const [query, setQuery] = useState("");
  const [searchResultBooks, setSearchResult] = useState([]);

  async function SearchBooks(query, maxResults) {
    maxResults = 5;
    return search(query, maxResults);
  }

  async function setQueryOnInputChange(event) {
    let query = event.target.value;
    setQuery(query);
  }

  useEffect(() => {
    let isMounted = true;

    async function queryAPI(query) {
      let searchResultBooks = await SearchBooks(query, 5);
      searchResultBooks = assignShelfsToSearchResults(books, searchResultBooks);
      if (isMounted) {
        setSearchResult(searchResultBooks);
      }
    }

    if (query) {
      queryAPI(query);
    }

    return () => {
      isMounted = false;
    };
  }, [query]);

  function assignShelfsToSearchResults(books, searchResultBooks) {
    if (searchResultBooks.length > 0) {
      searchResultBooks.forEach((searchResultBook) => {
        searchResultBook.shelf = "none";
        books.forEach((book) => {
          if (book.id === searchResultBook.id) {
            searchResultBook.shelf = book.shelf;
          }
        });
      });
    }
    return searchResultBooks;
  }

  function showSearchResult() {
    if (query === "") {
      return;
    }
    if (searchResultBooks.length > 0) {
      return (
        <SearchResults
          searchResultBooks={searchResultBooks}
          getBooks={getBooks}
        />
      );
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={(event) => setQueryOnInputChange(event)}
            type="text"
            value={query}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{showSearchResult()}</ol>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired,
};

export default SearchPage;
