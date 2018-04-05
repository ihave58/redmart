import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import cx from 'classnames';
import {fetchProductList, removeFromCart} from '../../actions';

import {LocalStorage} from '../../commons/utils';
import ProductCard from '../../components/productCard';
import List from '../../components/List';

import CartPageStyles from './CartPage.module.css';
import CommonStyles from '../../commons/styles/common.module.css';

const _cartKey = 'cartItems';

class CartPage extends Component {
    constructor(props) {
        super(props);

        this.productCardRenderer = this.productCardRenderer.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    componentDidMount() {
        const cartItems = LocalStorage.get(_cartKey);

        this.props.fetchProductList({
            productIds: cartItems
        });
    }

    handleRemoveFromCart(product) {
        this.props.removeFromCart(product);

        const cartItems = LocalStorage.get(_cartKey);
        this.props.fetchProductList({
            productIds: cartItems
        });
    }

    productCardRenderer(product) {
        return (
            <ProductCard
                key={product.key}
                product={product}
                toShowAddToCart={false}
                toShowRemoveFromCart={true}
                onRemoveFromCart={this.handleRemoveFromCart}
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
        removeFromCart,
        fetchProductList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
