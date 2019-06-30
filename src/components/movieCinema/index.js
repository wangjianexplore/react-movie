import React from 'react';
import Header from "../header";
import './movieCinema.scss';
import poster from '../../assets/images/movie.jpg';
import sdmax from '../../assets/images/sdmax.png';
import CinemaList from '../cinemaList';
import SelectCinema from '../selectCinema';
import { Flex } from 'antd-mobile';
import { Link } from 'react-router-dom';

class MovieCinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      flag: false,
      fixedFlag: false
    };
  }
  componentDidMount() {
    this.handleFixed();
  }
  componentDidUpdate() {
  }
  getChildFlag = (flag) => {
    this.setState({
      flag: flag
    });
  }
  handleFixed() {
    // let x = document.getElementById('fixedId').offsetTop;
    window.onscroll = () => {
      let y = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      y > 230 ? this.setState({ fixedFlag: true }) : this.setState({ fixedFlag: false });
    }
  }
  render() {
    const MovieDetail = <div className="movie-detail">
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
      <span className="iconfont icon-fanhui-copy-copy"></span>
    </div>
    return (
      <div className="movieCinema">
        <Header title="X战警：黑凤凰" position="relative" />
        <div className="mc_main">
          <Link to="/movieDetail">
            {!this.state.allcityflag && !this.state.brandflag && !this.state.featureflag && MovieDetail}
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
            <SelectCinema ref="selectCinema" getChildFlag={this.getChildFlag} />
          </div>
          <CinemaList />
        </div>
      </div>
    );
  }
}

export default MovieCinema;