import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SearchBoxStyles from './SearchBox.module.css';

import SearchImageIcon from './searchIcon.svg';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: props.searchTerm
        };

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchTermChange(event) {
        event.stopPropagation();

        this.setState({
            searchTerm: event.target.value
        });

        // Will be helpful in Auto suggestion. Make API calls / action for suggestions here.
    }

    handleSearchSubmit(event) {
        event.preventDefault();

        this.props.onSearch(this.state.searchTerm);
    }

    render() {
        return (
            <div className={SearchBoxStyles.search}>
                <form onSubmit={this.handleSearchSubmit}>
                    <input type="text"
                           placeholder="Search for a product or brand"
                           className={SearchBoxStyles.searchBar}
                           value={this.state.searchTerm}
                           onChange={this.handleSearchTermChange}
                    />

                    <button type="submit"
                            className={SearchBoxStyles.searchButton}>

                        <img width="20px" height="20px" alt="search-icon"
                             className={SearchBoxStyles.searchIcon}
                             src={SearchImageIcon}
                        />
                    </button>
                </form>
            </div>
        );
    }
}

SearchBox.propTypes = {
    term: PropTypes.string,
    pathName: PropTypes.string,
    onSearch: PropTypes.func
};

SearchBox.defaultProps = {
    term: '',
    pathName: '',
    onSearch: () => {
    }
};

export default SearchBox;
