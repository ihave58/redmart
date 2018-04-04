import {combineReducers} from 'redux';

import activeProductReducer from './activeProduct';
import productListReducer from './productList';
import filterListReducer from './filterList';

const rootReducer = combineReducers({
    activeProduct: activeProductReducer,
    productList: productListReducer,
    filterList: filterListReducer
});

export default rootReducer;
