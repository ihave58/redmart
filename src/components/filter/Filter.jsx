import React, {Component} from 'react';
import FilterStyles from './Filter.module.css';

import PropTypes from 'prop-types';
import {RandomGenerator} from '../../commons/utils';

class Filter extends Component {
    static displayName = 'Filter';

    constructor(props) {
        super(props);

        this.state = {
            appliedFilterValues: []
        };

        this.isFilterValueSelected = this.isFilterValueSelected.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    isFilterValueSelected(filterValue) {
        return (this.state.appliedFilterValues.indexOf(filterValue) >= 0);
    }

    addFilterValue(filterValue) {
        let appliedFilterValues = [
                ...this.state.appliedFilterValues
            ],
            doesFilterValueAlreadyExists = (this.state.appliedFilterValues.indexOf(filterValue) >= 0);

        if(!doesFilterValueAlreadyExists) {
            appliedFilterValues.push(filterValue);

            this.setState({
                appliedFilterValues: appliedFilterValues
            });
        }

        return appliedFilterValues;
    }

    removeFilterValue(filterValue) {
        let appliedFilterValues = this.state.appliedFilterValues.slice(),
            filterValueIndex = appliedFilterValues.indexOf(filterValue);

        if(filterValueIndex >= 0) {
            appliedFilterValues.splice(filterValueIndex, 1);

            this.setState({
                appliedFilterValues: appliedFilterValues
            });
        }

        return appliedFilterValues;
    }

    handleFilterChange(event) {
        let isChecked = event.target.checked,
            filterValue = event.target.value,
            appliedFilterValues = [];

        if(isChecked) {
            appliedFilterValues = this.addFilterValue(filterValue);
        } else {
            appliedFilterValues = this.removeFilterValue(filterValue);
        }

        this.props.onChange({
            name: this.props.filter.name,
            values: appliedFilterValues
        });
    }

    renderFilterValues() {
        return this.props.filter.values.map(filterValue => {
            const id = RandomGenerator.getUID();

            return (
                <li key={id} className={FilterStyles.filterValue}>
                    <input type="checkbox"
                           id={id}
                           className={FilterStyles.filterSelection}
                           value={filterValue}
                           checked={this.isFilterValueSelected(filterValue)}
                           onChange={this.handleFilterChange}/>

                    <label className={FilterStyles.filterText}
                           htmlFor={id}>{filterValue}</label>
                </li>
            );
        });
    }

    render() {
        return (
            <div className={FilterStyles.filter}>
                <h3>{this.props.filter.name}</h3>
                <ul className={FilterStyles.filterValues}>
                    {this.renderFilterValues()}
                </ul>
            </div>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.object,
    onChange: PropTypes.func
};

export default Filter;
