import React from 'react';
import './noInfo.scss';
import PropTypes from 'prop-types'
class NoInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="noInfo">
                <div className="tip-text">{this.props.noInfoTitle}</div>
            </div>
        )
    }
}
NoInfo.defaultProps = {
    noInfoTitle: ''
}
NoInfo.propTypes = {
    noInfoTitle: PropTypes.string,
}
export default NoInfo;