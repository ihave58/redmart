import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ProductDetailsPageStyles from './ProductDetailsPage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';

import cx from 'classnames';
import {addToCart, fetchProduct} from '../../actions';

class ProductDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productId: Number(this.props.match.params.productId)
        };
    }

    componentDidMount() {
        this.props.fetchProduct(this.state.productId);
    }

    renderLoader() {
        return (
            <div>Loading...</div>
        );
    }

    renderProductDescription() {
        const contentContainerClasses = cx(
            ProductDetailsPageStyles.contentContainer,
            GridStyles.grid,
        );

        const leftContainerClasses = cx(
            ProductDetailsPageStyles.leftContainer,
            GridStyles.col__1of2
        );

        const rightContainerClasses = cx(
            ProductDetailsPageStyles.rightContainer,
            GridStyles.col__1of2
        );

        const {name, measurement, price, desc, image} = this.props.product;

        return (
            <div className={contentContainerClasses}>
                <div className={leftContainerClasses}>
                    <h3>{name}</h3>
                    <div className={ProductDetailsPageStyles.imageContainer}>
                        <img src={image} alt={desc}/>
                    </div>
                </div>
                <div className={rightContainerClasses}>
                    <div className={ProductDetailsPageStyles.measurement}>{measurement}</div>
                    <div className={ProductDetailsPageStyles.price}>${price}</div>
                    <div className={ProductDetailsPageStyles.description}>{desc}</div>

                    <div className={ProductDetailsPageStyles.addToCartContainer}>
                        <button className={ProductDetailsPageStyles.addToCart}
                                onClick={this.handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={ProductDetailsPageStyles.productDetailsPage}>
                {
                    this.props.product
                        ? this.renderProductDescription()
                        : this.renderLoader()
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        product: state.activeProduct
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart,
        fetchProduct
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
