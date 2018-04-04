import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectProduct} from '../../actions';

import Header from '../../components/header';
import FilterBox from '../../components/filterBox';
import List from '../../components/List';
import ProductCard from '../../components/productCard';

import cx from 'classnames';
import BrowsePageStyles from './BrowsePage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';

import UrlBuilder from '../../commons/utils/urlBuilder';

class BrowsePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: UrlBuilder.getParam('q') || '',
            filterList: this.props.filterList,
            productList: this.props.productList
        };

        this.onAddToCart = this.onAddToCart.bind(this);
        this.onProductCardSelect = this.onProductCardSelect.bind(this);
        this.productCardRenderer = this.productCardRenderer.bind(this);
    }

    onAddToCart(product) {
        console.log('onAddToCart:', product);
    }

    onProductCardSelect(product) {
        console.log('onProductCardSelect:', product);

        this.props.selectProduct(product);
    }

    productCardRenderer(product) {
        return (
            <ProductCard key={product.key}
                         product={product}
                         onAddToCart={this.onAddToCart}
                         onProductCardSelect={this.onProductCardSelect}
            />
        );
    }

    componentDidMount() {
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
                    <Header searchTerm={this.state.searchTerm}/>
                </div>

                <div className={BrowsePageStyles.pageContainer}>
                    <div className={gridContainerClasses}>
                        <div className={filterBoxContainerClasses}>
                            <FilterBox filterList={this.state.filterList}/>
                        </div>
                        <div className={contentContainerClasses}>
                            <List itemWidth="240px"
                                  itemHeight="340px"
                                  itemRenderer={this.productCardRenderer}
                                  items={this.state.productList}
                            />
                        </div>
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
        selectProduct
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
