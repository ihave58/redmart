import React, {Component} from 'react';
import FilterBoxStyles from './FilterBox.module.css';
import Filter from '../filter';

class FilterBox extends Component {
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
            <div className={FilterBoxStyles.filterBox}>
                {this.renderFilterList()}
            </div>
        );
    }
}

export default FilterBox;
