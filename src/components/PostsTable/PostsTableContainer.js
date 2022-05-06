import PostsTable from "./PostsTable";
import {connect} from "react-redux";
import {asyncPostsCreator, setPageAction, setSortAction} from "../../redux/table-reducer";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const PostsTableContainer = ({posts, pageSettings, sortSettings, searchText, getPosts, setPage, setSort}) => {
    let {pageNumber} = useParams();
    pageNumber = parseInt(pageNumber);

    useEffect(() => {
        if (pageSettings.page !== pageNumber) return setPage(pageNumber);
    }, [pageNumber]);

    useEffect(() => {
        if (pageSettings.page !== 0) return getPosts(pageSettings, sortSettings, searchText);
    }, [pageSettings, sortSettings, searchText]);

    return (
        <>
            {posts.length > 0 &&
                <PostsTable
                    posts={posts}
                    sortSettings={sortSettings}
                    setSort={setSort}
                />}
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts,
        pageSettings: state.postsReducer.pageSettings,
        sortSettings: state.postsReducer.sortSettings,
        searchText: state.postsReducer.searchText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (pageSettings, sortSettings, searchText) => {
            dispatch(asyncPostsCreator(pageSettings, sortSettings, searchText));
        },
        setPage: (page, limit) => {
            dispatch(setPageAction(page, limit))
        },
        setSort: (sort, order) => {
            dispatch(setSortAction(sort, order))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsTableContainer);
