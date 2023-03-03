import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import BookList from "./Components/BookList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<Header />
			<BookList />
		</Provider>
	);
}

export default App;

