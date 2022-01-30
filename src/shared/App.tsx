import { Route, Routes } from "react-router-dom";
import { Home, Profile } from "@src/pages";
// import for global localization
import "@utils/i18n";
import "@styles/App.scss";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</main>
	);
}

export default App;
