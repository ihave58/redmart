import React, {Component} from 'react';
import Header from '../header';
import CartPageStyles from './CartPage.module.css';

class CartPage extends Component {
    render() {
        return (
            <div className={CartPageStyles.cartPage}>
                <div className={CartPageStyles.headerContainer}>
                    <Header/>
                </div>
                <div className={CartPageStyles.pageContainer}>
                    Welcome to Cart
                </div>
            </div>
        );
    }
}

export default CartPage;
