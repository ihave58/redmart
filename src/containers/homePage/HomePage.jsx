import React, {Component} from 'react';
import HomePageStyles from './HomePage.module.css';
import loggify from '../../commons/utils/loggify';

class HomePage extends Component {
    static displayName = 'HomePage';

    render() {
        return (
            <div className={HomePageStyles.homePage}>
                Welcome to HomePage
            </div>
        );
    }
}

export default loggify(HomePage);
