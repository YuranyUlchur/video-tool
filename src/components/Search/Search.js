import React, { useState } from 'react';
import { SlMagnifier } from "react-icons/sl";
import './Search.css';

export const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
                 {/* icon magnifying glass*/}
                <div className="search-icon">
                    <SlMagnifier />
                </div>

                 {/* implementation search line*/}
                <div className="search-line"></div>

                 {/* input search*/}
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Buscar video"
                    value={searchTerm}
                    onChange={handleInputChange}
                    style={{ paddingLeft: '40px' }}
                />
            </div>
        </form>
    );
};
