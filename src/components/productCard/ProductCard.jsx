import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ProductCardStyles from './ProductCard.module.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    handleAddToCart(event) {
        event.preventDefault();

        this.props.onAddToCart(this.props.product, event);
    }

    handleRemoveFromCart(event) {
        event.preventDefault();

        this.props.onRemoveFromCart(this.props.product, event);
    }

    renderAddToCartButton() {
        return (
            <button className={ProductCardStyles.addToCart}
                    onClick={this.handleAddToCart}
                    disabled={this.props.isAddToCartDisabled}>
                Add to Cart
            </button>
        );
    }

    renderRemoveFromCartButton() {
        return (
            <button className={ProductCardStyles.removeFromCart}
                    onClick={this.handleRemoveFromCart}>
                Remove from Cart
            </button>
        );
    }

    render() {
        const {id, name, image, desc, measurement, price} = this.props.product;

        return (
            <Link to={`/product/${id}`}
                  className={ProductCardStyles.productCard}>

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
                        this.props.toShowAddToCart
                            ? this.renderAddToCartButton()
                            : null
                    }
                    {
                        this.props.toShowRemoveFromCart
                            ? this.renderRemoveFromCartButton()
                            : null
                    }
                </div>
            </Link>
        );
    }
}

ProductCard.defaultProps = {
    toShowAddToCart: true,
    toShowRemoveFromCart: false,
    isAddToCartDisabled: false,
    onRemoveFromCart: () => {
    },
    onAddToCart: () => {
    }
};

ProductCard.propTypes = {
    onAddToCart: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    toShowAddToCart: PropTypes.bool,
    toShowRemoveFromCart: PropTypes.bool,
    isAddToCartDisabled: PropTypes.bool
};

export default ProductCard;
