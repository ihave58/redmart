import axios from 'axios';
import {UrlBuilder} from '../commons/utils';

import {ActionTypes} from '../actions';
import Endpoints from '../api/endpoints';

export default function fetchProduct(productId) {
    let urlBuilder = new UrlBuilder(Endpoints.Products);

    return {
        type: ActionTypes.Fetch_Product,
        payload: new Promise((resolve, reject) => {
            axios.get(urlBuilder.toString())
                .then(response => {
                    const product = response.data.find(product => {
                        return (product.id === productId);
                    });

                    if(product) {
                        resolve(product);
                    } else {
                        reject(new Error('productNotFound'));
                    }
                })
                .catch(error => {
                    reject(error);
                });
        })
    };
}
