import React from 'react';
import {Link} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './Style.less';

export default class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>
                        <Link to="/City">
                            {this.props.cityName}
                        </Link>
                    </span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        &nbsp;&nbsp;&nbsp;
                        <i className="icon-search"></i>
                        &nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }
}