import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';//react性能优化
import {connect} from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category'
import Ad from './subpage/ad';
import List from './subpage/list';

import QueueAnim from 'rc-queue-anim';

class Home extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <QueueAnim delay={600} >
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category key="b" />
                <Ad key="c" />
                <List key="d"  cityName={this.props.userinfo.cityName}/>
            </QueueAnim>
        )
    }
}

function mapStateToProps(state) {//获取redux里面的数据
    return {
        userinfo: state.userinfo
    }
}
//将数据存储到redux中,这里不需要
function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)