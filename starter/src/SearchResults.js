import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

function getImage(book) {
  try {
    const image = book.imageLinks.smallThumbnail;
    return image;
  } catch {
    return "";
  }
}

const SearchResults = ({ searchResultBooks, getBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title"></h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {searchResultBooks.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${getImage(book)}")`,
                    }}
                  ></div>
                  <BookShelfChanger book={book} getBooks={getBooks} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  searchResultBooks: PropTypes.array.isRequired,
  getBooks: PropTypes.func.isRequired,
};


export default SearchResults;
