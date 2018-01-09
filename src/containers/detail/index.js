import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <h1>detail {id}</h1>
        )
    }
}