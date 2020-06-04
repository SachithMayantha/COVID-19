import React from 'react';
import './searchbox.css'

const SearchBox = ({placeholder,handleChange}) => {
    return (
        <div className="header">
        <input type="search" className="search" 
        placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}
export default SearchBox;