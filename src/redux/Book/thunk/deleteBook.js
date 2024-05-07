import AxiosReq from "../../lib/api";
import { delete_book } from "../actions";

const deleteBook = (book_id) => {
	return async (dispatch, getState) => {
		try {
			const response = await AxiosReq.delete(
				`books/${book_id}`,
				{}
			);

			dispatch(delete_book(book_id));
		} catch (error) {
			alert("You are not authorized to delete this book");
			console.log(error);
		}
	};
};

export default deleteBook;
