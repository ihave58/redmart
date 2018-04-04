import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import SearchBox from '../searchBox';

import HeaderStyles from './Header.module.css';
import GridStyles from '../../commons/styles/grid.module.css';
import Logo from './logo.svg';

import cx from 'classnames';
import {UrlBuilder} from '../../commons/utils';

const buildUrl = (url, params) => (new UrlBuilder(url, params)).toString();

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: UrlBuilder.getLocationParam('q') || ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }

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

    handleRouteChange() {
        this.setState({
            searchTerm: UrlBuilder.getLocationParam('q') || ''
        });
    }

    componentDidMount() {
        this.props.history.listen(this.handleRouteChange);
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

                <div className={cx(HeaderStyles.searchContainer, GridStyles.gridCell)}>
                    <SearchBox searchTerm={this.state.searchTerm}
                               onSearch={this.handleSearch}
                    />
                </div>

                <div className={cx(HeaderStyles.cartContainer, GridStyles.gridCell)}>
                    <Link className={HeaderStyles.cartLink}
                          to="/cart">Cart</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
