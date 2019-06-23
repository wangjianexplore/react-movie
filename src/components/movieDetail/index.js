import React from 'react';
import Header from '../header';
import poster from '../../assets/images/movie.jpg';
import sdmax from '../../assets/images/sdmax.png';
import face from '../../assets/images/face.png';
import './movieDetail.scss';
import { Flex } from 'antd-mobile';
import mediaImg from '../../assets/images/media.webp';

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowflag: false
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="movieDetail">
                <Header position="relative" title="千与千寻" />
                <div className="movie-detail">
                    <div className="movie-filter"></div>
                    <div className="poster-bg"></div>
                    <div className="mc_detail">
                        <div className="poster">
                            <img className="poster_img" src={poster} alt="" />
                        </div>
                        <div className="mc_content">
                            <div className="title ellipsis">X战警：黑凤凰</div>
                            <div className="title-en-name ellipsis">X-Men: Dark Phoenix</div>
                            <div className="score ellipsis">7.7<span className="snum">(11.9万人评)</span></div>
                            <div className="type ellipsis">
                                <span>动作,冒险,科幻</span>
                                <div className="type-group">
                                    <img className="type_img" src={sdmax} alt="" />
                                </div>
                            </div>
                            <div className="title-en-name ellipsis">美国/114分钟</div>
                            <div className="title-en-name ellipsis">2019-06-06大陆上映</div>
                        </div>
                    </div>
                </div>
                <div className="purchase">
                    <div className="pru-btn" onClick={()=>{this.props.history.push('/movieCinema')}}>特惠购票</div>
                    <div className="intro">
                        <div className="content" style={{ maxHeight: this.state.arrowflag && 'none' }}>
                            <p>千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。千寻仓皇逃出，一个叫小白的人救了他，喂了她阻止身体消失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，而且必须获得一份工作才能不被魔法变成别的东西。千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。渐渐她不再被那些怪模怪样的人吓倒，并从小玲那儿知道了小白是凶恶的汤婆婆的弟子。一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，她用河神送给她的药丸驱出了小白身体内的封印以及守封印的小妖精，但小白还是没有醒过来。为了救小白，千寻又踏上了她的冒险之旅。</p>
                        </div>
                        <div className="open-arrow"><i className={`iconfont ${this.state.arrowflag ? 'icon--shang' : 'icon--xia'}`} onClick={() => { this.setState((state) => ({ arrowflag: !state.arrowflag })) }}></i></div>
                    </div>
                </div>
                <div className="media">
                    <h3>媒体库</h3>
                    <Flex>
                        <Flex.Item className="media-video">
                            <img src={mediaImg} alt="" />
                            <i className="iconfont icon--bofang"></i>
                        </Flex.Item>
                        <Flex.Item className="media-img">
                            <img src={mediaImg} alt="" />
                        </Flex.Item>
                        <Flex.Item className="media-img">
                            <img src={mediaImg} alt="" />
                        </Flex.Item>
                        <Flex.Item className="media-img">
                            <img src={mediaImg} alt="" />
                        </Flex.Item>
                        <Flex.Item className="media-img">
                            <img src={mediaImg} alt="" />
                        </Flex.Item>
                        <Flex.Item className="media-img">
                            <img src={mediaImg} alt="" />
                        </Flex.Item>
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