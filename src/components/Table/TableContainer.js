import Table from "./Table";
import {connect} from "react-redux";
import {asyncPostsCreator, setPageAction, setSortAction} from "../../redux/posts-reducer";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const TableContainer = ({posts, cntPosts, pageSettings, sortSettings, getPosts, setPage, setSort}) => {
    let {pageNumber} = useParams();
    pageNumber = parseInt(pageNumber);

    useEffect(() => {
        if (pageSettings.page !== pageNumber) return setPage(pageNumber);
    }, [pageNumber]);

    useEffect(() => {
        if (pageSettings.page !== 0) return getPosts(pageSettings, sortSettings);
    }, [pageSettings, sortSettings]);

    return (
        <>
            {posts.length > 0 && <Table posts={posts}/>}
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts,
        cntPosts: state.postsReducer.cntPosts,
        pageSettings: state.postsReducer.pageSettings,
        sortSettings: state.postsReducer.sortSettings
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (pageSettings, sortSettings) => {
            dispatch(asyncPostsCreator(pageSettings, sortSettings));
        },
        setPage: (page, limit) => {
            dispatch(setPageAction(page, limit))
        },
        setSort: (sort, order) => {
            dispatch(setSortAction(sort, order))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
