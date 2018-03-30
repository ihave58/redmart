import React, {Component} from 'react';
import ProductDetailsPageStyles from './ProductDetailsPage.scss';

class ProductDetailsPage extends Component {
    render() {
        return (
            <div className={ProductDetailsPageStyles.browsePage}>
                <div className={ProductDetailsPageStyles.headerContainer}>
                    <Header/>
                </div>
            </div>
        );
    }
}

export default ProductDetailsPage;
