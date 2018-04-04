import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ProductDetailsPageStyles from './ProductDetailsPage.module.css';
import GridStyles from '../../commons/styles/grid.module.css';

import cx from 'classnames';
import {addProductToCart} from '../../actions';

class ProductDetailsPage extends Component {
    constructor(props) {
        super(props);

        // this.props.match.params.productId;
    }

    render() {
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
            <div className={ProductDetailsPageStyles.productDetailsPage}>
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
                                    onClick={this.handleAddProductToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
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
        addProductToCart: addProductToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
