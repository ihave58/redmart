import {ActionTypes} from '../actions';

const getAbsoluteImagePath = imageName => {
    return `/static/assets/${imageName}`;
};

export default function(state = null, action) {
    switch(action.type) {
        case ActionTypes.Fetch_Product:
            const product = action.payload;

            return {
                ...product,
                image: getAbsoluteImagePath(product.image)
            };

        default:
            return state;
    }
}
