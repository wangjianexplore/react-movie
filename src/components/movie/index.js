import React from 'react';
import Header from '../header';
import './movie.scss';
import { Tabs, Flex } from 'antd-mobile';
import movieimg from '../../assets/movie.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linestyle: {
                border: '1px #ef4238 solid',
                left: '0',
                backgroundColor: '#ef4238'
            }
        }
    }
    render() {
        const tabs = [
            { title: '正在热映' },
            { title: '即将上映' },
        ];
        return (
            <div className="movie_main">
                <Header/>
                <div className="movie_content">
                    <div className="city">
                        <span className="ellipsis city-name">上海</span>
                        <i className="city-entry-arrow"></i>
                    </div>
                    <div className="search-icon"></div>
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} tabBarInactiveTextColor={'#666'} tabBarActiveTextColor={'#ef4238'} tabBarUnderlineStyle={this.state.linestyle} onTabClick={this.lineHandle}>
                        <div className="being">
                            <div className="list">
                                <img src={movieimg} className="leftimg" alt=""/>
                                <div className="list_r">
                                    <div className="col">
                                        <div className="moviename">X战警：黑凤凰<span className="u3d"></span></div>
                                        <div className="score">观众评<span className="grade">7.7</span></div>
                                        <div className="actor ellipsis">主演: 苏菲·特纳,詹姆斯·麦卡沃伊,迈克尔·法斯宾德</div>
                                        <div>今天320家影院放映3802场</div>
                                    </div>
                                    <div className="btn">购票</div>
                                </div>
                            </div>
                            <div className="list">
                                <img src={movieimg} className="leftimg" alt=""/>
                                <div className="list_r">
                                    <div className="col">
                                        <div className="moviename">X战警：黑凤凰<span className="u3d"></span></div>
                                        <div className="score">观众评<span className="grade">7.7</span></div>
                                        <div className="actor ellipsis">主演: 苏菲·特纳,詹姆斯·麦卡沃伊,迈克尔·法斯宾德</div>
                                        <div>今天320家影院放映3802场</div>
                                    </div>
                                    <div className="btn">购票</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            Content of second tab
                        </div>
                    </Tabs>
                </div>
            </div>
        );
    }
    lineHandle = (tab, index) => {
        if (index) {
            let obj = Object.assign({}, this.state.linestyle, {left: '60%',});
            this.setState({
                linestyle: obj
            });
        } else {
            let obj = Object.assign({}, this.state.linestyle, {left: '0'})
            this.setState({
                linestyle: obj
            });
        }
    }
}

export default Home;