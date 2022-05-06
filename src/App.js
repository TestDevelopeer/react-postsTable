import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/:pageNumber" element={<MainPage/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
