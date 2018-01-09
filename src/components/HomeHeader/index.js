import React from 'react';
import {Link} from 'react-router-dom';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchInput from '../SearchInput';
import './Style.less';

export default class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    enterHandel(value) {
        this.props.history.push('/Search/all/' + encodeURIComponent(value));
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
                        <SearchInput value="" enterHandle={this.enterHandel.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}