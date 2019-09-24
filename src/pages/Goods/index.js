import React, { Component } from "react"
import { connect } from "react-redux"
import { Icon } from "antd"
import "./goods.scss"
import Api from "../../api"

class Goods extends Component {

    state = {
        goods: {}
    }

    /* 发送网络请求，请求对应ID的商品数据 */
    async componentDidMount() {
        // console.log(this.props.match.params)
        let goodsid = this.props.match.params.id
        let { data } = await Api.get("/goods", { id: goodsid })
        this.setState({
            goods: data[0]
        })
    }

    gotoback() {
        this.props.history.goBack()
    }

    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        let item = this.state.goods
        return (
            <div id="goods">
                <div className="header">
                    <Icon type="left" className="goback" onClick={this.gotoback.bind(this)} />
                    <div className="nav">
                        <span className="nav-list">简介</span>
                        <span className="nav-list">评价</span>
                        <span className="nav-list">行程</span>
                        <span className="nav-list">须知</span>
                    </div>
                    <Icon type="shopping-cart" className="cart" />
                </div>
                <div className="main">
                    <div className="item-img">
                        <img src={item.image} />
                        <div className="num">编号：{item.id}</div>
                    </div>
                    <div className="item-price">
                        <div className="price">￥{item.default_price * 7}<span>起</span></div>
                        <div className="default-price"><span>特价</span><del>￥{item.origin_price * 7}</del></div>
                    </div>
                    <div className="item-title">{item.name}</div>
                    <div className="item-tags">
                        <i className="tags">国家公园摄影</i>
                    </div>
                    <div className="item-info">
                        <div className="person">{item.order_count}人已出游</div>
                        <div className="depart">
                            <span>出发</span>
                            <span className="addres">{item.departure_desc}</span>
                        </div>
                        <div className="end">
                            <span>结束</span>
                            <span className="addres">{item.departure_desc}</span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="collect">
                        <Icon type="heart" className="icon" />
                        <p>收藏</p>
                    </div>
                    <div className="consult">
                        <Icon type="aliwangwang" className="icon" />
                        <p>咨询</p>
                    </div>
                    <button className="cart">加入购物车</button>
                    <button className="buy">
                        <p>立即订购</p>
                        <span>(2人起订)</span>
                    </button>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu,
        goodsid: state.common.goodsid
    }
}

Goods = connect(mapStateToProps)(Goods)

export default Goods