import React from 'react';
import Header from "../header";
import Footer from "../footer";
import './my.scss';
import Head from '../../assets/images/head.png';

class My extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="my">
                <Header position="relative" title="我的" />
                <div className="main">
                    <div className="main-top">
                        <img src={Head} className="top-img" alt="" />
                    </div>
                    <div className="main-center">
                        <div className="group">
                            <div className="title">我的订单</div>
                            <div className="list">
                                <div className="list-item" onClick={()=>{this.props.history.push('./movieOrder')}}>电影</div>
                                <div className="list-item">商城</div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="line-item">在线观影</div>
                            <div className="line-item">优惠券</div>
                            <div className="line-item">折扣卡</div>
                        </div>
                    </div>
                </div>
                <Footer num="2" />
            </div>
        );
    }
}

export default My;