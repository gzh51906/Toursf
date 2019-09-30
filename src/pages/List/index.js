import React, { Component } from "react"
import Api from "../../api"
import { connect } from "react-redux"
import "./list.scss"
import { Icon } from "antd"

class List extends Component {
    constructor(props) {
        super(props);
        this._onScrollEvent = this._onScrollEvent.bind(this);
    }

    state = {
        goods: [],
        page: 0,
        num: 1,
        top: "none",
        times: []
    }
    async componentDidMount() {
        let page = await Api.get("/goods/page", {})
        page = page.data
        this.setState({
            page: page
        })
        let { data } = await Api.get("/goods", { page: 0 })
        this.setState({
            goods: data
        })
        // console.log(data)
    }

    /* 监听元素中的滚动 */
    _onScrollEvent(d) {
        // console.log(d)
        /* 监听页面滚动显示top */
        if (d._container.scrollTop > 600) {
            this.setState({
                top: "block"
            })
        } else (
            this.setState({
                top: "none"
            })
        )

        /* 监听页面滚动发送网络请求 */
        if (Math.round(d._container.scrollTop + d._container.clientHeight) >= d._container.scrollHeight) {
            this.getDatalist()
        }
    }

    /* 懒加载=>发送网络请求 */
    async getDatalist() {
        let times = this.state.times;

        let { num } = this.state;
        // console.log(num, this.state.page)
        if (times.indexOf(num) == -1 && num < this.state.page - 1) {
            times.push(num)
            // console.log(num)
            let { data } = await Api.get("/goods", { page: num })
            let goods = this.state.goods
            data.forEach(item => {
                goods.push(item)
            });
            this.setState({
                goods: goods,
                num: num + 1
            })
        }
        // console.log(this.state.goods)
    }

    /* 跳转到商品详情页 */
    goto(id) {
        this.props.history.push(`/goods/${id}`)
    }

    /* 返回顶部时间 */
    clickTop() {
        this._container.scrollTop = 0
    }
    /* 返回上一级 */
    gotoback() {
        this.props.history.goBack()
    }


    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        let { goods, top } = this.state
        return (
            <div id="list">
                <header className="header">
                    <div className="search">
                        <Icon type="left" className="goback" onClick={this.gotoback.bind(this)} />
                        <div className="search-btn">
                            <Icon type="zoom-in" />
                            <span>途风精品</span>
                        </div>
                        <Icon type="menu-unfold" className="type" />
                    </div>
                    <div className="nav">
                        <span className="nav-list">出发地</span>
                        <span className="nav-list">产品类型</span>
                        <span className="nav-list">排序</span>
                        <span className="nav-list">筛选</span>
                    </div>
                </header>
                <div className="content" ref={c => this._container = c} onScrollCapture={() => this._onScrollEvent(this)}>
                    <div className="top" style={{ display: top }} onClick={this.clickTop.bind(this)}>
                        <img src="../../images/back_top.png" />
                    </div>
                    {
                        goods.map(item => {
                            return <div className="goods" key={item.id} onClick={this.goto.bind(this, item.id)}>
                                <div className="item-img">
                                    <img src={item.image} />
                                    <div className="img-tip-mask"></div>
                                    <div className="start-city">{item.departure_desc}出发</div>
                                    <div className="count">{item.order_count}人出游</div>
                                </div>
                                <div className="item-info">
                                    <div className="product-name">{item.name}</div>
                                    <div className="price-wrap">
                                        <div className="list-tag">
                                            {
                                                item.tags.map(tag => {
                                                    return <i className="tag" key={tag.product_icon_id}>{tag.name}</i>
                                                })
                                            }
                                        </div>
                                        <div className="price">
                                            <span>￥{item.default_price * 7}</span>起
                                </div>
                                    </div>
                                </div>
                                <div className="special-price">￥{item.origin_price * 7}</div>
                            </div>
                        })
                    }
                </div>
            </div >
        )
    }
}


let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

List = connect(mapStateToProps)(List)

export default List