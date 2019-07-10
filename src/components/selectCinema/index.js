import React from 'react';
import { Tabs, Flex, Button } from 'antd-mobile';
import './selectCinema.scss';
import PropTypes from 'prop-types';
import api from '../../utils/api';

class SelectCinema extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      linestyle: {
        border: '1px #ef4238 solid',
        bottom: '-1px',
        backgroundColor: '#ef4238'
      },
      cinemaObj: {},
      allcityflag: false,
      brandflag: false,
      featureflag: false,
      showNum: 0,
      districtIndex: 0,
      subwayIndex: 0,
      areaId: -1,
      subwayItemId: -1,
      districtItem: [],
      subwayItem: [],
      brandIndex: 0,
      serviceId: -1,
      hallTypeId: -1,
      districtId: -1,
      areaname: '全城',
      busname: '',
      subwayname: '',
      brandname: '品牌',
      lineId: -1,
      brandId: -1
    }
  }
  componentDidMount() {
    this.getFilterCinemas();
  }
  getFilterCinemas = () => {
    let rm = this;
    api.get('/ajax/filterCinemas', {
      ci: 10
    }, function (res) {
      rm.setState({
        cinemaObj: res
      });
    });
  }
  // districtCiname = (id) => {
  //   this.setState({
  //     areaId: id,
  //     allcityflag: false
  //   }, () => {
  //     this.pr(this.props.date, this.props.index);
  //   });
  // }
  render() {
    const tabs = [{ title: '商区' }, { title: '地铁站' }]
    let allcity = '',
      brandinfo = '',
      feature = ''
    let { district = { subItems: [] }, subway = { subItems: [] }, brand = { subItems: [] }, service = { subItems: [] }, hallType = { subItems: [] } } = this.state.cinemaObj;
    let { getCinema, date, index } = this.props;
    if (this.state.allcityflag && this.state.showNum === 1) {
      allcity = (
        <div className="allcity">
          <Tabs
            tabs={tabs}
            tabBarInactiveTextColor={'#666'}
            tabBarActiveTextColor={'#ef4238'}
            tabBarUnderlineStyle={this.state.linestyle}
            initialPage={0}
            animated={false}
            useOnPan={false}
            className="tab_cinema"
          >
            <div className="menu_main">
              <div className="menu_left">
                {district.subItems.map((item, index) => {
                  return (
                    <div
                      className={
                        index === this.state.districtIndex
                          ? 'menu_item menu_item_active'
                          : 'menu_item'
                      }
                      key={item.id}
                      onClick={() => {
                        this.setState((state) => {
                          return {
                            districtIndex: index,
                            districtId: item.id,
                            busname: item.name,
                            allcityflag: item.id === -1 ? false : true,
                            areaname: item.id === -1 ? item.name : state.areaname,
                            districtItem: item.subItems ? item.subItems : []
                          }
                        }, () => {
                          item.id === -1 && getCinema(date, index);
                        })
                      }}
                    >
                      {item.name}({item.count})
                    </div>
                  )
                })}
              </div>
              <div className="menu_right">
                {this.state.districtItem.map((item) => {
                  return (
                    <div className={
                      item.id === this.state.areaId
                        ? 'menu_item_r menu_item_r_active'
                        : 'menu_item_r'
                    }
                      key={item.id}
                      onClick={() => {
                        this.setState((state) => {
                          return {
                            areaId: item.id,
                            allcityflag: false,
                            areaname: item.id === -1 ? state.busname : item.name
                          }
                        }, () => {
                          getCinema(date, index);
                        });
                      }}>
                      <span className="menu_item_r_name">{item.name}</span>
                      <span>{item.count}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="menu_main">
              <div className="menu_left">
                {subway.subItems.map((item, index) => {
                  return (
                    <div
                      className={
                        index === this.state.subwayIndex
                          ? 'menu_item menu_item_active'
                          : 'menu_item'
                      }
                      key={item.id}
                      onClick={() => {
                        this.setState((state) => {
                          return {
                            subwayIndex: index,
                            subwayname: item.name,
                            lineId: item.id,
                            allcityflag: item.id === -1 ? false : true,
                            areaname: item.id === -1 ? item.name : state.areaname,
                            subwayItem: item.subItems ? item.subItems : []
                          }
                        })
                      }}
                    >
                      {item.name}({item.count})
                    </div>
                  )
                })}
              </div>
              <div className="menu_right">
                {this.state.subwayItem.map((item) => {
                  return (
                    <div className={
                      item.id === this.state.subwayItemId
                        ? 'menu_item_r menu_item_r_active'
                        : 'menu_item_r'
                    }
                      key={item.id}
                      onClick={() => {
                        this.setState((state) => {
                          return {
                            subwayItemId: item.id,
                            allcityflag: false,
                            areaname: item.id === -1 ? state.subwayname : item.name
                          }
                        }, () => {
                          getCinema(date, index);
                        })
                      }}>
                      <span className="menu_item_r_name">{item.name}</span>
                      <span>{item.count}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Tabs>
        </div>
      )
    }
    if (this.state.brandflag && this.state.showNum === 2) {
      brandinfo = (
        <div className="brand">
          {
            brand.subItems.map((item, i) => {
              return (
                <Flex key={item.id} className={i === this.state.brandIndex && 'brandactive'} onClick={() => {
                  this.setState({
                    brandIndex: i,
                    brandflag: false,
                    brandId: item.id,
                    brandname: item.id === -1 ? '品牌' : item.name
                  }, () => {
                    getCinema(date, index);
                  })
                }}>
                  <Flex.Item>{item.name}</Flex.Item>
                  <Flex.Item>{item.count}</Flex.Item>
                </Flex>
              )
            })
          }
        </div>
      )
    }
    if (this.state.featureflag && this.state.showNum === 3) {
      feature = (
        <div className="feature">
          <div className="fea_main">
            <Flex>特色功能</Flex>
            <Flex wrap="wrap">
              {
                service.subItems.map((item, index) => {
                  return (
                    <Flex.Item key={item.id} className={this.state.serviceId === item.id && 'flexactive'} onClick={() => {
                      this.setState({ serviceId: item.id })
                    }}>{item.name}</Flex.Item>
                  )
                })
              }
            </Flex>
            <Flex>特殊厅</Flex>
            <Flex wrap="wrap">
              {
                hallType.subItems.map((item) => {
                  return (
                    <Flex.Item key={item.id} className={this.state.hallTypeId === item.id ? 'ellipsis flexactive' : 'ellipsis'} onClick={() => {
                      this.setState({ hallTypeId: item.id })
                    }}>{item.name}</Flex.Item>
                  )
                })
              }
            </Flex>
          </div>
          <Flex className="fea_btn" justify="between">
            <Flex.Item>
              <Button onClick={() => {
                this.setState({
                  serviceId: -1,
                  hallTypeId: -1
                })
              }}>重置</Button>
            </Flex.Item>
            <Flex.Item>
              <Button className="sure" onClick={() => { this.setState({ featureflag: false }, () => { getCinema(date, index) }) }}>确定</Button>
            </Flex.Item>
          </Flex>
        </div>
      )
    }
    return (
      <div>
        <div
          className="wrap"
          onClick={() => {
            this.props.getChildFlag(true)
          }}
        >
          <div className="tab">
            <div
              className={this.state.allcityflag || this.state.showNum === 1 ? 'item item_active' : 'item'}
              onClick={() => {
                this.setState(state => ({
                  allcityflag: !state.allcityflag,
                  brandflag: false,
                  featureflag: false,
                  showNum: 1
                }))
              }}
            >
              {this.state.areaname}
              <span className="city-entry-arrow" />
            </div>
            <div
              className={this.state.brandflag || this.state.showNum === 2 ? 'item ellipsis item_active' : 'item ellipsis'}
              onClick={() => {
                this.setState(state => ({
                  allcityflag: false,
                  brandflag: !state.brandflag,
                  featureflag: false,
                  showNum: 2
                }))
              }}
            >
              {this.state.brandname}
              <span className="city-entry-arrow" />
            </div>
            <div
              className={this.state.featureflag || this.state.showNum === 3 ? 'item item_active' : 'item'}
              onClick={() => {
                this.setState(state => ({
                  allcityflag: false,
                  brandflag: false,
                  featureflag: !state.featureflag,
                  showNum: 3
                }))
              }}
            >
              特色
              <span className="city-entry-arrow" />
            </div>
          </div>
          {allcity}
          {brandinfo}
          {feature}
        </div>
        {(this.state.allcityflag ||
          this.state.brandflag ||
          this.state.featureflag) && (
            <div
              className="blacker"
              onTouchStart={() => {
                this.setState(() => ({
                  allcityflag: false,
                  brandflag: false,
                  featureflag: false
                }))
              }}
            />
          )}
      </div>
    )
  }
}

SelectCinema.defaultProps = {
  getChildFlag: () => { },
  date: '',
  index: 0
}
SelectCinema.propTypes = {
  getChildFlag: PropTypes.func,
  date: PropTypes.string,
  index: PropTypes.number
}
export default SelectCinema
