import React, {Component} from 'react';
import Header from '../header';

import ProductDetailsPageStyles from './ProductDetailsPage.scss';
import GridStyles from '../../commons/styles/grid.module.css';

import cx from 'classnames';
import UrlBuilder from '../../commons/utils/urlBuilder';

class ProductDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: UrlBuilder.getParam('q') || ''
        };
    }

    render() {
        const contentContainerClasses = cx(
            ProductDetailsPageStyles.contentContainer,
            GridStyles.gridCell,
            GridStyles.col__3of4
        );

        return (
            <div className={ProductDetailsPageStyles.productDetailsPage}>
                <div className={ProductDetailsPageStyles.headerContainer}>
                    <Header/>
                </div>
                <div className={ProductDetailsPageStyles.pageContainer}>
                    <div className={contentContainerClasses}>
                        <div className={GridStyles.col__1of2}>
                            <h3></h3>
                        </div>
                        <div className={GridStyles.col__1of2}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailsPage;
