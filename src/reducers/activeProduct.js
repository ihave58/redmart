import {selectProduct} from '../actions';

export default function(state = null, action) {
    switch (action.type) {
        case selectProduct:
            return action.product;

        default:
            return state;
    }
}
