import actionTypes from '../actionTypes';

export default function addProductToCart(product) {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        product
    };
}
