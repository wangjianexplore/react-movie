import React from "react";
import Header from "../header";
import Footer from "../footer";
import CinemaList from '../cinemaList';
import SelectCinema from '../selectCinema';
import "./cinema.scss";
import api from '../../utils/api';
import { formatDate } from '../../utils/tool';
import Loading from '../loading';

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemaList: [],
      loadingflag: false
    };
  }
  componentDidMount() {
    this.getCinema();
  }
  getCinema = () => {
    let rm = this;
    rm.setState({
      loadingflag: true
    });
    let { districtId, areaId, subwayItemId, lineId, brandId, serviceId, hallTypeId } = this.refs.selectCinema.state;
    let todaytime = new Date().getTime();
    api.get('/ajax/cinemaList', {
      day: formatDate(new Date(), 'yyyy-MM-dd'),
      offset: 0,
      limit: 20,
      districtId: districtId,
      lineId: lineId,
      hallType: hallTypeId,
      brandId: brandId,
      serviceId: serviceId,
      areaId: areaId,
      stationId: subwayItemId,
      item: '',
      updateShowDay: true,
      reqId: todaytime,
      cityId: 10
    }, function (res) {
      rm.setState({
        cinemaList: res.cinemas,
        loadingflag: false,
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
          <SelectCinema ref="selectCinema" getCinema={this.getCinema} />
          <div className="contentList">
            <Loading loadingflag={this.state.loadingflag} />
            {!this.state.loadingflag && <CinemaList cinemaList={this.state.cinemaList} loadingflag={this.state.loadingflag} />}
          </div>
        </div>
        <Footer num="1" />
      </div>
    );
  }
}

export default Cinema;
