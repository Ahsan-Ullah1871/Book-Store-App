import { color_selected, edit_book } from "../actions";

const UpdateBook = (book_id, book_details) => {
	return async (dispatch, getState) => {
		const response = await fetch(
			`http://localhost:9000/books/${book_id}`,
			{
				method: "PATCH",
				body: JSON.stringify({ ...book_details }),
				headers: {
					"Content-type": "application/json",
				},
			}
		);
		const book = await response.json();
		dispatch(edit_book(book.id, book));
	};
};

export default UpdateBook;
