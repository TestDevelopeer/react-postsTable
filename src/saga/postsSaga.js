import {put, takeEvery, call} from "redux-saga/effects"
import {postsAPI} from '../api/api';
import {ASYNC_GET_POSTS, setPosts} from "../redux/posts-reducer";

const axiosPostsFromApi = () => postsAPI.getPosts();

function* postsWorker() {
    const data = yield call(axiosPostsFromApi);
    yield put(setPosts(data.data));
}

export function* postsWatcher() {
    yield takeEvery(ASYNC_GET_POSTS, postsWorker);
}
