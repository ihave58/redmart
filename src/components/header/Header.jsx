import React, {Component} from 'react';
import SearchBox from '../SearchBox';

import HeaderStyles from './Header.module.css';
import GridStyles from '../../styles/grid.module.css';
import Logo from './logo.svg';

import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className={`${HeaderStyles.header} ${GridStyles.grid}`}>
                <div className={GridStyles.gridCell}>
                    <Link to="/" className={HeaderStyles.logoContainer}>
                        <img className={HeaderStyles.logo} src={Logo} alt="redmart logo" width="145px" height="45px"/>
                    </Link>
                </div>

                <div className={`${GridStyles.gridCell} ${HeaderStyles.searchContainer}`}>
                    <SearchBox/>
                </div>

                <div className={`${GridStyles.gridCell} ${HeaderStyles.cartContainer}`}>
                    <Link className={HeaderStyles.cartLink} to="/cart">Cart</Link>
                </div>
            </div>
        );
    }
}

export default Header;
