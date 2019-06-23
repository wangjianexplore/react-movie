import React from 'react';
import { Tabs, Flex, Button } from "antd-mobile";
import './selectCinema.scss';

class SelectCinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linestyle: {
        border: "1px #ef4238 solid",
        bottom: "-1px",
        backgroundColor: "#ef4238"
      },
      allcityflag: false,
      brandflag: false,
      featureflag: false,
      showNum: 0
    };
  }
  render() {
    const tabs = [{ title: "商区" }, { title: "地铁站" }];
    let allcity = '',
      brand = '',
      feature = '';
    if (this.state.allcityflag && this.state.showNum === 1) {
      allcity = <div className="allcity">
        <Tabs
          tabs={tabs}
          tabBarInactiveTextColor={"#666"}
          tabBarActiveTextColor={"#ef4238"}
          tabBarUnderlineStyle={this.state.linestyle}
          initialPage={0}
          animated={false}
          useOnPan={false}
          className="tab_cinema"
        >
          <div className="menu_main">
            <div className="menu_left">
              <div className="menu_item menu_item_active">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
              <div className="menu_item">浦东新区</div>
            </div>
            <div className="menu_right">
              <div className="menu_item_r">全部</div>
              <div className="menu_item_r">世博园</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
              <div className="menu_item_r">迪士尼</div>
            </div>
          </div>
          <div className="menu_main">123</div>
        </Tabs>
      </div>
    }
    if (this.state.brandflag && this.state.showNum === 2) {
      brand = <div className="brand">
        <Flex>
          <Flex.Item>全部</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>万达影城</Flex.Item>
          <Flex.Item>60</Flex.Item>
        </Flex>
      </div>
    }
    if (this.state.featureflag && this.state.showNum === 3) {
      feature = <div className="feature">
        <div className="fea_main">
          <Flex>特色功能</Flex>
          <Flex>
            <Flex.Item>全部</Flex.Item>
            <Flex.Item>会员卡</Flex.Item>
            <Flex.Item>可改签</Flex.Item>
            <Flex.Item>可退票</Flex.Item>
          </Flex>
          <Flex>特殊厅</Flex>
          <Flex wrap="wrap">
            <Flex.Item>全部</Flex.Item>
            <Flex.Item>会员卡</Flex.Item>
            <Flex.Item>可改签</Flex.Item>
            <Flex.Item>可退票</Flex.Item>
            <Flex.Item>全部</Flex.Item>
            <Flex.Item>会员卡</Flex.Item>
            <Flex.Item>可改签</Flex.Item>
            <Flex.Item>可退票</Flex.Item>
            <Flex.Item>全部</Flex.Item>
            <Flex.Item>会员卡</Flex.Item>
            <Flex.Item>可改签</Flex.Item>
            <Flex.Item>可退票</Flex.Item>
            <Flex.Item>全部</Flex.Item>
            <Flex.Item>会员卡</Flex.Item>
            <Flex.Item>可改签</Flex.Item>
            <Flex.Item>可退票</Flex.Item>
          </Flex>
        </div>
        <Flex className="fea_btn" justify="between">
          <Flex.Item><Button>重置</Button></Flex.Item>
          <Flex.Item><Button className="sure">确定</Button></Flex.Item>
        </Flex>
      </div>
    }
    return (
      <div>
        <div className="wrap">
          <div className="tab">
            <div className="item" onClick={() => { this.setState((state) => ({ allcityflag: !state.allcityflag, brandflag: false, featureflag: false, showNum: 1 })) }}>
              全城
                <span className="city-entry-arrow" />
            </div>
            <div className="item" onClick={() => { this.setState((state) => ({ allcityflag: false, brandflag: !state.brandflag, featureflag: false, showNum: 2 })) }}>
              品牌
                <span className="city-entry-arrow" />
            </div>
            <div className="item" onClick={() => { this.setState((state) => ({ allcityflag: false, brandflag: false, featureflag: !state.featureflag, showNum: 3 })) }}>
              特色
                <span className="city-entry-arrow" />
            </div>
          </div>
          {allcity}
          {brand}
          {feature}
        </div>
        {
          (this.state.allcityflag || this.state.brandflag || this.state.featureflag) && <div className="blacker" onTouchStart={() => { this.setState(() => ({ allcityflag: false, brandflag: false, featureflag: false })) }}></div>
        }
      </div>
    );
  }
}
export default SelectCinema;