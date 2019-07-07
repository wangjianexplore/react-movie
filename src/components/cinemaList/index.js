import React from 'react';
import './cinemaList.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import hui from '../../assets/images/hui.png';
import ka from '../../assets/images/ka.png';

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
                {
                    this.props.cinemaList.map((item) => {
                        return (
                            <Link to="/cinemaDetail" key={item.id}>
                                <div className="listitem">
                                    <div className="item_wrap">
                                        <div className="title">
                                            <span>{item.nm}</span>
                                            <span className="price">{item.sellPrice}</span>
                                            <span className="yuan">元</span>
                                        </div>
                                        <div className="location">
                                            <div className="loca_l ellipsis">
                                                {item.addr}
                                            </div>
                                            <div className="loca_r">{item.distance}</div>
                                        </div>
                                        <div className="label">
                                            {item.tag.sell && <div className="allowRefund">退</div>}
                                            {item.tag.endorse && <div className="endorse">改签</div>}
                                            {item.tag.snack && <div className="snack">小吃</div>}
                                            {item.tag.vipTag && <div className="snack">折扣卡</div>}
                                            {item.tag.hallType && item.tag.hallType.map((one, index) => {
                                                return (
                                                    <div className="endorse" key={index}>{one}</div>
                                                )
                                            })}
                                        </div>
                                        {item.promotion.platformActivityTag && <div className="promotion"><img className="promotion_img" src={hui} alt="" />{item.promotion.platformActivityTag}</div>}
                                        {item.promotion.cardPromotionTag && <div className="promotion"><img className="promotion_img" src={ka} alt="" />{item.promotion.cardPromotionTag}</div>}
                                        <div className="recent ellipsis">近期场次：{item.showTimes}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}
CinemaList.defaultProps = {
    cinemaList: []
}
CinemaList.propTypes = {
    cinemaList: PropTypes.array
}
export default CinemaList;