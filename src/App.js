import { useState } from "react";
import "./index.css";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]);

    return (
        <div>
            <BookList />
            <BookCreate />
        </div>
    );
};
export default App;
