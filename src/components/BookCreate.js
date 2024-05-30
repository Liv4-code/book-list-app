import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
    const [title, setTitle] = useState("");
    const { createBook } = useBooksContext();

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
