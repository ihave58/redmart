import React, {Component} from 'react';
import SearchBox from '../searchBox';

import HeaderStyles from './Header.module.css';
import GridStyles from '../../commons/styles/grid.module.css';
import Logo from './logo.svg';

import cx from 'classnames';
import {Link, } from 'react-router-dom';
import {UrlBuilder} from '../../commons/utils';
import PropTypes from 'prop-types';

const buildUrl = (url, params) => (new UrlBuilder(url, params)).toString();

class Header extends Component {
    constructor(props) {
        super(props);

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(params) {
        window.location.href = buildUrl('/search', params);
    }

    render() {
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

                {
                    this.props.isSearchBoxVisible ? (
                        <div className={cx(HeaderStyles.searchContainer, GridStyles.gridCell)}>
                            <SearchBox searchTerm={this.props.searchTerm}
                                       onSearch={this.onSearch}
                            />
                        </div>
                    ) : ''
                }

                <div className={cx(HeaderStyles.cartContainer, GridStyles.gridCell)}>
                    <Link className={HeaderStyles.cartLink}
                          to="/cart">Cart</Link>
                </div>
            </div>
        );
    }
}

Header.defaultProps = {
    isSearchBoxVisible: true,
    searchTerm: ''
};

Header.propTypes = {
    isSearchBoxVisible: PropTypes.bool,
    searchTerm: PropTypes.string,
};

export default Header;
