import {
	ADDBOOK,
	DELETEBOOK,
	EDITBOOK,
	FILTERBOOK,
	LOADBOOK,
	LOADEDITBOOK,
	SEARCHBOOK,
} from "./actionTypes";

const initialState = {
	books: [],
	search_text: "",
	filter_type: "All",
	is_book_edit: false,
	selected_book_data: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADBOOK:
			return {
				...state,
				books: action.payload,
			};
		case ADDBOOK:
			return {
				...state,
				books: [...state.books, { ...action.payload }],
			};
		case LOADEDITBOOK:
			return {
				...state,
				is_book_edit: true,
				selected_book_data: action.payload,
			};
		case EDITBOOK:
			const { book_id, book_details } = action.payload;
			return {
				...state,
				books: state.books.map((book) => {
					if (book.id == book_id) {
						return { ...book, ...book_details };
					} else {
						return book;
					}
				}),
				is_book_edit: false,
				selected_book_data: {},
			};
		case DELETEBOOK:
			return {
				...state,
				books: state.books.filter(
					(book) => book.id !== action.payload
				),
			};

		case FILTERBOOK:
			return {
				...state,
				type: action.payload,
			};
		case SEARCHBOOK:
			return {
				...state,
				search_text: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
