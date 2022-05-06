import React from 'react';
import s from './search.module.css'
import {Button, FormControl, InputGroup} from "react-bootstrap";
import searchIcon from '../../assets/icons/search.svg';

const Search = ({inputText, setInputText, handleSearch}) => {
    return (
        <div className={s.searchBlock}>
            <InputGroup>
                <FormControl
                    placeholder="Поиск"
                    aria-label="Поиск"
                    aria-describedby="basic-addon2"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <Button onClick={handleSearch} variant="outline-secondary" id="button-addon2">
                    <img src={searchIcon} alt="Search"/>
                </Button>
            </InputGroup>
        </div>
    );
};

export default Search;
