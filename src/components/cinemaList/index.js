import React from 'react';
import './cinemaList.scss';
import { Link } from 'react-router-dom';

class CinemaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // redirectFlag: false
        }
    }
    componentDidMount() {
    }
    render() {
        // if (this.state.redirectFlag) return (<Redirect to='/cinemaDetail'/>);
        // onClick={() => {this.setState({redirectFlag: true})}}
        return (
            <div className="infolist">
                <Link to="/cinemaDetail">
                    <div className="listitem">
                        <div className="item_wrap">
                            <div className="title">
                                <span>大光明丽星VIP影城（博山路店）</span>
                                <span className="price">37</span>
                                <span className="yuan">元</span>
                            </div>
                            <div className="location">
                                <div className="loca_l ellipsis">
                                    浦东新区博山东路88号4层01号
                                </div>
                                <div className="loca_r">1.4km</div>
                            </div>
                            <div className="label">
                                <div className="allowRefund">退</div>
                                <div className="endorse">改签</div>
                                <div className="snack">小吃</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                {/* <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div>
                <div className="listitem">
                    <div className="item_wrap">
                        <div className="title">
                            <span>大光明丽星VIP影城（博山路店）</span>
                            <span className="price">37</span>
                            <span className="yuan">元</span>
                        </div>
                        <div className="location">
                            <div className="loca_l ellipsis">
                                浦东新区博山东路88号4层01号
                            </div>
                            <div className="loca_r">1.4km</div>
                        </div>
                        <div className="label">
                            <div className="allowRefund">退</div>
                            <div className="endorse">改签</div>
                            <div className="snack">小吃</div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default CinemaList;