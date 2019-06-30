import React from 'react';
import Header from '../header';
import './cinemaDetail.scss';
import location from '../../assets/images/location.png';
import movieimg from '../../assets/images/movie.jpg'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import { Flex } from 'antd-mobile';

class CinemaDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 5,
            setWrapperSize :true,
            spaceBetween: 10,
            centeredSlides: true,
            slideToClickedSlide: true
        });
    }
    render() {
        return (
            <div className="cinemaDetail">
                <Header position="relative" title="中影国际影城（长泰广场店）" />
                <div className="main">
                    <div className="info">
                        <div className="name">中影国际影城（长泰广场店）</div>
                        <div className="location ellipsis">浦东新区金科路2889号长泰广场东区与西区之间1号楼3层</div>
                        <div className="location-icon">
                            <img src={location} alt="" />
                        </div>
                    </div>
                    <div className="movie-show">
                        <div className="swiper-container">
                            <div className="post-bg"></div>
                            <div className="post-bg-filter"></div>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="post">
                                        <img src={movieimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="movie-info">
                            <div className="movie-title ellipsis">
                                <span className="title">千与千寻</span>
                                <span className="grade">9.5<span className="small">分</span></span>
                            </div>
                            <div className="movie-desc ellipsis">125分钟 | 动画 | 柊瑠美,周冬雨,入野自由</div>
                        </div>
                    </div>
                    <div className="nav-wrap">
                    <Flex>
                        <Flex.Item className="active_item">今天06月16日</Flex.Item>
                        <Flex.Item>今天06月16日</Flex.Item>
                    </Flex>
                    </div>
                    <div className="list-wrap">
                        <Flex onClick={()=> {this.props.history.push('/payOrder')}}>
                            <Flex.Item>
                                <div className="begin">10:25</div>
                                <div className="end">12:30 散场</div>
                            </Flex.Item>
                            <Flex.Item className="info-block">
                                <div className="lan">日语 2D</div>
                                <div className="hall">3号厅(VIP气味王国厅)</div>
                            </Flex.Item>
                            <Flex.Item className="price">
                                <div className="sellPr">
                                    <span className="d">¥</span>
                                    <span>49</span>
                                </div>
                                <div className="vipPrice">
                                    <span className="icon">折扣卡</span>
                                    <span className="num">¥41</span>
                                </div>
                                <div className="extraDesc">折扣卡首单特惠</div>
                            </Flex.Item>
                            <Flex.Item className="button-block">
                                <div className="button">购票</div>
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <div className="begin">10:25</div>
                                <div className="end">12:30 散场</div>
                            </Flex.Item>
                            <Flex.Item className="info-block">
                                <div className="lan">日语 2D</div>
                                <div className="hall">3号厅(VIP气味王国厅)</div>
                            </Flex.Item>
                            <Flex.Item className="price">
                                <div className="sellPr">
                                    <span className="d">¥</span>
                                    <span>49</span>
                                </div>
                                <div className="vipPrice">
                                    <span className="icon">折扣卡</span>
                                    <span className="num">¥41</span>
                                </div>
                                <div className="extraDesc">折扣卡首单特惠</div>
                            </Flex.Item>
                            <Flex.Item className="button-block">
                                <div className="button">购票</div>
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <div className="begin">10:25</div>
                                <div className="end">12:30 散场</div>
                            </Flex.Item>
                            <Flex.Item className="info-block">
                                <div className="lan">日语 2D</div>
                                <div className="hall">3号厅(VIP气味王国厅)</div>
                            </Flex.Item>
                            <Flex.Item className="price">
                                <div className="sellPr">
                                    <span className="d">¥</span>
                                    <span>49</span>
                                </div>
                                <div className="vipPrice">
                                    <span className="icon">折扣卡</span>
                                    <span className="num">¥41</span>
                                </div>
                                <div className="extraDesc">折扣卡首单特惠</div>
                            </Flex.Item>
                            <Flex.Item className="button-block">
                                <div className="button">购票</div>
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <div className="begin">10:25</div>
                                <div className="end">12:30 散场</div>
                            </Flex.Item>
                            <Flex.Item className="info-block">
                                <div className="lan">日语 2D</div>
                                <div className="hall">3号厅(VIP气味王国厅)</div>
                            </Flex.Item>
                            <Flex.Item className="price">
                                <div className="sellPr">
                                    <span className="d">¥</span>
                                    <span>49</span>
                                </div>
                                <div className="vipPrice">
                                    <span className="icon">折扣卡</span>
                                    <span className="num">¥41</span>
                                </div>
                                <div className="extraDesc">折扣卡首单特惠</div>
                            </Flex.Item>
                            <Flex.Item className="button-block">
                                <div className="button">购票</div>
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <div className="begin">10:25</div>
                                <div className="end">12:30 散场</div>
                            </Flex.Item>
                            <Flex.Item className="info-block">
                                <div className="lan">日语 2D</div>
                                <div className="hall">3号厅(VIP气味王国厅)</div>
                            </Flex.Item>
                            <Flex.Item className="price">
                                <div className="sellPr">
                                    <span className="d">¥</span>
                                    <span>49</span>
                                </div>
                                <div className="vipPrice">
                                    <span className="icon">折扣卡</span>
                                    <span className="num">¥41</span>
                                </div>
                                <div className="extraDesc">折扣卡首单特惠</div>
                            </Flex.Item>
                            <Flex.Item className="button-block">
                                <div className="button">购票</div>
                            </Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <div className="begin">10:25</div>
                                <div className="end">12:30 散场</div>
                            </Flex.Item>
                            <Flex.Item className="info-block">
                                <div className="lan">日语 2D</div>
                                <div className="hall">3号厅(VIP气味王国厅)</div>
                            </Flex.Item>
                            <Flex.Item className="price">
                                <div className="sellPr">
                                    <span className="d">¥</span>
                                    <span>49</span>
                                </div>
                                <div className="vipPrice">
                                    <span className="icon">折扣卡</span>
                                    <span className="num">¥41</span>
                                </div>
                                <div className="extraDesc">折扣卡首单特惠</div>
                            </Flex.Item>
                            <Flex.Item className="button-block">
                                <div className="button">购票</div>
                            </Flex.Item>
                        </Flex>
                    </div>
                </div>
            </div>
        );
    }
}

export default CinemaDetail;