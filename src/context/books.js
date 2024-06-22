import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        // Make get request to json server
        const res = await axios.get("http://localhost:3001/books");
        // Response gives back books that we now use set to books state
        setBooks(res.data);
    }, []);

    const editBookById = async (id, newTitle) => {
        // Make put request to json server
        const res = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
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
            title,
        });
        // Receive response that gives back book with its id
        const updatedBooks = [...books, res.data];
        // Take response and add to book state
        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById,
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
