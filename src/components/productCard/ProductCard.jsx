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

                <div className={ProductCardStyles.addToCartContainer}>
                    <button className={ProductCardStyles.addToCart}
                            onClick={this.handleAddProductToCart}>
                        Add to Cart
                    </button>
                </div>
            </Link>
        );
    }
}

ProductCard.defaultPros = {
    onProductCardSelect: () => {
    }
};

ProductCard.propTypes = {
    onAddProductToCart: PropTypes.func.isRequired,
    onProductCardSelect: PropTypes.func
};

export default ProductCard;
