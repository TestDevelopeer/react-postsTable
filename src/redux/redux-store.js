import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import tableReducer from "./table-reducer";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    postsReducer: tableReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);