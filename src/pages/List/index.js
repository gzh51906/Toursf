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
        goods: []
    }
    async componentDidMount() {
        // console.log(this.props)
        let { data } = await Api.get("/goods", { page: 0 })
        // console.log(data)
        this.setState({
            goods: data
        })


    }

    _onScrollEvent(d) {
        console.log(d._container.scrollTop)
        // if (this._container.scrollTop + this._container.clientHeight === this._container.scrollHeight) {
        //     ///todo: do something
        // }
    }

    goto(id) {
        this.props.history.push(`/goods/${id}`)
        // let { dispatch } = this.props
        // dispatch({ type: "goods_id", id })
    }

    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        let { goods } = this.state
        return (
            <div id="list">

                <div className="top">
                    <img src="../../images/back_top.png" />
                </div>
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
                <div className="content" ref={c => this._container = c} eonScrollCaptur={() => this._onScrollEvent(this)}>
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
        showMenu: state.common.showMenu,
        // goodsid: state.common.goodsid
    }
}

List = connect(mapStateToProps)(List)

export default List