export const SET_POSTS = "SET_POSTS";
export const SET_PAYLOAD = "SET_PAYLOAD";
export const SET_SORT = "SET_SORT";
export const ASYNC_GET_POSTS = "ASYNC_GET_POSTS";

const initialState = {
    posts: [],
    cntPosts: 0,
    pageSettings: {
        page: 0,
        limit: 10
    },
    sortSettings: {
        sort: 'id',
        order: 'asc'
    }
};

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_POSTS: {
            return {...state, posts: action.posts, cntPosts: action.counter}
        }
        case SET_PAYLOAD: {
            return {...state, pageSettings: {page: action.page, limit: action.limit}}
        }
        case SET_SORT: {
            return {...state, sortSettings: {sort: action.sort, order: action.order}}
        }
        default: {
            return state;
        }
    }
};

export const setPostsAction = (posts, counter) => ({type: SET_POSTS, posts, counter});
export const setPageAction = (page, limit = 10) => ({type: SET_PAYLOAD, page, limit});
export const setSortAction = (sort, order) => ({type: SET_SORT, sort, order});
export const asyncPostsCreator = (pageSettings, sortSettings) => ({type: ASYNC_GET_POSTS, pageSettings, sortSettings});