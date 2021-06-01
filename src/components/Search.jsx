import React from 'react';
import Icon from './common/Icon';

const Search = () => {

    return (
        <div className="search-wrapper">
            <Icon icon="search" size="1.25rem" />
            <input type="text" placeholder="Пошук" name="search" />
        </div>
    );
};


export default Search