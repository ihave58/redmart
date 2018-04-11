import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FilterListStyles from './FilterList.module.css';
import Filter from '../filter';

class FilterList extends Component {
    static displayName = 'FilterList';

    constructor(props) {
        super(props);

        this.state = {
            filterList: {}
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(filter) {
        let filterList = Object.assign({}, this.state.filterList),
            appliedFilters = [];

        filterList[filter.name] = filter;

        Object.keys(filterList).forEach(filterName => {
            const filter = filterList[filterName];

            filter.values.forEach(value => {
                appliedFilters.push({
                    name: filterName,
                    value: value
                });
            });
        });

        this.setState({
            filterList: filterList
        });

        this.props.onChange(appliedFilters);
    }

    renderFilterList() {
        return this.props.filterList.map(filter => {
            return (
                <Filter key={filter.name}
                        filter={filter}
                        onChange={this.handleFilterChange}
                />
            );
        });
    }

    render() {
        return (
            <div className={FilterListStyles.filterBox}>
                {this.renderFilterList()}
            </div>
        );
    }
}

FilterList.propTypes = {
    onChange: PropTypes.func
};

export default FilterList;
