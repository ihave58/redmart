import React, {Component} from 'react';
import CartPageStyles from './CartPage.module.css';

class CartPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={CartPageStyles.cartPage}>
                Welcome to Cart
            </div>
        );
    }
}

export default CartPage;
