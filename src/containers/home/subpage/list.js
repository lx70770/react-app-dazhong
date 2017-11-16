import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './Style.less';
import {getListData} from "../../../fetch/home/home";
import HomeList from '../../../components/HomeList/index';
import LoadMore from '../../../components/LoadMore';

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
    }

    componentDidMount() {
        //获取首页数据
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandel(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true,
            hasMore: true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandel(result);

        //增加page的数量

        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }

    resultHandel(result) {
        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json.data;
            const hasMore = json.hasMore;
            //存储
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            })
        })
    }

    render() {
        return (
            <div>
                <h1 className="home-list-title">猜你喜欢</h1>
                {
                    this.state.data.length
                        ? <HomeList data={this.state.data}/>
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : <div>到底啦....</div>
                }
            </div>
        )
    }
}