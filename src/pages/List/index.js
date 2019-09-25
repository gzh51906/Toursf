import React, { Component } from "react"
import Api from "../../api"
import { connect } from "react-redux"
import "./list.scss"
import { Icon } from "antd"

class List extends Component {
    state = {
        goods: []
    }
    async componentDidMount() {
        // console.log(this.props);

        let { data } = await Api.get("/goods", { page: 0 })
        this.setState({
            goods: data
        })

    }

    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        let { goods } = this.state
        return (
            <div id="list">
                <header className="header">
                    <div className="search">
                        <Icon type="left" className="goback" />
                        <div className="search-btn"><Icon type="zoom-in" />
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
                <div className="content">
                    {
                        goods.map(item => {
                            return <div className="goods" key={item.id}>
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
            </div>
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