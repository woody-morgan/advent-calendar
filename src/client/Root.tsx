import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";

import { ToastContainer } from "react-toastify";
import { ModalContainer } from "@src/components/containers";
import { CalendarProvider } from "@src/store/modules/CalendarStore";
import { Provider } from "react-redux";
import store from "@src/store";

const Root = () => {
	return (
		<Provider store={store}>
			<CalendarProvider>
				<Router basename={process.env.PUBLIC_URL}>
					<App />
				</Router>
				<ToastContainer
					position="top-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<ModalContainer />
			</CalendarProvider>
		</Provider>
	);
};

export default Root;
