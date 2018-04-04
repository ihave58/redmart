import React, {Component} from 'react';
import Header from '../header';
import CartPageStyles from './CartPage.module.css';

class CartPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={CartPageStyles.cartPage}>
                <div className={CartPageStyles.headerContainer}>
                    <Header isSearchBoxVisible={false}/>
                </div>
                <div className={CartPageStyles.pageContainer}>
                    Welcome to Cart
                </div>
            </div>
        );
    }
}

export default CartPage;
