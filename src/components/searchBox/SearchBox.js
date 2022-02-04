import React from 'react';

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input 
            type='search'
            placeholder = {placeholder}
            onChange = {handleChange}
        />
    );
};

export default SearchBox;