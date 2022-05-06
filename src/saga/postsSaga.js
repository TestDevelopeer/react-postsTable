import {put, takeEvery, call} from "redux-saga/effects"
import {postsAPI} from '../api/api';
import {ASYNC_GET_POSTS, setPostsAction} from "../redux/table-reducer";

const axiosPostsFromApi = (pageSettings, sortSettings, searchText) => () => postsAPI.getPosts(pageSettings, sortSettings, searchText);

function* postsWorker({pageSettings, sortSettings, searchText}) {
    const data = yield call(axiosPostsFromApi(pageSettings, sortSettings, searchText));
    yield put(setPostsAction(data.data, parseInt(data.headers['x-total-count'])));
}

export function* postsWatcher() {
    yield takeEvery(ASYNC_GET_POSTS, postsWorker);
}
