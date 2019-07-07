import React from 'react';
import Header from "../header";
import api  from '../../utils/api';
import './cityList.scss';
import { connect } from 'react-redux';
import store from '../../store';

class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        !this.props.letter.length&&this.getCitys();
    }
    getCitys = () => {
        api.get('/dianying/cities.json', {}, function(res) {
            let data = res.cts;
            let sortData = {};
            let letterArr = [];
            data.forEach((item) => {
                let fn = item.py.substring(0, 1).toUpperCase();
                if (!sortData[fn]) {
                    sortData[fn] = [];
                    letterArr.push(fn);
                }
                sortData[fn].push(item);
            });
            letterArr = letterArr.sort();
            let action = {
                type: 'cities_data',
                cities: sortData,
                letter: letterArr
            };
            store.dispatch(action);
        });
    }
    handlePosition = (id) => {
        let offettop = document.getElementById(id).offsetTop;
        !!document.documentElement ? document.documentElement.scrollTop = offettop + 1 : document.body.scrollTop = offettop + 1;
    }
    render() {
        const { cities, letter} = this.props;
        let itemLi = [];
        let allLi = [];
        letter.forEach((item) => {
            allLi.push(<li className="letter" id={item} key={item}>{item}</li>);
            itemLi = cities[item].map(ite => {
                return (
                    <li key={ite.id}>{ite.nm}</li>
                )
            });
            allLi = [...allLi, ...itemLi];
        });
        return (
            <div className="cityList">
                <Header position="relative" title="选择城市" />
                <div className="main">
                    <ul className="main_ul">
                        {allLi}
                    </ul>
                </div>
                <div className="nav">
                    {
                        letter.map(item => {
                            return (
                                <div className="nav-letter" key={item} onClick={this.handlePosition.bind(this, item)} data-id={item}>{item}</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
const mapState = (state) => ({
    cities: state.cities,
    letter: state.letter
});

const mapDispatch = (dispatch) => ({
})
export default connect(mapState, mapDispatch)(CityList);