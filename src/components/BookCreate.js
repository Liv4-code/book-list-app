const BookEdit = ({ createBook }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Add A Book</h2>
            <label htmlFor="bookCreate">Title:</label>
            <input type="text" name="bookCreate" />
            <button onClick={handleSubmit} type="submit">
                Submit
            </button>
        </div>
    );
};
export default BookEdit;
