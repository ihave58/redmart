import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addProductToCart, fetchFilterList, fetchProductList} from '../../actions';
import FilterList from '../../components/filterList';
import List from '../../components/List';
import ProductCard from '../../components/productCard';

import BrowsePageStyles from './BrowsePage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';
import CommonStyles from '../../commons/styles/common.module.css';

import cx from 'classnames';

class BrowsePage extends Component {
    constructor(props) {
        super(props);

        this.productCardRenderer = this.productCardRenderer.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    productCardRenderer(product) {
        return (
            <ProductCard
                key={product.key}
                product={product}
                onAddProductToCart={this.props.addProductToCart}
            />
        );
    }

    componentDidMount() {
        this.props.fetchFilterList();
        this.props.fetchProductList();
    }

    handleFilterChange(appliedFilters) {
        this.props.fetchProductList({
            appliedFilters
        });
    }

    render() {
        const gridContainerClasses = cx(
            BrowsePageStyles.pageContainer,
            GridStyles.grid
        );

        const filterBoxContainerClasses = cx(
            BrowsePageStyles.filterBoxContainer,
            CommonStyles.widget,
            GridStyles.gridCell
        );

        const contentContainerClasses = cx(
            BrowsePageStyles.contentContainer,
            CommonStyles.widget,
            GridStyles.gridCell,
            GridStyles.col__3of4
        );

        return (
            <div className={BrowsePageStyles.browsePage}>
                <div className={gridContainerClasses}>
                    <div className={filterBoxContainerClasses}>
                        <FilterList
                            filterList={this.props.filterList}
                            onChange={this.handleFilterChange}
                        />
                    </div>

                    <div className={contentContainerClasses}>
                        <List
                            itemWidth="240px"
                            itemHeight="340px"
                            itemRenderer={this.productCardRenderer}
                            items={this.props.productList}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        filterList: state.filterList,
        productList: state.productList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addProductToCart,
        fetchProductList,
        fetchFilterList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
