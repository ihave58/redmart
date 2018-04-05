import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addToCart, fetchFilterList, fetchProductList, removeFromCart} from '../../actions';
import FilterList from '../../components/filterList';
import List from '../../components/List';
import ProductCard from '../../components/productCard';

import BrowsePageStyles from './BrowsePage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';
import CommonStyles from '../../commons/styles/common.module.css';

import cx from 'classnames';
import {LocalStorage} from '../../commons/utils';

const _cartKey = 'cartItems';
const isProductInCart = (product) => {
    const cartItems = LocalStorage.get(_cartKey) || [];

    return (cartItems.indexOf(product.id) >= 0);
};

class BrowsePage extends Component {
    constructor(props) {
        super(props);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.productCardRenderer = this.productCardRenderer.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
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

    handleAddToCart(product, event) {
        event.target.disabled = true;

        this.props.addToCart(product);
    }

    productCardRenderer(product) {
        return (
            <ProductCard
                key={product.key}
                product={product}
                onAddToCart={this.handleAddToCart}
                isAddToCartDisabled={isProductInCart(product)}
            />
        );
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
        addToCart,
        removeFromCart,
        fetchProductList,
        fetchFilterList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
