import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../header';
import HomePage from "../homePage";
import CartPage from '../cartPage';
import BrowsePage from '../browsePage';
import ProductDetailsPage from '../productDetailsPage';

import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <div className="header-container">
                        <Header/>
                    </div>
                    <div className="page-container">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/search" component={BrowsePage}/>
                            <Route path="/products/:productId" component={ProductDetailsPage}/>
                            <Route path="/cart" component={CartPage}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
