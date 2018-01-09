import React from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

import App from '../containers';
import Home from '../containers/home'
import City from '../containers/city';
import Detail from '../containers/detail';
import Search from '../containers/search';
import NotFound from '../containers/404';

export const RouterMap = () => (
    //Router下只能有一个节点，Switch的作用是绝对匹配，只渲染匹配成功的组件，提高网页性能

    <div>
            {/*这里可以添加导航栏与Route匹配*/}
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/City" component={City}/>
                    <Route path="/Detail/:id" component={Detail}/>
                    <Route path="/Search/:category/:keyword?" component={Search}/>
                    <Route component={NotFound}/>
                </Switch>
            </App>
    </div>

);