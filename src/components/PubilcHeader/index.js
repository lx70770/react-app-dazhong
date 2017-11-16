import React from 'react';
import './Style.less';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class PublicHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        window.history.back();
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.handleBack}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}