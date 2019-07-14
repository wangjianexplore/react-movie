import React from 'react';
import Header from "../header";
import './movieOrder.scss';
import { connect } from 'react-redux';
import { Modal } from 'antd-mobile';

class MovieOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    deleteAlert = (index) => {
        Modal.alert('提示', '确定删除订单吗？', [
            { text: '取消', style: 'default' },
            {
                text: '确定', onPress: () => {
                    this.props.deleteMovieOrder(index);
                }
            },
        ]);
    }
    render() {
        let { orderMovieList } = this.props;
        return (
            <div className="movieOrder">
                <Header position="relative" title="我的电影订单" />
                <div className="orderList">
                    {
                        orderMovieList.map((item, index) => {
                            return (
                                <div className="order-item" key={index}>
                                    <div className="order-title">
                                        <div className="cinema-name ellipsis">{item.cinemaName}<i className="iconfont icon-fanhui-copy-copy"></i></div>
                                    </div>
                                    <div className="order-info">
                                        <img src={item.movieImg} alt="" />
                                        <div className="order-desc">
                                            <div className="movie-name ellipsis">{item.movieName}&nbsp;&nbsp;<span>1张</span></div>
                                            <div className="showTime ellipsis">{item.date} {item.time}</div>
                                            <div className="position ellipsis">{item.th}<span>{item.row}排{item.seat}座</span></div>
                                            <div className="leftPaySecond">支付时间：{item.ordertime}</div>
                                        </div>
                                        <div className="link-status"><div className="btn" onClick={() => { this.deleteAlert(index) }}>删除</div></div>
                                    </div>
                                    <div className="order-more">
                                        <div className="price">总价：<span>36元</span></div>
                                        <div className="status">已支付</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        !orderMovieList.length && <div className="main">
                            <div className="tip-text">您最近还没有新订单，赶快去下一单吧</div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    orderMovieList: state.orderMovieList
});

const mapDispatch = (dispatch) => ({
    deleteMovieOrder(index) {
        let action = {
            type: 'deleteMovieOrder',
            index
        }
        dispatch(action);
    }
});

export default connect(mapState, mapDispatch)(MovieOrder);