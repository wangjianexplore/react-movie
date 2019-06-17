import React from "react";
import Header from "../header";
import Footer from "../footer";
import CinemaList from '../cinemaList';
import SelectCinema from '../selectCinema';
import "./cinema.scss";

class Cinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cinema">
        <Header title="影院" />
        <div className="cinema_content">
          <div className="top">
            <div className="city">
              <span className="ellipsis city-name">上海</span>
              <i className="city-entry-arrow" />
            </div>
            <div className="search">
              <span className="iconfont icon-fangdajing" />
              搜影院
            </div>
          </div>
          <SelectCinema />
          <CinemaList />
        </div>
        <Footer num="1" />
      </div>
    );
  }
}

export default Cinema;