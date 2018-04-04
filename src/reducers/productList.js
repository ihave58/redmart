import {RandomGenerator} from '../commons/utils';
import {ActionTypes} from '../actions';

const getAbsoluteImagePath = imageName => {
    return `/static/assets/${imageName}`;
};

export default function(state = [], action) {
    switch (action.type) {
        case ActionTypes.Fetch_Products:
            return action.request.then(response => {
                return response.data.map(product => {
                    const id = RandomGenerator.getUID();

                    return {
                        id: id,
                        ...product,
                        image: getAbsoluteImagePath(product.image)
                    };
                });
            });

        default:
            return state;
    }
}
