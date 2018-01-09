import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchList from './subpage/list';
import SearchHeader from "../../components/SearchHeader/index";

export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        const params = this.props.match.params;
        // console.log(this.props);
        console.log(params.category);
        console.log(params.keyword);
    }
 
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.match.params.keyword}  history={this.props.history}/>
                <SearchList keyword={this.props.match.params.keyword} category={this.props.match.params.category}/>
            </div>
        )
    }
}