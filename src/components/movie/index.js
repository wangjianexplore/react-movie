import React from 'react';
import Header from '../header';
import Footer from '../footer'
import './movie.scss';
import { Tabs } from 'antd-mobile';
import movieimg from '../../assets/images/movie.jpg';
import Api from '../../utils/htttp.js';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linestyle: {
        border: '1px #ef4238 solid',
        left: '0',
        bottom: '-1px',
        backgroundColor: '#ef4238'
      },
      movieList: []
    }
  }
  componentDidMount() {
    this.getMovieOnInfoList();
  }
  getMovieOnInfoList = () => {
    let rm = this;
    Api.get('/ajax/movieOnInfoList', {
    }, function (res) {
      rm.setState({
        movieList: res.movieList
      });
    });
  }
  render() {
    const tabs = [
      { title: '正在热映' },
      { title: '即将上映' }
    ];
    return (
      <div className="movie">
        <Header arrow={false} />
        <div className="movie_content">
          <div className="city" onClick={() => { this.props.history.push('./cityList') }}>
            <span className="ellipsis city-name">上海</span>
            <i className="city-entry-arrow"></i>
          </div>
          <div className="search-icon"></div>
          <Tabs tabs={tabs} initialPage={0} animated={false} swipeable={false} useOnPan={false} tabBarInactiveTextColor={'#666'} tabBarActiveTextColor={'#ef4238'} tabBarUnderlineStyle={this.state.linestyle} onTabClick={this.lineHandle}>
            <div className="being">
              {
                this.state.movieList.map((item) => {
                  let img = item.img.replace(/w.h/g, '128.180');
                  return (
                    <div key={item.id} className="list" onClick={() => { this.props.history.push('/movieCinema/'+item.id) }}>
                      <img src={img} className="leftimg" alt="" />
                      <div className="list_r">
                        <div className="col">
                          {
                            item.version && <div className="moviename">{item.nm}<span className="u3d"></span></div>
                          }
                          {
                            item.sc ? <div className="score">观众评<span className="grade">{item.sc}</span></div> : <div className="score">暂无评分</div>
                          }
                          <div className="actor ellipsis">主演: {item.star}</div>
                          <div className="actor ellipsis">{item.showInfo}</div>
                        </div>
                        <div className="btn">购票</div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <div className="being coming">
              <div className="com_img">
                <div className="title">近期最受期待</div>
                <div className="topimg">
                  <div className="expected" onClick={() => { this.props.history.push('/movieDetail') }}>
                    <img src={movieimg} className="rightimg" alt="" />
                    <h5 className="name ellipsis">蜘蛛侠：英雄远征</h5>
                    <p className="date">6月28日</p>
                  </div>
                  <div className="expected">
                    <img src={movieimg} className="rightimg" alt="" />
                    <h5 className="name ellipsis">蜘蛛侠：英雄远征</h5>
                    <p className="date">6月28日</p>
                  </div>
                  <div className="expected">
                    <img src={movieimg} className="rightimg" alt="" />
                    <h5 className="name ellipsis">蜘蛛侠：英雄远征</h5>
                    <p className="date">6月28日</p>
                  </div>
                  <div className="expected">
                    <img src={movieimg} className="rightimg" alt="" />
                    <h5 className="name ellipsis">蜘蛛侠：英雄远征</h5>
                    <p className="date">6月28日</p>
                  </div>
                  <div className="expected">
                    <img src={movieimg} className="rightimg" alt="" />
                    <h5 className="name ellipsis">蜘蛛侠：英雄远征</h5>
                    <p className="date">6月28日</p>
                  </div>
                  <div className="expected">
                    <img src={movieimg} className="rightimg" alt="" />
                    <h5 className="name ellipsis">蜘蛛侠：英雄远征</h5>
                    <p className="date">6月28日</p>
                  </div>
                </div>
              </div>
              <div className="come_list">
                <div onClick={() => { this.props.history.push('/movieDetail') }}>
                  <div className="time">6月13日 周四</div>
                  <div className="list">
                    <img src={movieimg} className="leftimg" alt="" />
                    <div className="list_r">
                      <div className="col">
                        <div className="moviename">X战警：黑凤凰<span className="u3d"></span></div>
                        <div className="score"><span className="grade">19259</span>人想看</div>
                        <div className="actor ellipsis">主演: 苏菲·特纳,詹姆斯·麦卡沃伊,迈克尔·法斯宾德</div>
                        <div className="actor ellipsis">2019-06-15上映</div>
                      </div>
                      <div className="btn btn2">预售</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="time">6月14日 周五</div>
                  <div className="list">
                    <img src={movieimg} className="leftimg" alt="" />
                    <div className="list_r">
                      <div className="col">
                        <div className="moviename">X战警：黑凤凰<span className="u3d"></span></div>
                        <div className="score"><span className="grade">19259</span>人想看</div>
                        <div className="actor ellipsis">主演: 苏菲·特纳,詹姆斯·麦卡沃伊,迈克尔·法斯宾德</div>
                        <div className="actor ellipsis">2019-06-15上映</div>
                      </div>
                      <div className="btn btn2">预售</div>
                    </div>
                  </div>
                  <div className="list">
                    <img src={movieimg} className="leftimg" alt="" />
                    <div className="list_r">
                      <div className="col">
                        <div className="moviename">X战警：黑凤凰<span className="u3d"></span></div>
                        <div className="score"><span className="grade">19259</span>人想看</div>
                        <div className="actor ellipsis">主演: 苏菲·特纳,詹姆斯·麦卡沃伊,迈克尔·法斯宾德</div>
                        <div className="actor ellipsis">2019-06-15上映</div>
                      </div>
                      <div className="btn btn2">预售</div>
                    </div>
                  </div>
                  <div className="list">
                    <img src={movieimg} className="leftimg" alt="" />
                    <div className="list_r">
                      <div className="col">
                        <div className="moviename">X战警：黑凤凰<span className="u3d"></span></div>
                        <div className="score"><span className="grade">19259</span>人想看</div>
                        <div className="actor ellipsis">主演: 苏菲·特纳,詹姆斯·麦卡沃伊,迈克尔·法斯宾德</div>
                        <div className="actor ellipsis">2019-06-15上映</div>
                      </div>
                      <div className="btn btn2">预售</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
        <Footer num="0" />
      </div>
    );
  }
  lineHandle = (tab, index) => {
    if (index) {
      let obj = Object.assign({}, this.state.linestyle, { left: '60%', });
      this.setState({
        linestyle: obj
      });
    } else {
      let obj = Object.assign({}, this.state.linestyle, { left: '0' })
      this.setState({
        linestyle: obj
      });
    }
  }
}

export default Movie;