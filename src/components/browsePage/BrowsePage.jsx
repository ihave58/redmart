import React, {Component} from 'react';
import Header from '../header';
import BrowsePageStyles from './BrowsePage.module.css';

class BrowsePage extends Component {
    render() {
        return (
            <div className={BrowsePageStyles.browsePage}>
                <div className={BrowsePageStyles.headerContainer}>
                    <Header/>
                </div>
                <div className={BrowsePageStyles.pageContainer}>
                    Welcome to BrowsePage
                </div>
            </div>
        );
    }
}

export default BrowsePage;
