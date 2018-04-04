import React, {Component} from 'react';
import Header from '../header';
import HomePageStyles from './HomePage.module.css';

class HomePage extends Component {

    render() {
        return (
            <div className={HomePageStyles.homePage}>
                <div className={HomePageStyles.headerContainer}>
                    <Header/>
                </div>
                <div className={HomePageStyles.pageContainer}>
                    Welcome to HomePage
                </div>
            </div>
        );
    }
}

export default HomePage;
