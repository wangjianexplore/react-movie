import React from 'react';
import Header from '../header';
import './cinemaDetail.scss';
import location from '../../assets/images/location.png';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import { Flex } from 'antd-mobile';
import api from '../../utils/api';
import { handleImg } from '../../utils/tool';

class CinemaDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemaData: {},
            showData: {},
            movieIndex: 0,
            movies: [],
            moviesFirst: {},
            shows: [],
            showsindex: 0,
            plist: []
        }
    }
    componentDidMount() {
        this.getCinemaDetail();
    }
    getCinemaDetail = () => {
        let rm = this;
        api.get('/ajax/cinemaDetail', {
            cinemaId: this.props.match.params.id
        }, function (res) {
            let data = res;
            rm.setState({
                cinemaData: data.cinemaData,
                showData: data.showData,
                movies: data.showData.movies,
                movieIndex: data.movieIndex,
                moviesFirst: data.showData.movies[data.movieIndex],
                shows: data.showData.movies[data.movieIndex].shows,
                plist: data.showData.movies[data.movieIndex].shows[0].plist
            });
            new Swiper('.swiper-container', {
                slidesPerView: 5,
                setWrapperSize: true,
                spaceBetween: 10,
                centeredSlides: true,
                slideToClickedSlide: true
            });
        });
    }
    render() {
        let { cinemaData, movies, moviesFirst, shows, showsindex, plist } = this.state;
        return (
            <div className="cinemaDetail">
                <Header position="relative" title={cinemaData.nm} />
                <div className="main">
                    <div className="info">
                        <div className="name">{cinemaData.nm}</div>
                        <div className="location ellipsis">{cinemaData.addr}</div>
                        <div className="location-icon">
                            <img src={location} alt="" />
                        </div>
                    </div>
                    <div className="movie-show">
                        <div className="swiper-container">
                            <div className="post-bg"></div>
                            <div className="post-bg-filter"></div>
                            <div className="swiper-wrapper">
                                {
                                    movies.map((item, index) => {
                                        return (
                                            <div key={index} className="swiper-slide" onClick={() => {
                                                this.setState({
                                                    moviesFirst: item,
                                                    shows: item.shows,
                                                    plist: item.shows[0].plist
                                                })
                                            }}>
                                                <div className="post">
                                                    <img src={handleImg(item.img)} alt="" />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="movie-info">
                            <div className="movie-title ellipsis">
                                <span className="title">{moviesFirst.nm}</span>
                                <span className="grade">{moviesFirst.sc}<span className="small">分</span></span>
                            </div>
                            <div className="movie-desc ellipsis">{moviesFirst.desc}</div>
                        </div>
                    </div>
                    <div className="nav-wrap">
                        <Flex>
                            {
                                shows.map((item, index) => {
                                    return (
                                        <Flex.Item key={index} onClick={() => {
                                            this.setState({
                                                showsindex: index,
                                                plist: item.plist
                                            })
                                        }} className={showsindex === index && 'active_item'}>{item.dateShow}</Flex.Item>
                                    )
                                })
                            }
                        </Flex>
                    </div>
                    <div className="list-wrap">
                        {
                            plist.map((item, index) => {
                                return (
                                    <Flex key={index} onClick={() => { this.props.history.push('/payOrder') }}>
                                        <Flex.Item>
                                            <div className="begin">{item.tm}</div>
                                            <div className="end"></div>
                                        </Flex.Item>
                                        <Flex.Item className="info-block">
                                            <div className="lan">{item.lang} {item.tp}</div>
                                            <div className="hall">{item.th}</div>
                                        </Flex.Item>
                                        <Flex.Item className="price">
                                            <div className="sellPr">
                                                <span className="d">¥</span>
                                                <span>{item.vipPrice}</span>
                                                <span className="vipPrice">
                                                    <span className="icon">折扣价</span>
                                                </span>
                                            </div>
                                            <div className="extraDesc">{item.vipPriceNameNew}</div>
                                        </Flex.Item>
                                        <Flex.Item className="button-block">
                                            <div className="button">购票</div>
                                        </Flex.Item>
                                    </Flex>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CinemaDetail;