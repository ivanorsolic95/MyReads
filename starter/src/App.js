import "./App.css";
import { useState, useEffect } from "react";
import { getAll } from "./BooksAPI.js";
import MyBooks from "./MyBooks";
import SearchPage from "./SearchPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const books = await getAll();
    setBooks(books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MyBooks books={books} getBooks={getBooks} />}
      />
      <Route
        exact
        path="/search"
        element={<SearchPage getBooks={getBooks} books={books} />}
      />
    </Routes>
  );
}

export default App;
