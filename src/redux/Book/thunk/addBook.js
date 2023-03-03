import { add_book } from "../actions";

const addBook = (book_details) => {
	return async (dispatch, getState) => {
		const response = await fetch("http://localhost:9000/books", {
			method: "POST",
			body: JSON.stringify({
				...book_details,
			}),
			headers: {
				"Content-type": "application/json",
			},
		});
		const book = await response.json();

		dispatch(add_book(book));
	};
};

export default addBook;
