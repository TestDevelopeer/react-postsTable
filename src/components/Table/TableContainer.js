import Table from "./Table";
import {connect} from "react-redux";
import {asyncPostsCreator} from "../../redux/posts-reducer";
import {useEffect} from "react";

const TableContainer = ({posts, isLoaded, getPosts}) => {
    useEffect(() => {
        if (!isLoaded) return getPosts(isLoaded);
    }, [isLoaded]);

    return (
        <>
            {posts.length > 0 && <Table posts={posts}/>}
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts,
        isLoaded: state.postsReducer.isLoaded
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (isLoaded) => {
            dispatch(asyncPostsCreator(isLoaded));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
