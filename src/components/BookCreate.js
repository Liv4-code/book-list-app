import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
    const [title, setTitle] = useState("");
    const { createBook } = useContext(BooksContext);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(title);
        setTitle("");
    };

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h3>Add A Book</h3>
                <label htmlFor="bookCreate">Title:</label>
                <input
                    className="input"
                    onChange={handleChange}
                    type="text"
                    name="bookCreate"
                    value={title}
                />
                <button className="button" onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default BookCreate;
