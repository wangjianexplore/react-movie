import React from 'react';
import { Tabs, Flex, Button } from 'antd-mobile';
import './selectCinema.scss';
import PropTypes from 'prop-types';
import Api from '../../utils/htttp.js';

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
      districtItemId: 0,
      subwayItemId: 0,
      districtItem: [],
      subwayItem: [],
      brandIndex: 0,
      featureIndex: -1,
      feature2Index: -1
    }
  }
  componentDidMount () {
    this.getFilterCinemas();
  }
  getFilterCinemas = () => {
    let rm = this;
    Api.get('/ajax/filterCinemas', {
      ci: 10
    }, function (res) {
      rm.setState({
        cinemaObj: res
      });
    });
  }
  render () {
    const tabs = [{ title: '商区' }, { title: '地铁站' }]
    let allcity = '',
      brandinfo = '',
      feature = ''
    let { district = { subItems: [] }, subway = { subItems: [] }, brand = { subItems: [] }, service = { subItems: [] }, hallType = { subItems: [] } } = this.state.cinemaObj
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
                        this.setState({
                          districtIndex: index,
                          districtItem: item.subItems ? item.subItems : []
                        })
                      }}
                    >
                      {item.name}({item.count})
                    </div>
                  )
                })}
              </div>
              <div className="menu_right">
                {this.state.districtItem.map((item, index) => {
                  return (
                    <div className={
                      item.id === this.state.districtItemId
                        ? 'menu_item_r menu_item_r_active'
                        : 'menu_item_r'
                    }
                      key={item.id}
                      onClick={() => {
                        this.setState({
                          districtItemId: item.id
                        })
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
                        this.setState({
                          subwayIndex: index,
                          subwayItem: item.subItems ? item.subItems : []
                        })
                      }}
                    >
                      {item.name}({item.count})
                    </div>
                  )
                })}
              </div>
              <div className="menu_right">
                {this.state.subwayItem.map((item, index) => {
                  return (
                    <div className={
                      item.id === this.state.subwayItemId
                        ? 'menu_item_r menu_item_r_active'
                        : 'menu_item_r'
                    }
                      key={item.id}
                      onClick={() => {
                        this.setState({
                          subwayItemId: item.id
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
      console.log(brand);
      brandinfo = (
        <div className="brand">
          {
            brand.subItems.map((item, index) => {
              return (
                <Flex key={item.id} className={index === this.state.brandIndex && 'brandactive'} onClick={() => { this.setState({ brandIndex: index }) }}>
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
                    <Flex.Item key={item.id} className={this.state.featureIndex===item.id&&'flexactive'} onClick={()=> {
                      this.setState({featureIndex:item.id})
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
                    <Flex.Item key={item.id} className={this.state.feature2Index===item.id?'ellipsis flexactive':'ellipsis'} onClick={()=> {
                      this.setState({feature2Index:item.id})
                    }}>{item.name}</Flex.Item>
                  )
                })
              }
            </Flex>
          </div>
          <Flex className="fea_btn" justify="between">
            <Flex.Item>
              <Button>重置</Button>
            </Flex.Item>
            <Flex.Item>
              <Button className="sure">确定</Button>
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
              className="item"
              onClick={() => {
                this.setState(state => ({
                  allcityflag: !state.allcityflag,
                  brandflag: false,
                  featureflag: false,
                  showNum: 1
                }))
              }}
            >
              全城
              <span className="city-entry-arrow" />
            </div>
            <div
              className="item"
              onClick={() => {
                this.setState(state => ({
                  allcityflag: false,
                  brandflag: !state.brandflag,
                  featureflag: false,
                  showNum: 2
                }))
              }}
            >
              品牌
              <span className="city-entry-arrow" />
            </div>
            <div
              className="item"
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
  getChildFlag: () => { }
}
SelectCinema.propTypes = {
  getChildFlag: PropTypes.func
}
export default SelectCinema
