import React, {useState} from 'react';
import Search from "./Search";
import {connect} from "react-redux";
import {setPageAction, setSearchAction} from "../../redux/table-reducer";
import {useNavigate} from "react-router-dom";

const SearchContainer = ({searchText, setSearchText, setPage}) => {
    const [inputText, setInputText] = useState(searchText);
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/1");
        setSearchText(inputText);
    }

    return (
        <Search
            inputText={inputText}
            setInputText={setInputText}
            handleSearch={handleSearch}
        />
    );
}

let mapStateToProps = (state) => {
    return {
        searchText: state.postsReducer.searchText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (text) => {
            dispatch(setSearchAction(text));
        },
        setPage: (page, limit) => {
            dispatch(setPageAction(page, limit))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
