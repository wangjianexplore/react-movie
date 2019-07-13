import React from 'react';
import Header from '../header';
import sdmax from '../../assets/images/sdmax.png';
import face from '../../assets/images/face.png';
import './movieDetail.scss';
import { Flex } from 'antd-mobile';
import api from '../../utils/api';
import { handleImg } from '../../utils/tool';

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowflag: false,
            detailMovie: {},
            photos: []
        };
    }
    componentDidMount() {
        this.getDetailmovie();
    }
    getDetailmovie = () => {
        let rm = this;
        api.get('/ajax/detailmovie', {
            movieId: rm.props.match.params.id,
        }, function (res) {
            let data = res.detailMovie;
            rm.setState({
                detailMovie: data,
                photos: data.photos
            });
        });
    }
    render() {
        let detailMovie = this.state.detailMovie;
        let img = '';
        this.state.detailMovie.img && (img = handleImg(detailMovie.img));
        return (
            <div className="movieDetail">
                <Header position="relative" title={detailMovie.nm} />
                <div className="movie-detail">
                    <div className="movie-filter"></div>
                    <div className="poster-bg"></div>
                    <div className="mc_detail">
                        <div className="poster">
                            <img className="poster_img" src={img} alt="" />
                        </div>
                        <div className="mc_content">
                            <div className="title ellipsis">{detailMovie.nm}</div>
                            <div className="title-en-name ellipsis">{detailMovie.enm}</div>
                            <div className="score ellipsis">{detailMovie.wish}人想看</div>
                            <div className="type ellipsis">
                                <span>{detailMovie.cat}</span>
                                <div className="type-group">
                                    {detailMovie.version && <img className="type_img" src={sdmax} alt="" />}
                                </div>
                            </div>
                            <div className="title-en-name ellipsis">{detailMovie.src}/{detailMovie.dur}分钟</div>
                            <div className="title-en-name ellipsis">{detailMovie.pubDesc}</div>
                        </div>
                    </div>
                </div>
                <div className="purchase">
                    <div className="pru-btn" onClick={() => { this.props.history.push('/movieCinema/'+detailMovie.id) }}>特惠购票</div>
                    <div className="intro">
                        <div className="content" style={{ maxHeight: this.state.arrowflag && 'none' }}>
                            <p>{detailMovie.dra}</p>
                        </div>
                        <div className="open-arrow"><i className={`iconfont ${this.state.arrowflag ? 'icon--shang' : 'icon--xia'}`} onClick={() => { this.setState((state) => ({ arrowflag: !state.arrowflag })) }}></i></div>
                    </div>
                </div>
                <div className="media">
                    <h3>媒体库</h3>
                    <Flex>
                        <Flex.Item className="media-video">
                            <img src={detailMovie.videoImg} alt="" />
                            <i className="iconfont icon--bofang"></i>
                        </Flex.Item>
                        {
                            this.state.photos.map((item) => {
                                let itemimg = handleImg(item)
                                return (
                                    <Flex.Item className="media-img">
                                        <img src={itemimg} alt="" />
                                    </Flex.Item>
                                )
                            })
                        }
                    </Flex>
                </div>
                <div className="movie-comment">
                    <h3>讨论</h3>
                    <div className="choice">精选</div>
                    <Flex>
                        <Flex.Item className="comment-left">
                            <img src={face} alt="" className="face-img" />
                        </Flex.Item>
                        <Flex.Item className="comment-right">
                            <div className="line-one">
                                <span className="nick ellipsis">哈哈</span>
                                <span className="level"></span>
                            </div>
                            <div className="score">给这部作品打了10分</div>
                            <div className="comdetail">
                                太棒了太棒了太棒了！就是因为它，我才喜欢上的动画希望以后能从事相关行业
                            </div>
                            <div className="bottom">
                                <div className="timeago">2天前</div>
                                <div className="pull-right">
                                    <span className="btn">
                                        <i className="iconfont icon-dianzan"></i>
                                        <span>1952</span>
                                    </span>
                                    <span className="btn">
                                        <i className="iconfont icon-tubiao15"></i>
                                        <span>99</span>
                                    </span>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item className="comment-left">
                            <img src={face} alt="" className="face-img" />
                        </Flex.Item>
                        <Flex.Item className="comment-right">
                            <div className="line-one">
                                <span className="nick ellipsis">哈哈</span>
                                <span className="level"></span>
                            </div>
                            <div className="score">给这部作品打了10分</div>
                            <div className="comdetail">
                                太棒了太棒了太棒了！就是因为它，我才喜欢上的动画希望以后能从事相关行业
                            </div>
                            <div className="bottom">
                                <div className="timeago">2天前</div>
                                <div className="pull-right">
                                    <span className="btn">
                                        <i className="iconfont icon-dianzan"></i>
                                        <span>1952</span>
                                    </span>
                                    <span className="btn">
                                        <i className="iconfont icon-tubiao15"></i>
                                        <span>99</span>
                                    </span>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item className="comment-left">
                            <img src={face} alt="" className="face-img" />
                        </Flex.Item>
                        <Flex.Item className="comment-right">
                            <div className="line-one">
                                <span className="nick ellipsis">哈哈</span>
                                <span className="level"></span>
                            </div>
                            <div className="score">给这部作品打了10分</div>
                            <div className="comdetail">
                                太棒了太棒了太棒了！就是因为它，我才喜欢上的动画希望以后能从事相关行业
                            </div>
                            <div className="bottom">
                                <div className="timeago">2天前</div>
                                <div className="pull-right">
                                    <span className="btn">
                                        <i className="iconfont icon-dianzan"></i>
                                        <span>1952</span>
                                    </span>
                                    <span className="btn">
                                        <i className="iconfont icon-tubiao15"></i>
                                        <span>99</span>
                                    </span>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item className="comment-left">
                            <img src={face} alt="" className="face-img" />
                        </Flex.Item>
                        <Flex.Item className="comment-right">
                            <div className="line-one">
                                <span className="nick ellipsis">哈哈</span>
                                <span className="level"></span>
                            </div>
                            <div className="score">给这部作品打了10分</div>
                            <div className="comdetail">
                                太棒了太棒了太棒了！就是因为它，我才喜欢上的动画希望以后能从事相关行业
                            </div>
                            <div className="bottom">
                                <div className="timeago">2天前</div>
                                <div className="pull-right">
                                    <span className="btn">
                                        <i className="iconfont icon-dianzan"></i>
                                        <span>1952</span>
                                    </span>
                                    <span className="btn">
                                        <i className="iconfont icon-tubiao15"></i>
                                        <span>99</span>
                                    </span>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        );
    }
}

export default MovieDetail;