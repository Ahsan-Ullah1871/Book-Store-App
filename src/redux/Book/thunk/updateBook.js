import AxiosReq from "../../lib/api";
import { color_selected, edit_book } from "../actions";

const UpdateBook = (book_id, book_details) => {
	return async (dispatch, getState) => {
		const { id, ...bok_data } = book_details;
		try {
			const response = await AxiosReq.patch(`books/${book_id}`, {
				...bok_data,
				rating: Number(book_details.rating),
				price: Number(book_details.price),
			});

			dispatch(edit_book(book_id, bok_data));
		} catch (error) {
			alert("You are not authorized to edit this book");
			console.log(error);
		}
	};
};

export default UpdateBook;
