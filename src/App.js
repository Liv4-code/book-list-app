import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random * 9999), title },
        ];

        setBooks(updatedBooks);
    };

    const editBook = () => {};

    const deleteBook = () => {};

    return (
        <div>
            <BookList />
            <BookCreate onCreate={createBook} />
        </div>
    );
};
export default App;
