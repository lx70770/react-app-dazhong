import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux'
import LocalStorage from '../../util/localStore';
import {CITYNAME} from "../../config/localStorageKey";

import PublicHeader from '../../components/PubilcHeader';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CiyList';
import * as userInfoActionFormOtherFiles from '../../actions/userinfo';

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    changeCity(newCity) {
        if (newCity == null) {
            return false;
        }
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);
        //修改localstorage
        LocalStorage.setItem(CITYNAME, newCity);
        //跳转到首页
        window.history.back();
    }

    render() {
        return (
                <div>
                    <PublicHeader title="选择城市"/>
                    <CurrentCity cityName={this.props.userinfo.cityName}/>
                    <CityList changeFn={this.changeCity.bind(this)}/>
                </div>
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
    return {
        userInfoActions: bindActionCreators(userInfoActionFormOtherFiles, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)