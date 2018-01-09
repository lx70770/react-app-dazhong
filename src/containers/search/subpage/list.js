import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';


import {getSearchData} from "../../../fetch/search/search";
import HomeList from "../../../components/HomeList/index";
import LoadMore from "../../../components/LoadMore/index";

const initState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initState;
    }

    componentDidMount() {
        //加载第一页数据
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        let cityName = this.props.userinfo.cityName;
        let keyword = this.props.keyword;
        let category = this.props.category;
        let result = getSearchData(0, cityName, category, keyword);
        this.handleResult(result);
    }

    handleResult(result) {
        let page = this.state.page;
        //处理请求返回的数据
        result.then(res => {
            return res.json();
        }).then(json => {
            let hasMore = json.hasMore;
            let data = json.data;
            //更改state中的信息
            this.setState({
                //将新的data与旧的data链接   使用concat
                data: this.state.data.concat(data),
                hasMore: hasMore,
                page: page + 1

            })
        }).catch(ex => {
                console.error('搜索页数据报错:' + ex.message)
        });
    }

    loadMoreData() {
        this.setState({
            hasMore: true,
            isLoadingMore: true
        });
        let page = this.state.page;
        let cityName = this.props.userinfo.cityName;
        let category = this.props.category;
        let keyword = this.props.keyword;
        let result = getSearchData(page, cityName, category, keyword);
        this.handleResult(result);
        this.setState({
            isLoadingMore: false
        })
    }

    componentDidUpdate(preProps, preState) {
        let keyword = this.props.keyword;
        let category = this.props.category;

        if (keyword === preProps.keyword && category === preProps.category) {
            return false;
        }

        this.setState(initState);

        this.loadFirstPageData();
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeList data={this.state.data}/>
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : <div>加载中...</div>
                }
            </div>
        )
    }
}

/*绑定redux*/
function mapStateToProps(state) {
    return {userinfo: state.userinfo};
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default SearchList = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)