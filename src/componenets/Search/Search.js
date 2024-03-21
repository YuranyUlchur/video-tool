import React, { useState } from 'react';
import { SlMagnifier } from "react-icons/sl";
import './Search.css'; // Importamos el archivo CSS para el componente de búsqueda

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
                <div className="search-icon">
                    <SlMagnifier />
                </div>
                <div className="search-line"></div>
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
