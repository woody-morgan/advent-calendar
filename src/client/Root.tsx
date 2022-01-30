import {BrowserRouter as Router} from "react-router-dom";
import App from "@src/shared/App";

import {ToastContainer} from "react-toastify";
import LocaleStore from "@src/core/context/LocaleStore";
import {ModalProvider} from "@src/core/context/ModalStore";
import {ModalContainer} from "@src/components/containers";
import {CalendarProvider} from "@core/context/CalendarStore";

const Root = () => {
    return (
        <LocaleStore>
            <ModalProvider>
                <CalendarProvider>
                    <Router basename={process.env.PUBLIC_URL}>
                        <App/>
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
                    <ModalContainer/>
                </CalendarProvider>
            </ModalProvider>
        </LocaleStore>
    );
};

export default Root;
