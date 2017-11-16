import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './Style.less';

export default class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    loadMoreHandle() {
        //执行加载更多函数
        this.props.loadMoreFn();
    }

    componentDidMount() {
        let timeoutId;
        const wrapper = this.refs.wrapper;
        const loadMoreFn = this.props.loadMoreFn;
        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                loadMoreFn();
            }
        }

        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return false;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50);
        }.bind(this), false);
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}