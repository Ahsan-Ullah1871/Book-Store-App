import { fetch_books } from "../actions";
const fetchBooks = async (dispatch, getState) => {
	const response = await fetch("http://localhost:9000/books");
	const books = await response.json();

	dispatch(fetch_books(books));
};

export default fetchBooks;
