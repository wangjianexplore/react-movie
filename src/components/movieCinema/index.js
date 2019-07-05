import React from 'react';
import Header from "../header";
import './movieCinema.scss';
import sdmax from '../../assets/images/sdmax.png';
import CinemaList from '../cinemaList';
import SelectCinema from '../selectCinema';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Api from '../../utils/htttp.js';

class MovieCinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      flag: false,
      fixedFlag: false,
      detailMovie: ''
    };
  }
  componentDidMount() {
    this.handleFixed();
    this.getDetailmovie();
  }
  componentDidUpdate() {
  }
  getDetailmovie = () => {
    let rm = this;
    Api.get('/ajax/detailmovie', {
      movieId: this.props.match.params.id
    }, function (res) {
      rm.setState({
        detailMovie: res.detailMovie
      });
    });
  }
  getChildFlag = (flag) => {
    this.setState({
      flag: flag
    });
  }
  handleFixed() {
    window.onscroll = () => {
      let y = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      y > 230 ? this.setState({ fixedFlag: true }) : this.setState({ fixedFlag: false });
    }
  }
  render() {
    let img = '', detailMovie = {};
    if (this.state.detailMovie) {
      detailMovie = this.state.detailMovie;
      img = detailMovie.img.replace(/w.h/g, '128.180');
    }
    return (
      <div className="movieCinema">
        <Header title="X战警：黑凤凰" position="relative" />
        <div className="mc_main">
          <Link to="/movieDetail">
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
                  {detailMovie.sc?<div className="score ellipsis">{detailMovie.sc}<span className="snum">({detailMovie.snum}万人评)</span></div>:<div className="score ellipsis"><span className="snum snum-no">暂无评分</span></div>}
                  <div className="type ellipsis">
                    <span>{detailMovie.cat}</span>
                    <div className="type-group">
                      {detailMovie.version&&<img className="type_img" src={sdmax} alt="" />}
                    </div>
                  </div>
                  <div className="title-en-name ellipsis">{detailMovie.fra}/{detailMovie.dur}分钟</div>
                  <div className="title-en-name ellipsis">{detailMovie.pubDesc}</div>
                </div>
              </div>
              <span className="iconfont icon-fanhui-copy-copy"></span>
            </div>
          </Link>
          <div id="fixedId" className={this.state.fixedFlag ? 'fixedClass' : ''}>
            <div className="showDays" style={{ position: 'relative', zIndex: 100 }}>
              <Flex>
                <Flex.Item className="active_item">今天06月16日</Flex.Item>
                <Flex.Item>今天06月16日</Flex.Item>
                <Flex.Item>今天06月16日</Flex.Item>
                <Flex.Item>今天06月16日</Flex.Item>
                <Flex.Item>今天06月16日</Flex.Item>
                <Flex.Item>今天06月16日</Flex.Item>
                <Flex.Item>今天06月16日</Flex.Item>
              </Flex>
            </div>
            <SelectCinema />
          </div>
          <CinemaList />
        </div>
      </div>
    );
  }
}

export default MovieCinema;