import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configStore';
import { BrowserRouter } from 'react-router-dom';
import {RouterMap} from './router/routerMap';

//加载less文件必须修改webpack配置，使用npm run eject暴露webpack配置文件
import './static/css/common.less';
import './static/css/font.css';
import registerServiceWorker from './registerServiceWorker';

//创建 Redux的 store 对象
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RouterMap/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
