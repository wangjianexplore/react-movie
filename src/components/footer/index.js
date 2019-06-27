import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const num = this.props.num;
        return (
            <div className="footer">
                <Link to="/">
                    <div className={`f_col ${num === '0' ? 'f_active' : ''}`}>
                        <span className="iconfont icon-dianyingpiao"></span>
                        电影
                    </div>
                </Link>
                <Link to="/cinema">
                    <div className={`f_col ${num === '1' ? 'f_active' : ''}`}>
                        <span className="iconfont icon-yingyuanA"></span>
                        影院
                    </div>
                </Link>
                <Link to="/my">
                    <div className={`f_col ${num === '2' ? 'f_active' : ''}`}>
                        <span className="iconfont icon-wode"></span>
                        我的
                    </div>
                </Link>
            </div>
        );
    }
}

export default Footer;