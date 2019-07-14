import React from 'react';
import Header from '../header';
import './payOrder.scss';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { formatDate } from '../../utils/tool';
import store from '../../store';

class PayOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { orderMovieInfo } = this.props;
        const successToast = () => {
            orderMovieInfo.ordertime = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss');
            let action = {
                type: 'orderMovieList',
                orderMovieInfo
            }
            store.dispatch(action);
            Toast.success('支付成功！', 1.5, () => {
                this.props.history.push('/movieOrder');
            });
        }
        return (
            <div className="payOrder">
                <Header position="relative" title="支付订单" />
                <div className="count-down">支付剩余时间: <span className="cd-time"> 03:09</span></div>
                <div className="movie-info">
                    <div className="info">
                        <div className="title">{orderMovieInfo.nm}</div>
                        <div className="date">{orderMovieInfo.date} {orderMovieInfo.time} ({orderMovieInfo.lang}{orderMovieInfo.tp})</div>
                        <div className="local">{orderMovieInfo.cinemaName}</div>
                        <div className="seats">
                            {orderMovieInfo.th}
                            <div className="seat">{orderMovieInfo.row}排{orderMovieInfo.seat}座</div>
                        </div>
                    </div>
                </div>
                <div className="pay-info">
                    <div className="box-flex">
                        <div>活动与抵用券</div>
                        <div className="right-sel">无可用</div>
                    </div>
                    <div className="box-flex">
                        <div>手机号码</div>
                        <div className="right-sel">157****808</div>
                    </div>
                    <div className="box-flex">
                        <div>小计</div>
                        <div className="right-sel">
                            <span className="icon">¥</span>
                            <span className="paymoney">39</span>
                        </div>
                    </div>
                </div>
                <div className="pay-btn">
                    <div className="box-flex">
                        <div>不支持退票、改签</div>
                        <div>
                            <span className="also">应付:</span>
                            <span className="yuan">¥</span>
                            <span className="price">39.00</span>
                        </div>
                    </div>
                    <div className="price-btn" onClick={successToast}>确认支付</div>
                </div>
            </div>
        );
    }
}
const mapState = (state) => ({
    orderMovieInfo: state.orderMovieInfo
});
export default connect(mapState)(PayOrder);