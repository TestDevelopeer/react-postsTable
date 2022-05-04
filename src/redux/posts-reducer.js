export const SET_POSTS = "SET_POSTS";
export const ASYNC_GET_POSTS = "ASYNC_GET_POSTS";

const initialState = {
    posts: [],
    isLoaded: false
};

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_POSTS: {
            return {...state, posts: action.posts}
        }
        case ASYNC_GET_POSTS: {
            return {...state, isLoaded: !action.isLoaded}
        }
        default: {
            return state;
        }
    }
};

export const setPosts = (posts) => ({type: SET_POSTS, posts});
export const asyncPostsCreator = (isLoaded) => ({type: ASYNC_GET_POSTS, isLoaded});