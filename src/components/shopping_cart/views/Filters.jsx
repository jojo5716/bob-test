import React from 'react';


const Filters = ({ onChange, translations }) => {
    return (
        <div className="filters filters__wrapper">
            <form id="searchForm" className="search search__wrapper">
                <input
                    type="text"
                    className="form-control"
                    placeholder={translations.search}
                    name="search"
                    id="searchInput"
                    onChange={onChange}
                />
                <span className="icon icon-search-alt" />
            </form>
        </div>
    );
};

export default Filters;
