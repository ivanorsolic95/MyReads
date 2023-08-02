import GenerateOption from "./GenerateOption";
import { update } from "./BooksAPI.js";
import PropTypes from "prop-types";

const BookShelfChanger = ({ book, getBooks }) => {
  async function updateBook(book, bookshelf) {
    book.shelf = bookshelf;
    return update(book, bookshelf);
  }
  async function handleShelfChange(event) {
    const bookshelf = event.target.value;
    await updateBook(book, bookshelf);
    getBooks();
  }

  return (
    <div className="book-shelf-changer">
      {
        <select onChange={handleShelfChange}>
          <option disabled>
            Move to...
          </option>
          //There is a bug that causes the first option not to work.
          <option hidden></option>
          <GenerateOption
            bookshelf={"currentlyReading"}
            shelfName={"Currently Reading"}
            book={book}
          />
          <GenerateOption
            bookshelf={"wantToRead"}
            shelfName={"Want to Read"}
            book={book}
          />
          <GenerateOption bookshelf={"read"} shelfName={"Read"} book={book} />
          <GenerateOption bookshelf={"none"} shelfName={"None"} book={book} />
        </select>
      }
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired,
};


export default BookShelfChanger;
