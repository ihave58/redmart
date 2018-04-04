import React, {Component} from 'react';
import HomePageStyles from './HomePage.module.css';

class HomePage extends Component {

    render() {
        return (
            <div className={HomePageStyles.homePage}>
                Welcome to HomePage
            </div>
        );
    }
}

export default HomePage;
