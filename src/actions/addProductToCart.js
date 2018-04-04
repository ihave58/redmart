import {ActionTypes} from '../actions';

export default function addProductToCart(product) {
    return {
        type: ActionTypes.Add_Product_To_Cart,
        product
    };
}
