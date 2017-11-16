import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './Style.less';

export default class CurrentCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="current-city">
                <div className="current-city-wrap">
                    <span>您正在看:</span>
                    <span>{this.props.cityName}</span>
                </div>
            </div>
        )
    }
}