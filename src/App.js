import { useState, useEffect } from "react";
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

    const editBookById = async (id, newTitle) => {
        // Make put request to json server
        const res = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...res.data };
            }
            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        // Make delete request to json server
        await axios.delete(`http://localhost:3001/books/${id}`);

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

    useEffect(() => {
        fetchBooks();
    },[]);

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
