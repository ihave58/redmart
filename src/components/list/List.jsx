import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ListStyles from './List.module.css';

class List extends Component {
    static displayName = 'List';

    static propTypes = {
        itemRenderer: PropTypes.func.isRequired
    };

    static defaultProps = {
        itemWidth: 'auto',
        itemHeight: 'auto',
        items: []
    };

    // constructor(props) {
    //     super(props);
    // }

    renderListItems() {
        return this.props.items.map(item => {
            const {itemWidth, itemHeight} = this.props;

            const listItemStyle = {
                flexBasis: itemWidth,
                height: itemHeight
            };

            return (
                <li key={item.id} className={ListStyles.listItem} style={listItemStyle}>
                    {this.props.itemRenderer(item)}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className={ListStyles.list}>
                {this.renderListItems()}
            </ul>
        );
    }
}

export default List;
