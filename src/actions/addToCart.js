import {ActionTypes} from '../actions';
import {LocalStorage} from '../commons/utils';

const _key = 'cartItems';

export default function(product) {
    const cartItems = LocalStorage.get(_key) || [];

    if(cartItems.indexOf(product.id) < 0) {
        cartItems.push(product.id);
        LocalStorage.set(_key, cartItems);
    }

    return {
        type: ActionTypes.Add_To_Cart,
        cartItems
    };
}
