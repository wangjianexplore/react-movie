import React from 'react';
import './loading.scss';
import PropTypes from 'prop-types'
class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            this.props.loadingflag && <div className="loader-wrap">
                <span className="loader-img"></span>
                <span>正在加载...</span>
            </div>
        )
    }
}
Loading.defaultProps = {
    loadingflag: false
}
Loading.propTypes = {
    loadingflag: PropTypes.bool,
}
export default Loading;