import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ProductCardStyles from './ProductCard.module.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleProductCardSelect = this.handleProductCardSelect.bind(this);
    }

    handleAddToCart(event) {
        event.stopPropagation();

        this.props.onAddToCart(this.props.product, event);
    }

    handleProductCardSelect(event) {
        this.props.onProductCardSelect(this.props.product, event);
    }

    render() {
        const {name, image, desc, measurement, price, key} = this.props.product;

        return (
            <Link to={`/product/${key}`}
                  className={ProductCardStyles.productCard}
                  onClick={this.handleProductCardSelect}>

                <div className={ProductCardStyles.imageContainer}>
                    <img src={image} alt={desc}/>
                </div>

                <div className={ProductCardStyles.contentContainer}>
                    <div className={ProductCardStyles.name}>{name}</div>
                    <div className={ProductCardStyles.measurement}>{measurement}</div>
                    <div className={ProductCardStyles.price}>${price}</div>
                </div>

                <div className={ProductCardStyles.addToCartContainer}>
                    <button className={ProductCardStyles.addToCart}
                            onClick={this.onAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </Link>
        );
    }
}

ProductCard.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
    onProductCardSelect: PropTypes.func.isRequired
};

export default ProductCard;
