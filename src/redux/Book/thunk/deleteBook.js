import { delete_book } from "../actions";

const deleteBook = (book_id) => {
	return async (dispatch, getState) => {
		const response = await fetch(
			`http://localhost:9000/books/${book_id}`,
			{
				method: "DELETE",
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		dispatch(delete_book(book_id));
	};
};

export default deleteBook;
