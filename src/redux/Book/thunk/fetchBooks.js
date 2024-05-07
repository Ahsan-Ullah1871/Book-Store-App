import AxiosReq from "../../lib/api";
import { fetch_books } from "../actions";

const fetchBooks = async (dispatch, getState) => {
	try {
		const response = await AxiosReq.get("/books");
		dispatch(fetch_books(response));
	} catch (error) {
		console.log(error);
	}
};

export default fetchBooks;
