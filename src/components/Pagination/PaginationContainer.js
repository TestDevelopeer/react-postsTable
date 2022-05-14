import React from 'react';
import Pagination from "./Pagination";
import {connect} from "react-redux";

const PaginationContainer = ({pageSettings, cntPosts}) => {
    const {page, limit} = pageSettings;
    const allPages = Math.ceil(cntPosts / limit);

    return (
        <Pagination page={page} allPages={allPages}/>
    );
};

let mapStateToProps = (state) => {
    return {
        pageSettings: state.postsReducer.pageSettings,
        cntPosts: state.postsReducer.cntPosts
    }
}

export default connect(mapStateToProps)(PaginationContainer);
