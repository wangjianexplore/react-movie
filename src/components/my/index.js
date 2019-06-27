import React from 'react';
import Header from "../header";
import Footer from "../footer";
import axios from 'axios';
import './my.scss';

class My extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: {},
            letter: []
        };
    }
    componentDidMount() {
        this.getCitys();
    }
    getCitys = () => {
        let rm = this;
        axios.get('https://bird.ioliu.cn/v2/?url=http://m.maoyan.com/dianying/cities.json').then(function (response) {
            let data = response.data.cts;
            let sortData = {};
            let letterArr = [];
            data.forEach((item) => {
                let fn = item.py.substring(0, 1).toUpperCase();
                if (!sortData[fn]) {
                    sortData[fn] = [];
                    letterArr.push(fn);
                }
                sortData[fn].push(item);
            })
            rm.setState({
                cities: sortData,
                letter: letterArr.sort()
            });
        }).catch(function (error) {
            console.log(error);
        });
    }
    handlePosition = (id) => {
        let offettop = document.getElementById(id).offsetTop;
        document.documentElement.scrollTop = offettop + 1;
    }
    render() {
        let itemLi = [];
        let allLi = [];
        this.state.letter.forEach((item) => {
            allLi.push(<li className="letter" id={item} key={item}>{item}</li>);
            itemLi = this.state.cities[item].map(ite => {
                return (
                    <li key={ite.id}>{ite.nm}</li>
                )
            });
            allLi = [...allLi, ...itemLi];
        });
        return (
            <div className="my">
                <Header position="relative" title="我的" />
                <div className="main">
                    <ul className="main_ul">
                        {allLi}
                    </ul>
                </div>
                <div className="nav">
                    {
                        this.state.letter.map(item => {
                            return (
                                <div className="nav-letter" key={item} onClick={this.handlePosition.bind(this,item)} data-id={item}>{item}</div>
                            );
                        })
                    }
                </div>
                <Footer num="2" />
            </div>
        );
    }
}

export default My;