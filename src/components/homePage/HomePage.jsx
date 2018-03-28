import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="product-details-page">
                Welcome to Redmart!

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/search">Browse Products</Link>
                    </li>

                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HomePage;
