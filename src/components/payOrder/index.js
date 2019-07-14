import React from 'react';
import Header from '../header';
import './payOrder.scss';
// import { Flex } from 'antd-mobile';

class PayOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="payOrder">
                <Header position="relative" title="支付订单" />
                <div className="count-down">支付剩余时间: <span className="cd-time"> 03:09</span></div>
                <div className="movie-info">
                    <div className="info">
                        <div className="title">千与千寻</div>
                        <div className="date">今天6月23日 20:10 (日语2D)</div>
                        <div className="local">中影国际影城（长泰广场店） </div>
                        <div className="seats">
                            3号厅(VIP气味王国厅)
                        <div className="seat">7排7座</div>
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
                        <div className="right-sel">15756024808</div>
                    </div>
                    <div className="box-flex">
                        <div>小计</div>
                        <div className="right-sel">
                            <span className="icon">¥</span>
                            <span className="paymoney">54</span>
                        </div>
                    </div>
                </div>
                <div className="pay-btn">
                    <div className="box-flex">
                        <div>不支持退票、改签</div>
                        <div>
                            <span className="also">应付:</span>
                            <span className="yuan">¥</span>
                            <span className="price">54.00</span>
                        </div>
                    </div>
                    <div className="price-btn">确认支付</div>
                </div>
            </div>
        );
    }
}

export default PayOrder;