import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ProductCardStyles from './ProductCard.module.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
    }

    handleAddProductToCart(event) {
        event.preventDefault();
        event.stopPropagation();

        this.props.onAddProductToCart(this.props.product, event);
    }

    renderAddToCartButton() {
        return (
            <button className={ProductCardStyles.addToCart}
                    onClick={this.handleAddProductToCart}>
                Add to Cart
            </button>
        );
    }

    renderRemoveFromCartButton() {
        return (
            <button className={ProductCardStyles.removeFromCart}
                    onClick={this.handleAddProductToCart}>
                Remove from Cart
            </button>
        );
    }

    render() {
        const {id, name, image, desc, measurement, price} = this.props.product;

        return (
            <Link to={`/product/${id}`}
                  className={ProductCardStyles.productCard}
                  onClick={this.props.onProductCardSelect}>

                <div className={ProductCardStyles.imageContainer}>
                    <img src={image} alt={desc}/>
                </div>

                <div className={ProductCardStyles.contentContainer}>
                    <div className={ProductCardStyles.name}>{name}</div>
                    <div className={ProductCardStyles.measurement}>{measurement}</div>
                    <div className={ProductCardStyles.price}>${price}</div>
                </div>

                <div className={ProductCardStyles.addAndRemoveToCartContainer}>
                    {
                        this.props.toShowAddProductToCart
                            ? this.renderAddToCartButton()
                            : null
                    }
                    {
                        this.props.toShowRemoveProductFromCart
                            ? this.renderRemoveFromCartButton()
                            : null
                    }
                </div>
            </Link>
        );
    }
}

ProductCard.defaultProps = {
    toShowAddProductToCart: true,
    toShowRemoveProductFromCart: false,
    onProductCardSelect: () => {
    },
    onAddProductToCart: () => {
    }
};

ProductCard.propTypes = {
    onAddProductToCart: PropTypes.func,
    onProductCardSelect: PropTypes.func,
    toShowAddProductToCart: PropTypes.bool,
    toShowRemoveProductFromCart: PropTypes.bool
};

export default ProductCard;
