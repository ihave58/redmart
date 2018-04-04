import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchProducts} from '../../actions';
import FilterBox from '../../components/filterBox';
import List from '../../components/List';
import ProductCard from '../../components/productCard';

import BrowsePageStyles from './BrowsePage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';

import cx from 'classnames';

class BrowsePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterList: this.props.filterList,
            productList: this.props.productList
        };

        this.productCardRenderer = this.productCardRenderer.bind(this);
    }

    productCardRenderer(product) {
        return (
            <ProductCard key={product.key}
                         product={product}
                         onAddProductToCart={this.props.addProductToCart}
            />
        );
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const gridContainerClasses = cx(
            BrowsePageStyles.pageContainer,
            GridStyles.grid
        );

        const filterBoxContainerClasses = cx(
            BrowsePageStyles.filterBoxContainer,
            GridStyles.gridCell
        );

        const contentContainerClasses = cx(
            BrowsePageStyles.contentContainer,
            GridStyles.gridCell,
            GridStyles.col__3of4
        );

        return (
            <div className={BrowsePageStyles.browsePage}>
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
        );
    }
}

function mapStateToProps(state) {
    return {
        filterList: state.filterList,
        productList: state.productList
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         addProductToCart: Add_Product_To_Cart
//     }, dispatch);
// }

let mapDispatchToProps = {
    fetchProducts: fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
