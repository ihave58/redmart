import {ActionTypes} from '../actions';

const getAbsoluteImagePath = imageName => {
    return `/static/assets/${imageName}`;
};

export default function(state = [], action) {
    switch(action.type) {
        case ActionTypes.Fetch_Products:
            const products = action.payload;

            return products.map(product => {
                return {
                    ...product,
                    image: getAbsoluteImagePath(product.image)
                };
            });

        default:
            return state;
    }
}
