import TableContainer from "./components/Table/TableContainer";
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/:pageNumber" element={<TableContainer/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
