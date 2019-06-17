import React from 'react';
import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="header_main">{this.props.title || '电影'}</div>
        );
    }
}

export default Header;