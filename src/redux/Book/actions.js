import {
	ADDBOOK,
	DELETEBOOK,
	EDITBOOK,
	FILTERBOOK,
	LOADBOOK,
	LOADEDITBOOK,
	SEARCHBOOK,
} from "./actionTypes";

export const fetch_books = (books) => {
	return { type: LOADBOOK, payload: books };
};
export const add_book = (book_details) => {
	return { type: ADDBOOK, payload: book_details };
};

export const load_edit_book = (book_details) => {
	return { type: LOADEDITBOOK, payload: book_details };
};
export const edit_book = (book_id, book_details) => {
	return { type: EDITBOOK, payload: { book_id, book_details } };
};
export const delete_book = (book_id) => {
	return { type: DELETEBOOK, payload: book_id };
};
export const search_book = (search_text) => {
	return { type: SEARCHBOOK, payload: search_text };
};
export const filter_book = (type) => {
	return { type: FILTERBOOK, payload: type };
};
