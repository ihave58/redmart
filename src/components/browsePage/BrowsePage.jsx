import React, {Component} from 'react';

import Header from '../header';
import FilterBox from '../filterBox';

import cx from 'classnames';
import BrowsePageStyles from './BrowsePage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';
import data from '../../mock/data';

class BrowsePage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const gridContainerClasses = cx(
            GridStyles.grid
        );

        const contentContainerClasses = cx(
            BrowsePageStyles.contentContainer,
            GridStyles.gridCell,
            GridStyles.col__3of4
        );

        const filterBoxContainerClasses = cx(
            BrowsePageStyles.filterBoxContainer,
            GridStyles.gridCell
        );

        return (
            <div className={BrowsePageStyles.browsePage}>
                <div className={BrowsePageStyles.headerContainer}>
                    <Header/>
                </div>

                <div className={BrowsePageStyles.pageContainer}>
                    <div className={gridContainerClasses}>
                        <div className={filterBoxContainerClasses}>
                            <FilterBox filters={data.filters}/>
                        </div>
                        <div className={contentContainerClasses}>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default BrowsePage;
