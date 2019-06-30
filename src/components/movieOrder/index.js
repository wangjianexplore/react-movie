import React from 'react';
import Header from "../header";
import './movieOrder.scss';

class MovieOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="movieOrder">
                <Header position="relative" title="我的电影订单" />
                <div className="main">
                    <div className="tip-text">您最近还没有新订单，赶快去下一单吧</div>
                </div>
                <div className="orderList">
                    <div className="order-item">
                        <div className="order-title">
                            <div className="cinema-name">华联影城（池州店）<i className="iconfont icon-fanhui-copy-copy"></i></div>
                            <div className="leftPaySecond">支付剩余时间：03:12</div>
                        </div>
                        <div className="order-info">
                            <img src="//p0.meituan.net/114.160/moviemachine/5dac476535359b7bb951ff15d37a9d0b153821.jpg" alt="" />
                            <div className="order-desc">
                                <div className="movie-name ellipsis">蜘蛛侠：英雄远征&nbsp;&nbsp;<span>1张</span></div>
                                <div className="showTime ellipsis">2019-06-28 周四 00:05</div>
                                <div className="position ellipsis">二号4K厅<span>7排9座</span></div>
                            </div>
                            <div className="link-status"><div className="btn">付款</div></div>
                        </div>
                        <div class="order-more">
                            <div class="price">总价：<span>28元</span></div>
                            <div class="status">未支付</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieOrder;