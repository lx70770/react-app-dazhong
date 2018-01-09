import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';

import './Style.less';

export default class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        let option = {
            // auto: 2000,
            callback: (index) => {
                this.setState({index: index});
            }
        };
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={option}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/Search/all/jingdian"><li className="float-left jingdian">景点</li></Link>
                            <Link to="/Search/all/ktv"><li className="float-left ktv">KTV</li></Link>
                            <Link to="/Search/all/gouwu"><li className="float-left gouwu">购物</li></Link>
                            <Link to="/Search/all/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></Link>
                            <Link to="/Search/all/jianshenyundong"><li className="float-left jianshenyundong">健身运动</li></Link>
                            <Link to="/Search/all/meifa"><li className="float-left meifa">美发</li></Link>
                            <Link to="/Search/all/qinzi"><li className="float-left qinzi">亲子</li></Link>
                            <Link to="/Search/all/xiaochikuaican"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
                            <Link to="/Search/all/zizhucan"><li className="float-left zizhucan">自助餐</li></Link>
                            <Link to="/Search/all/jiuba"><li className="float-left jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/Search/all/meishi"><li className="float-left meishi">美食</li></Link>
                            <Link to="/Search/all/dianying"><li className="float-left dianying">电影</li></Link>
                            <Link to="/Search/all/jiudian"><li className="float-left jiudian">酒店</li></Link>
                            <Link to="/Search/all/xuixianyule"><li className="float-left xuixianyule">休闲娱乐</li></Link>
                            <Link to="/Search/all/waimai"><li className="float-left waimai">外卖</li></Link>
                            <Link to="/Search/all/huoguo"><li className="float-left huoguo">火锅</li></Link>
                            <Link to="/Search/all/liren"><li className="float-left liren">丽人</li></Link>
                            <Link to="/Search/all/dujiachuxing"><li className="float-left dujiachuxing">度假出行</li></Link>
                            <Link to="/Search/all/zuliaoanmo"><li className="float-left zuliaoanmo">足疗按摩</li></Link>
                            <Link to="/Search/all/zhoubianyou"><li className="float-left zhoubianyou">周边游</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/Search/all/ribencai"><li className="float-left ribencai">日本菜</li></Link>
                            <Link to="/Search/all/SPA"><li className="float-left SPA">SPA</li></Link>
                            <Link to="/Search/all/jiehun"><li className="float-left jiehun">结婚</li></Link>
                            <Link to="/Search/all/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></Link>
                            <Link to="/Search/all/xican"><li className="float-left xican">西餐</li></Link>
                            <Link to="/Search/all/huochejipiao"><li className="float-left huochejipiao">火车机票</li></Link>
                            <Link to="/Search/all/shaokao"><li className="float-left shaokao">烧烤</li></Link>
                            <Link to="/Search/all/jiazhuang"><li className="float-left jiazhuang">家装</li></Link>
                            <Link to="/Search/all/chongwu"><li className="float-left chongwu">宠物</li></Link>
                            <Link to="/Search/all/quanbufenlei"><li className="float-left quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}