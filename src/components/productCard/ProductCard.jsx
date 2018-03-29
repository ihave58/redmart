import React, {Component} from 'react';
import ProductCardStyles from './ProductCard.module.css';
import PropTypes from 'prop-types';

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart(event) {
        this.props.onAddToCart(this.props.product);
    }

    render() {
        const {name, image, desc, measurement, price} = this.props.product;

        return (
            <div className={ProductCardStyles.productCard}>
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
            </div>
        );
    }
}

ProductCard.propTypes = {
    onAddToCart: PropTypes.func.isRequired
};

ProductCard.defaultProps = {
    data: []
};

export default ProductCard;
