import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './Style.less';

export default class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value||''
        })
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handlekeyUp(e) {
        if(e.keyCode !== 13){
            return false;
        }
        this.props.enterHandle(this.state.value);
    }

    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入你搜索的内容"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onKeyUp={this.handlekeyUp.bind(this)}
            />
        )
    }
}