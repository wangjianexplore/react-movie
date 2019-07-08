import React from 'react';
import Header from '../header';
import Footer from '../footer'
import './movie.scss';
import { Tabs } from 'antd-mobile';
import api from '../../utils/api';
import { handleImg, token } from '../../utils/tool';

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
      movieList: [],
      expectList: [],
      comingList: []
    }
  }
  componentDidMount() {
    this.getMovieOnInfoList();
    this.getExpectList();
    this.getComingList();
  }
  getMovieOnInfoList = () => {
    let rm = this;
    api.get('/ajax/movieOnInfoList', {
    }, function (res) {
      rm.setState({
        movieList: res.movieList
      });
    });
  }
  getExpectList = () => {
    let rm = this;
    api.get('/ajax/mostExpected', {
      ci: 10,
      limit: 10,
      offset: 0,
      token: token
    }, function (res) {
      res.coming && rm.setState({
        expectList: res.coming
      });
    });
  }
  getComingList = () => {
    let rm = this;
    api.get('/ajax/comingList', {
      ci: 10,
      token: token
    }, function (res) {
      rm.setState({
        comingList: res.coming
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
        <Header title="电影" arrow={false} />
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
                  return (
                    <div key={item.id} className="list" onClick={() => { this.props.history.push('/movieCinema/' + item.id) }}>
                      <img src={handleImg(item.img)} className="leftimg" alt="" />
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
                  {
                    this.state.expectList.map((item) => {
                      return (
                        <div className="expected" key={item.id} onClick={() => { this.props.history.push('/movieDetail') }}>
                          <div className="expContent">
                            <img src={handleImg(item.img)} className="rightimg" alt="" />
                            <div className="wish-bg"></div>
                            <div className="wish">{item.wish}人想看</div>
                          </div>
                          <h5 className="name ellipsis">{item.nm}</h5>
                          <p className="date">{item.comingTitle.split(' ')[0]}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="come_list">
                {
                  this.state.comingList.map((item, index, arr) => {
                    return (
                      <div key={item.id}>
                        {
                          index === 0 ? <div className="time">{item.comingTitle.split(' ')[0]}</div> : (item.comingTitle === arr[index - 1].comingTitle ? '' : <div className="time">{item.comingTitle.split(' ')[0]}</div>)
                        }
                        <div className="list" onClick={() => { this.props.history.push('/movieDetail') }}>
                          <img src={handleImg(item.img)} className="leftimg" alt="" />
                          <div className="list_r">
                            <div className="col">
                              <div className="moviename ellipsis">
                                {item.nm}
                                {item.version === 'v3d imax' && <span className="u3d"></span>}
                                {item.version === 'v3d' && <span className="p3d"></span>}
                              </div>
                              <div className="score"><span className="grade">{item.wish}</span>人想看</div>
                              <div className="actor ellipsis">{item.star}</div>
                              <div className="actor ellipsis">{item.showInfo}</div>
                            </div>
                            <div className="btn btn2">预售</div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
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