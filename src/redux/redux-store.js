import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./posts-reducer";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    postsReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);