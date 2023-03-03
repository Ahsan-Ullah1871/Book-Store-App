import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/Book/thunk/addBook";
import UpdateBook from "../redux/Book/thunk/updateBook";

const BookForm = () => {
	const dispatch = useDispatch();

	const isEditBook = useSelector((state) => state.is_book_edit);
	const selectedBookData = useSelector(
		(state) => state.selected_book_data
	);

	// form State
	const [bookFormFields, setBookFormFields] = useState({
		featured: false,
	});

	//Effect (for set default value in state when isEditBook will be true )
	useEffect(() => {
		if (isEditBook && Object.keys(selectedBookData).length > 0) {
			setBookFormFields(selectedBookData);
		}
	}, [isEditBook, selectedBookData]);

	// Onchange handler for input  values
	const onChangeValue = (key_name, value) => {
		setBookFormFields((prevState) => ({
			...prevState,
			[key_name]: value,
		}));
	};

	// onSubmit
	const onSubmit = (e) => {
		e.preventDefault();
		if (isEditBook) {
			dispatch(UpdateBook(bookFormFields.id, bookFormFields));
			setBookFormFields({ featured: false });
			document.getElementById("book_form").reset();
		} else {
			dispatch(addBook(bookFormFields));
			setBookFormFields({ featured: false });
			document.getElementById("book_form").reset();
		}
	};

	return (
		<div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
			<h4 class="mb-8 text-xl font-bold text-center">
				Add New Book
			</h4>
			<form class="book-form" id="book_form" onSubmit={onSubmit}>
				<div class="space-y-2">
					<label for="name">Book Name</label>
					<input
						required
						class="text-input"
						type="text"
						id="input-Bookname"
						name="name"
						value={bookFormFields?.name}
						onChange={(e) =>
							onChangeValue(
								"name",
								e.target.value
							)
						}
					/>
				</div>

				<div class="space-y-2">
					<label for="category">Author</label>
					<input
						required
						class="text-input"
						type="text"
						id="input-Bookauthor"
						name="author"
						value={bookFormFields?.author}
						onChange={(e) =>
							onChangeValue(
								"author",
								e.target.value
							)
						}
					/>
				</div>

				<div class="space-y-2">
					<label for="image">Image Url</label>
					<input
						required
						class="text-input"
						type="text"
						id="input-Bookthumbnail"
						name="thumbnail"
						value={bookFormFields?.thumbnail}
						onChange={(e) =>
							onChangeValue(
								"thumbnail",
								e.target.value
							)
						}
					/>
				</div>

				<div class="grid grid-cols-2 gap-8 pb-4">
					<div class="space-y-2">
						<label for="price">Price</label>
						<input
							required
							class="text-input"
							type="number"
							id="input-Bookprice"
							name="price"
							value={bookFormFields?.price}
							onChange={(e) =>
								onChangeValue(
									"price",
									e.target.value
								)
							}
						/>
					</div>

					<div class="space-y-2">
						<label for="quantity">Rating</label>
						<input
							required
							value={bookFormFields?.rating}
							class="text-input"
							type="number"
							id="input-Bookrating"
							name="rating"
							min="1"
							max="5"
							onChange={(e) =>
								onChangeValue(
									"rating",
									e.target.value
								)
							}
						/>
					</div>
				</div>

				<div class="flex items-center">
					<input
						id="input-Bookfeatured"
						type="checkbox"
						checked={bookFormFields?.featured}
						name="featured"
						class="w-4 h-4"
						onChange={(e) =>
							onChangeValue(
								"featured",
								!bookFormFields?.featured
							)
						}
					/>
					<label for="featured" class="ml-2 text-sm">
						{" "}
						This is a featured book{" "}
					</label>
				</div>

				<button type="submit" class="submit" id="submit">
					{isEditBook ? "Update  Book" : "Add Book"}
				</button>
			</form>
		</div>
	);
};

export default BookForm;
