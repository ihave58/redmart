import axios from 'axios';
import {UrlBuilder} from '../commons/utils';

import {ActionTypes} from '../actions';
import Endpoints from '../api/endpoints';

export default function fetchProductList(params) {
    let urlBuilder = new UrlBuilder(Endpoints.Products, params);

    return {
        type: ActionTypes.Fetch_Products,
        payload: new Promise((resolve, reject) => {
            axios.get(urlBuilder.toString())
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error);
                });
        })
    };
}
