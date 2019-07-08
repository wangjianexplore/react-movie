import React from "react";
import Header from "../header";
import Footer from "../footer";
import CinemaList from '../cinemaList';
import SelectCinema from '../selectCinema';
import "./cinema.scss";
import api from '../../utils/api';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaList: []
    };
  }
  componentDidMount() {
    this.getCinemaList();
  }
  getCinemaList = () => {
    let rm = this;
    api.get('/ajax/cinemaList', {
      day: '2019-07-08',
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
      reqId: 1562600722956,
      cityId: 10
    }, function (res) {
      rm.setState({
        cinemaList: res.cinemas
      });
    });
  }
  render() {
    return (
      <div className="cinema">
        <Header title="影院" />
        <div className="cinema_content">
          <div className="top">
            <div className="city" onClick={() => { this.props.history.push('./cityList') }}>
              <span className="ellipsis city-name">上海</span>
              <i className="city-entry-arrow" />
            </div>
            <div className="search">
              <span className="iconfont icon-fangdajing" />
              搜影院
            </div>
          </div>
          <SelectCinema />
          <CinemaList cinemaList={this.state.cinemaList} />
        </div>
        <Footer num="1" />
      </div>
    );
  }
}

export default Cinema;
