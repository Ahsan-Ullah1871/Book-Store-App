import AxiosReq from "../../lib/api";
import { add_book } from "../actions";

const addBook = (book_details) => {
	return async (dispatch, getState) => {
		try {
			const response = await AxiosReq.post(`books`, {
				...book_details,
				rating: Number(book_details.rating),
				price: Number(book_details.price),
			});
			dispatch(add_book(book_details));
		} catch (error) {
			alert("You are not authorized to add the book");
			console.log(error);
		}
	};
};

export default addBook;
