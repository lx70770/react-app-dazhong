import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './Style.less';
import SearchInput from  '../../components/SearchInput';

export default class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handelClick() {
        window.history.back();
    }

    enterHandle(value) {
        this.props.history.push('/Search/all/' + encodeURIComponent(value));
    }

    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.handelClick.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
}