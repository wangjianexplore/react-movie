import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './cinema.scss';
import { Tabs, Menu } from 'antd-mobile';

class Cinema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linestyle: {
                border: '1px #ef4238 solid',
                bottom: '-1px',
                backgroundColor: '#ef4238'
            }
        }
    }
    render() {
        const tabs = [
            { title: '商区' },
            { title: '地铁站' }
        ];
        const initData = [
            {
                value: '1',
                label: 'Food',
                children: [
                    {
                        label: 'All Foods',
                        value: '1',
                        disabled: false,
                    },
                    {
                        label: 'Chinese Food',
                        value: '2',
                    }, {
                        label: 'Hot Pot',
                        value: '3',
                    }, {
                        label: 'Buffet',
                        value: '4',
                    }, {
                        label: 'Fast Food',
                        value: '5',
                    }, {
                        label: 'Snack',
                        value: '6',
                    }, {
                        label: 'Bread',
                        value: '7',
                    }, {
                        label: 'Fruit',
                        value: '8',
                    }, {
                        label: 'Noodle',
                        value: '9',
                    }, {
                        label: 'Leisure Food',
                        value: '10',
                    }, {
                        label: 'Leisure Food',
                        value: '11',
                    }, {
                        label: 'Leisure Food',
                        value: '12',
                    }, {
                        label: 'Leisure Food',
                        value: '13',
                    }, {
                        label: 'Leisure Food',
                        value: '14',
                    }, {
                        label: 'Leisure Food',
                        value: '15',
                    }, {
                        label: 'Leisure Food',
                        value: '16',
                    }],
            }, {
                value: '2',
                label: 'Supermarket',
                children: [
                    {
                        label: 'All Supermarkets',
                        value: '1',
                    }, {
                        label: 'Supermarket',
                        value: '2',
                        disabled: true,
                    }, {
                        label: 'C-Store',
                        value: '3',
                    }, {
                        label: 'Personal Care',
                        value: '4',
                    }],
            },
            {
                value: '3',
                label: 'Extra',
                isLeaf: true,
                children: [
                    {
                        label: 'you can not see',
                        value: '1',
                    },
                ],
            },
        ];
        return (
            <div className="cinema">
                <Header title="影院" />
                <div className="content">
                    <div className="top">
                        <div className="city">
                            <span className="ellipsis city-name">上海</span>
                            <i className="city-entry-arrow"></i>
                        </div>
                        <div className="search">
                            <span className="iconfont icon-fangdajing"></span>
                            搜影院
                        </div>
                    </div>
                    <div className="wrap">
                        <div className="tab">
                            <div className="item">全城<span className="city-entry-arrow"></span></div>
                            <div className="item">品牌<span className="city-entry-arrow"></span></div>
                            <div className="item">特色<span className="city-entry-arrow"></span></div>
                            <Tabs tabs={tabs} tabBarInactiveTextColor={'#666'} tabBarActiveTextColor={'#ef4238'} tabBarUnderlineStyle={this.state.linestyle} initialPage={0} animated={false} useOnPan={false}>
                                <div className="menu_main">
                                    <Menu
                                        className="foo-menu"
                                        data={initData}
                                        value={['1', '3']}
                                        height={document.documentElement.clientHeight * 0.6}
                                    />
                                </div>
                                <div>
                                    Content of second tab
                                </div>
                            </Tabs>
                        </div>
                    </div>
                    <div className="infolist">
                        <div className="listitem">
                            <div className="item_wrap">
                                <div className="title">
                                    <span>大光明丽星VIP影城（博山路店）</span>
                                    <span className="price">37</span>
                                    <span className="yuan">元</span>
                                </div>
                                <div className="location">
                                    <div className="loca_l ellipsis">浦东新区博山东路88号4层01号</div>
                                    <div className="loca_r">1.4km</div>
                                </div>
                                <div className="label">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                </div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="item_wrap">
                                <div className="title">
                                    <span>大光明丽星VIP影城（博山路店）</span>
                                    <span className="price">37</span>
                                    <span className="yuan">元</span>
                                </div>
                                <div className="location">
                                    <div className="loca_l ellipsis">浦东新区博山东路88号4层01号</div>
                                    <div className="loca_r">1.4km</div>
                                </div>
                                <div className="label">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                </div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="item_wrap">
                                <div className="title">
                                    <span>大光明丽星VIP影城（博山路店）</span>
                                    <span className="price">37</span>
                                    <span className="yuan">元</span>
                                </div>
                                <div className="location">
                                    <div className="loca_l ellipsis">浦东新区博山东路88号4层01号</div>
                                    <div className="loca_r">1.4km</div>
                                </div>
                                <div className="label">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                </div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="item_wrap">
                                <div className="title">
                                    <span>大光明丽星VIP影城（博山路店）</span>
                                    <span className="price">37</span>
                                    <span className="yuan">元</span>
                                </div>
                                <div className="location">
                                    <div className="loca_l ellipsis">浦东新区博山东路88号4层01号</div>
                                    <div className="loca_r">1.4km</div>
                                </div>
                                <div className="label">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                </div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="item_wrap">
                                <div className="title">
                                    <span>大光明丽星VIP影城（博山路店）</span>
                                    <span className="price">37</span>
                                    <span className="yuan">元</span>
                                </div>
                                <div className="location">
                                    <div className="loca_l ellipsis">浦东新区博山东路88号4层01号</div>
                                    <div className="loca_r">1.4km</div>
                                </div>
                                <div className="label">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                </div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="item_wrap">
                                <div className="title">
                                    <span>大光明丽星VIP影城（博山路店）</span>
                                    <span className="price">37</span>
                                    <span className="yuan">元</span>
                                </div>
                                <div className="location">
                                    <div className="loca_l ellipsis">浦东新区博山东路88号4层01号</div>
                                    <div className="loca_r">1.4km</div>
                                </div>
                                <div className="label">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                </div>
                            </div>
                        </div>
                        <div className="listitem">
                            <div className="item_wrap">
                                <div className="title">
                                    <span>大光明丽星VIP影城（博山路店）</span>
                                    <span className="price">37</span>
                                    <span className="yuan">元</span>
                                </div>
                                <div className="location">
                                    <div className="loca_l ellipsis">浦东新区博山东路88号4层01号</div>
                                    <div className="loca_r">1.4km</div>
                                </div>
                                <div className="label">
                                    <div className="allowRefund">退</div>
                                    <div className="endorse">改签</div>
                                    <div className="snack">小吃</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer num="1" />
            </div>
        );
    }
}

export default Cinema;