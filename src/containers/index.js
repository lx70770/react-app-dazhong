import React from 'react';
import LocalStorage from '../util/localStore';
import {CITYNAME} from "../config/localStorageKey";
import PureRenderMixin from 'react-addons-pure-render-mixin';//react性能优化

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFormOtherFile from '../actions/userinfo';


class App extends React.Component {

    componentDidMount() {
        //从localStorage中获取数据
        LocalStorage.setItem(CITYNAME, '深圳');
        let cityName = LocalStorage.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京';
        }
        console.log(cityName);
        //将城市信息存储到 Redux 中
        this.props.userInfoActions.update({
            cityName: cityName
        });

        this.setState({initDone: true});
    }

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            this.state.initDone
                ? this.props.children
                : <div>正在加载...</div>
        )
    }
}

/*----------------以下是redux绑定--------------*/

function mapStateToProps(state) {//获取redux里面的数据
    return {}
}

function mapDispatchToProps(dispatch) {//将数据存储到redux中
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)