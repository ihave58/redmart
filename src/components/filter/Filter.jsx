import React, {Component} from 'react';
import FilterStyles from './Filter.module.css';
import {RandomGenerator} from '../../commons/utils';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterOptions: []
        };

        this.isFilterOptionSelected = this.isFilterOptionSelected.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    isFilterOptionSelected(filterOption) {
        return (this.state.filterOptions.indexOf(filterOption) >= 0);
    }

    addFilterOption(filterOption) {
        let filterOptions = this.state.filterOptions,
            indexOfFilterOption = filterOptions.indexOf(filterOption);

        if (indexOfFilterOption < 0) {
            filterOptions.push(filterOption);
        }
    }

    removeFilterOption(filterOption) {
        let filterOptions = this.state.filterOptions,
            indexOfFilterOption = filterOptions.indexOf(filterOption);

        if (indexOfFilterOption >= 0) {
            filterOptions.splice(indexOfFilterOption, 1);
        }
    }

    onFilterChange(event) {
        let filterOptions = this.state.filterOptions,
            isChecked = event.target.checked,
            filterOption = event.target.value;

        if (isChecked) {
            this.addFilterOption(filterOption);
        } else {
            this.removeFilterOption(filterOption);
        }

        this.setState({
            filterOptions: filterOptions
        });
    }

    renderFilterOptions() {
        return this.props.filter.values.map(filterOption => {
            const key = RandomGenerator.getUID();

            return (
                <li key={key} className={FilterStyles.filterOption}>
                    <input type="checkbox" id={key} value={filterOption}
                           checked={this.isFilterOptionSelected(filterOption)}
                           onChange={this.onFilterChange}/>

                    <label htmlFor={key}>{filterOption}</label>
                </li>
            );
        });
    }

    render() {
        return (
            <div className={FilterStyles.filter}>
                <h3>{this.props.filter.name}</h3>
                <ul className={FilterStyles.filterOptions}>
                    {this.renderFilterOptions()}
                </ul>
            </div>
        );
    }
}

export default Filter;
