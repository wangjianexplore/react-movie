import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import creatHistory from 'history/createHashHistory';
// const history = creatHistory();

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        // console.log(this.props);
    }
    // goback = () => {
    //     window.history.back();
    // }
    render() {
        return (
            <div className={`header_main ${this.props.position === 'relative' ? 'header_relative' : 'header_fixed'}`}>
                {this.props.arrow && <i className="iconfont icon-fanhuijiantou" onClick={this.props.history.goBack}></i>}
                {this.props.title}</div>
        );
    }
}
Header.defaultProps = {
    title: '电影',
    position: 'fixed',
    arrow: true
}
Header.propTypes = {
    title: PropTypes.string,
    position: PropTypes.string,
    arrow: PropTypes.bool
}
export default withRouter(Header);