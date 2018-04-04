import React, {Component} from 'react';
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
    }

    handleSearchSubmit(event) {
        const params = new Map([
            ['q', this.state.searchTerm]
        ]);

        event.preventDefault();
        this.props.onSearch(params);
    }

    render() {
        return (
            <div className={SearchBoxStyles.search}>
                <form onSubmit={this.handleSearchSubmit}>
                    <input type="text"
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

SearchBox.defaultProps = {
    onSearch: () => {
    },
    searchTerm: ''
};

export default SearchBox;
