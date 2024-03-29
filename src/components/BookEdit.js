import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id, title);
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
