import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

const Bookshelf = ({ bookshelfBooks, shelfName, getBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookshelfBooks.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${book.imageLinks?.smallThumbnail}")`,
                    }}
                  ></div>
                  <BookShelfChanger book={book} getBooks={getBooks} />
                </div>
                <div className="book-title">{book.title || "Unknown Title"}</div>
                <div className="book-authors">{book.authors?.join(", ") || "Unknown Author"}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  bookshelfBooks: PropTypes.array.isRequired,
  shelfName: PropTypes.string.isRequired,
  getBooks: PropTypes.func.isRequired,
};

export default Bookshelf;
