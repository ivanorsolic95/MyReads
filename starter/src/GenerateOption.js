import PropTypes from "prop-types";

const GenerateOption = ({ bookshelf, shelfName, book }) => {
    if (book.shelf !== bookshelf) {
      return <option value={bookshelf}>{shelfName}</option>;
    } else {
      return (
        <option value={bookshelf} disabled>
          {shelfName}
        </option>
      );
    }
  };
  
  GenerateOption.propTypes = {
    bookshelf: PropTypes.string.isRequired,
    shelfName: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
  };
  

  export default GenerateOption;
  