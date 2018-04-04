import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import HomePage from '../../containers/homePage';
import CartPage from '../../containers/cartPage';
import BrowsePage from '../../containers/browsePage';
import ProductDetailsPage from '../../containers/productDetailsPage';

import AppStyles from './App.module.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={AppStyles.app}>
                    <div className={AppStyles.pageContainer}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/search" component={BrowsePage}/>
                            <Route path="/product/:productId" component={ProductDetailsPage}/>
                            <Route path="/cart" component={CartPage}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
