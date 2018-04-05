import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import cx from 'classnames';
import {fetchProductList} from '../../actions';

import ProductCard from '../../components/productCard';
import List from '../../components/List';

import CartPageStyles from './CartPage.module.css';
import CommonStyles from '../../commons/styles/common.module.css';

class CartPage extends Component {
    constructor(props) {
        super(props);

        this.productCardRenderer = this.productCardRenderer.bind(this);
    }

    componentDidMount() {
        this.props.fetchProductList();
    }

    productCardRenderer(product) {
        return (
            <ProductCard
                key={product.key}
                product={product}
                toShowAddProductToCart={false}
                toShowRemoveProductFromCart={true}
            />
        );
    }

    render() {
        const contentContainerClasses = cx(
            CartPageStyles.contentContainer,
            CommonStyles.widget,
        );

        return (
            <div className={CartPageStyles.cartPage}>
                <div className={contentContainerClasses}>
                    <List
                        itemWidth="240px"
                        itemHeight="340px"
                        itemRenderer={this.productCardRenderer}
                        items={this.props.productList}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productList: state.productList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProductList,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
