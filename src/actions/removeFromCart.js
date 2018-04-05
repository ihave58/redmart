import {ActionTypes} from '../actions';
import {LocalStorage} from '../commons/utils';

const _cartKey = 'cartItems';

export default function(product) {
    const cartItems = LocalStorage.get(_cartKey),
        productCartItemIndex = cartItems.indexOf(product.id);

    if(productCartItemIndex >= 0) {
        cartItems.splice(productCartItemIndex, 1);
        LocalStorage.set(_cartKey, cartItems);
    }

    return {
        type: ActionTypes.Remove_To_Cart,
        cartItems
    };
}
