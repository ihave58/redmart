import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import HomePage from '../homePage';
import CartPage from '../cartPage';
import BrowsePage from '../browsePage';
import ProductDetailsPage from '../productDetailsPage';

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
                            <Route path="/products/:productId" component={ProductDetailsPage}/>
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
