import React from 'react';
import Header from "../header";
import './movieCinema.scss';
import sdmax from '../../assets/images/sdmax.png';
import CinemaList from '../cinemaList';
import SelectCinema from '../selectCinema';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import { handleImg, showTime, formatDate } from '../../utils/tool';
import Loading from '../loading';

class MovieCinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      flag: false,
      fixedFlag: false,
      detailMovie: '',
      cinemaList: [],
      showDays: [],
      dateIndex: 0,
      loadingflag: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleFixed, false);
    this.getDetailmovie();
    this.getCinema(formatDate(new Date(), 'yyyy-MM-dd'), 0);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleFixed, false);
  }
  getDetailmovie = () => {
    let rm = this;
    api.get('/ajax/detailmovie', {
      movieId: this.props.match.params.id
    }, function (res) {
      let data = res.detailMovie;
      rm.setState({
        detailMovie: data
      });
    });
  }
  getChildFlag = (flag) => {
    this.setState({
      flag: flag
    });
  }
  handleFixed = () => {
    let y = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    y > 230 ? this.setState({ fixedFlag: true }) : this.setState({ fixedFlag: false });
  }
  getCinema = (date, index) => {
    let rm = this;
    rm.setState({
      cinemaList: [],
      dateIndex: index,
      loadingflag: true
    });
    let todaytime = (new Date()).getTime();
    api.post('/ajax/movie?forceUpdate=' + todaytime, {
      movieId: rm.props.match.params.id,
      day: date,
      offset: 0,
      limit: 20,
      districtId: -1,
      lineId: -1,
      hallType: -1,
      brandId: -1,
      serviceId: -1,
      areaId: -1,
      stationId: -1,
      item: '',
      updateShowDay: true,
      reqId: todaytime,
      cityId: 10
    }, function (res) {
      let data = res;
      rm.setState({
        cinemaList: data.cinemas,
        loadingflag: false
      });
      if (data.showDays) {
        let showDaysArr = data.showDays.dates;
        !data.cinemas.length && rm.getCinema(data.showDays.dates[0].date, index);
        rm.setState({
          showDays: showDaysArr
        });
      }
    });
  }

  render() {
    let img = '', detailMovie = {};
    if (this.state.detailMovie) {
      detailMovie = this.state.detailMovie;
      img = handleImg(detailMovie.img);
    }
    return (
      <div className="movieCinema">
        <Header title={detailMovie.nm} position="relative" />
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
                  {detailMovie.sc ? <div className="score ellipsis">{detailMovie.sc}<span className="snum">({detailMovie.snum}万人评)</span></div> : <div className="score ellipsis"><span className="snum snum-no">暂无评分</span></div>}
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
              <span className="iconfont icon-fanhui-copy-copy"></span>
            </div>
          </Link>
          <div id="fixedId" className={this.state.fixedFlag ? 'fixedClass' : ''}>
            <div className="showDays" style={{ position: 'relative', zIndex: 100 }}>
              <Flex>
                {
                  this.state.showDays.map((item, index) => {
                    return (
                      <Flex.Item onClick={this.getCinema.bind(this, item.date, index)} className={this.state.dateIndex === index && 'active_item'} key={item.date}>{showTime(item.date)}</Flex.Item>
                    )
                  })
                }
              </Flex>
            </div>
            <SelectCinema />
          </div>
          <Loading loadingflag={this.state.loadingflag}/>
          <CinemaList cinemaList={this.state.cinemaList} />
        </div>
      </div>
    );
  }
}

export default MovieCinema;