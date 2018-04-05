import axios from 'axios';
import {UrlBuilder} from '../commons/utils';

import {ActionTypes} from '../actions';
import Endpoints from '../api/endpoints';

export default function fetchProductList(searchCriteria = {appliedFilters: []}) {
    let urlBuilder = new UrlBuilder(Endpoints.Products);

    return {
        type: ActionTypes.Fetch_ProductList,
        payload: new Promise((resolve, reject) => {
            axios.get(urlBuilder.toString()).then(response => {
                let productList = response.data;

                if(Array.isArray(searchCriteria.productIds)) {
                    productList = productList.filter(product => {
                        let toFilterIn = false;

                        for(let productId of searchCriteria.productIds) {
                            toFilterIn = (product.id === productId);

                            if(toFilterIn) {
                                break;
                            }
                        }

                        return toFilterIn;
                    });
                }

                if(searchCriteria && searchCriteria.appliedFilters && searchCriteria.appliedFilters.length) {
                    productList = productList.filter(product => {
                        let toFilterIn = false;

                        for(let filter of searchCriteria.appliedFilters) {
                            toFilterIn = (product[filter.name] === filter.value);

                            if(toFilterIn) {
                                break;
                            }
                        }

                        return toFilterIn;
                    });
                }

                resolve(productList);
            }).catch(error => {
                reject(error);
            });
        })
    };
}
