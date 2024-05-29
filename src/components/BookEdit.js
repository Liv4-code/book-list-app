import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label htmlFor="updateTitle">Title</label>
            <input
                onChange={handleChange}
                className="input"
                type="text"
                name="updateTitle"
                value={title}
            />
            <button className="button is-primary">Save</button>
        </form>
    );
};
export default BookEdit;
