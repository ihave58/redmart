import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import SearchBox from '../searchBox';

import HeaderStyles from './Header.module.css';
import GridStyles from '../../commons/styles/grid.module.css';
import Logo from './logo.svg';

import cx from 'classnames';
import {UrlBuilder} from '../../commons/utils';
import loggify from '../../commons/utils/loggify';

const buildUrl = (url, params) => (new UrlBuilder(url, params)).toString();

class Header extends Component {
    static displayName = 'Header';

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: UrlBuilder.getLocationParam('q') || ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleBackToYourSearch = this.handleBackToYourSearch.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    handleSearch(searchTerm) {
        const searchParams = new Map([
            ['q', searchTerm]
        ]);

        this.setState({
            searchTerm: searchTerm
        });

        this.navigateTo(buildUrl('/search', searchParams));
    }

    navigateTo(url) {
        this.props.history.push(url);
    }

    navigateBack() {
        this.props.history.goBack();
    }

    toHideBackButton() {
        return RegExp(/\/(search)|^\/$/mgi).test(this.props.location.pathname);
    };

    handleBackToYourSearch(event) {
        event.preventDefault();

        this.navigateBack();
    }

    render() {
        const searchBoxContainerClasses = cx(
            HeaderStyles.searchContainer,
            GridStyles.gridCell,
            GridStyles.col__1of2
        );

        const toolBarContainerClasses = cx(
            HeaderStyles.toolBarContainer,
            GridStyles.gridCell
        );

        const toolBarClasses = cx(
            HeaderStyles.toolbar,
            GridStyles.grid
        );

        return (
            <div className={cx(HeaderStyles.header, GridStyles.grid)}>
                <div className={GridStyles.gridCell}>
                    <Link to="/" className={HeaderStyles.logoContainer}>
                        <img className={HeaderStyles.logo}
                             src={Logo} alt="redmart logo"
                             width="145px" height="45px"
                        />
                    </Link>
                </div>

                <div className={searchBoxContainerClasses}>
                    <SearchBox searchTerm={this.state.searchTerm}
                               onSearch={this.handleSearch}
                    />
                </div>

                <div className={toolBarContainerClasses}>
                    <div className={toolBarClasses}>
                        {
                            this.toHideBackButton() ? null : (
                                <a href=""
                                   className={HeaderStyles.searchLink}
                                   onClick={this.handleBackToYourSearch}> {'<'} Back to my Search</a>
                            )
                        }

                        <Link className={HeaderStyles.cartLink}
                              to="/cart">My Cart</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(loggify(Header));
