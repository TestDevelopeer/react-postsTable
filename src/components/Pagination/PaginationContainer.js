import React from 'react';
import Pagination from "./Pagination";
import {connect} from "react-redux";
import s from "./pagination.module.css";
import {NavLink} from "react-router-dom";

const PaginationContainer = ({pageSettings, cntPosts}) => {
    const {page, limit} = pageSettings;
    const allPages = Math.ceil(cntPosts / limit);

    const pagination = Array.from({length: allPages}).map((_, index) => (
        <div className={s.paginationNumber} key={`pagination_number_${index}`}>
            <NavLink
                className={({isActive}) => (isActive ? s.activeLink : 'none')}
                to={`/${index + 1}`}
            >
                {index + 1}
            </NavLink>
        </div>
    ));

    return (
        <Pagination page={page} pagination={pagination} allPages={allPages}/>
    );
};

let mapStateToProps = (state) => {
    return {
        pageSettings: state.postsReducer.pageSettings,
        cntPosts: state.postsReducer.cntPosts
    }
}

export default connect(mapStateToProps)(PaginationContainer);
