import { useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        // Make get request to json server
        const res = await axios.get("http://localhost:3001/books");
        // Response gives back books that we now use set to books state
        setBooks(res.data);
    };

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        // Make post request to json server
        const res = await axios.post("http://localhost:3001/books", {
            title
        })
        // Receive response that gives back book with its id
        const updatedBooks = [...books,res.data];
        // Take response and add to book state
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEdit={editBookById}
            />
            <BookCreate onCreate={createBook} />
        </div>
    );
};
export default App;
