import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter_book } from "../redux/Book/actions";
import fetchBooks from "../redux/Book/thunk/fetchBooks";
import Book from "./Book";
import BookForm from "./BookForm";

const BookList = () => {
	const dispatch = useDispatch();
	const books = useSelector((state) => state.books);
	const type = useSelector((state) => state.type);
	const search_text = useSelector((state) => state.search_text);

	useEffect(() => {
		dispatch(fetchBooks);
	}, [dispatch]);

	// Filter by type
	const filter_by_type = (book) => {
		switch (type) {
			case "featured":
				return book.featured;
			default:
				return book;
		}
	};

	// Serch book by search text
	const seacr_book = (book) => {
		if (search_text !== "" || search_text.length > 0) {
			return book.name
				.replace(/\s+/g, "")
				.toUpperCase()
				.includes(
					search_text.replace(/\s+/g, "").toUpperCase()
				);
		} else {
			return book;
		}
	};

	// typeHandler
	const typeHandler = (type) => {
		dispatch(filter_book(type));
	};

	return (
		<div class="py-12 2xl:px-6">
			<div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
				<div class="order-2 xl:-order-1">
					<div class="flex items-center justify-between mb-12">
						<h4 class="mt-2 text-xl font-bold">
							Book List
						</h4>

						<div class="flex items-center space-x-4">
							<button
								class={[
									"filter-btn",
									type !==
										"featured" &&
										"active-filter",
								].join(" ")}
								id="lws-filterAll"
								onClick={() =>
									typeHandler(
										"All"
									)
								}
							>
								All
							</button>
							<button
								class={[
									"filter-btn",
									type ===
										"featured" &&
										"active-filter",
								].join(" ")}
								id="lws-filterFeatured"
								onClick={() =>
									typeHandler(
										"featured"
									)
								}
							>
								Featured
							</button>
						</div>
					</div>
					<div class="lws-bookContainer">
						{books
							?.filter(filter_by_type)
							?.filter(seacr_book)
							?.map((book) => {
								return (
									<Book
										book={
											book
										}
										key={
											book.id
										}
									/>
								);
							})}
					</div>
				</div>
				<div>
					<BookForm />
				</div>
			</div>
		</div>
	);
};

export default BookList;
