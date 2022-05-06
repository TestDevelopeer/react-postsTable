import {put, takeEvery, call} from "redux-saga/effects"
import {postsAPI} from '../api/api';
import {ASYNC_GET_POSTS, setPostsAction} from "../redux/posts-reducer";

const axiosPostsFromApi = (pageSettings, sortSettings) => () => postsAPI.getPosts(pageSettings, sortSettings);

function* postsWorker({pageSettings, sortSettings}) {
    const data = yield call(axiosPostsFromApi(pageSettings, sortSettings));
    yield put(setPostsAction(data.data, parseInt(data.headers['x-total-count'])));
}

export function* postsWatcher() {
    yield takeEvery(ASYNC_GET_POSTS, postsWorker);
}
