import React, {Component} from 'react';
import FilterListStyles from './FilterList.module.css';
import Filter from '../filter';

class FilterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterList: []
        };

    }

    renderFilterList() {
        return this.props.filterList.map(filter => {
            return (
                <Filter key={filter.name}
                        filter={filter}
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

export default FilterList;
