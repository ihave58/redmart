import React, {Component} from 'react';

import Header from '../header';
import FilterBox from '../filterBox';
import List from '../List';
import ProductCard from '../productCard';
import {RandomGenerator} from '../../commons/utils';

import cx from 'classnames';
import BrowsePageStyles from './BrowsePage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';
import data from '../../mock/data';

const getAbsoluteImagePath = imageName => {
    return `/static/assets/${imageName}`;
};

const fetchProducts = () => {
    return data.products.map(product => {
        const key = RandomGenerator.getUID();

        return {
            ...product,
            key: key,
            image: getAbsoluteImagePath(product.image)
        };
    });
};

const fetchFilters = () => {
    return data.filters;
};

class BrowsePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [],
            products: []
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
        this.setState({
            filters: fetchFilters(),
            products: fetchProducts()
        });
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
                            <FilterBox filters={this.state.filters}/>
                        </div>
                        <div className={contentContainerClasses}>
                            <List itemWidth="240px"
                                  itemHeight="340px"
                                  itemRenderer={this.productCardRenderer}
                                  items={this.state.products}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrowsePage;
