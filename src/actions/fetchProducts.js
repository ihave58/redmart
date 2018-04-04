import axios from 'axios';
import {UrlBuilder} from '../commons/utils';

import {ActionTypes} from '../actions';
import Endpoints from '../api/endpoints';

export default function fetchProducts(params) {
    let urlBuilder = new UrlBuilder(Endpoints.Products, params);

    return {
        type: ActionTypes.Fetch_Products,
        request: axios.get(urlBuilder.toString())
    };
}
