import React, {Component} from 'react';
import SearchBoxStyles from './SearchBox.module.css';

import SearchImageIcon from './searchIcon.svg';

class SearchBox extends Component {
    render() {
        return (
            <div className={SearchBoxStyles.search}>
                <input className={SearchBoxStyles.searchBar} type="text"/>
                <button className={SearchBoxStyles.searchButton}>
                    <img className={SearchBoxStyles.searchIcon}
                         src={SearchImageIcon} width="20px" height="20px" alt="search-icon"/>
                </button>
            </div>
        );
    }
}

export default SearchBox;
