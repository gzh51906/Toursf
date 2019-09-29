import React, { Component } from 'react'
import { connect } from "react-redux"
import { Icon, Checkbox, InputNumber } from 'antd';
import "./cart.scss"

class Cart extends Component {
    state = {
        goodslist: {},
        // oneChecked: true,
        allChecked: true,
        totalPrice: 0,
        change: true
    }

    componentDidMount() {
        this.getTotaprice()
    }

    componentDidUpdate() {
        console.log("更新:", this.props.goodslist)

    }

    /* 计算总价 */
    getTotaprice() {
        let goods = this.props.goodslist
        // console.log(goods)
        let prev = 0;
        for (var i = 0; i < goods.length; i++) {
            if (goods[i].checked) {
                prev = goods[i].default_price * goods[i].qty * 7 + prev
            }
        }
        this.setState({
            totalPrice: prev
        })
    }

    /* 返回上一级 */
    gotoback() {
        this.props.history.goBack()
    }

    /* 单个复选框选中状态 */
    oneSelect(id) {
        let { dispatch } = this.props
        dispatch({ type: "change_checked", id })
        this.isChecked()
        this.getTotaprice()
    }

    /* 全选复选框选中状态 */
    allSelect() {
        this.setState({
            allChecked: !this.state.allChecked
        })
        let { dispatch } = this.props
        let { allChecked } = this.state
        allChecked = !allChecked
        dispatch({ type: "change_allchecked", allChecked })
        this.getTotaprice()
    }

    /* 判断全选 */
    isChecked() {
        let flag = true
        this.props.goodslist.map(item => {
            if (item.checked == false) {
                flag = false;
            }
        })
        this.setState({
            allChecked: flag ? true : false
        })
    }

    /* 改变数量 */
    changeQty(id, qty) {
        // console.log(id, qty)
        let { dispatch } = this.props
        dispatch({ type: "change_qty", id, qty })
        this.getTotaprice()
    }

    /* 编辑按钮 */
    onChange() {
        this.setState({
            change: !this.state.change
        })
    }

    /* 删除商品 */
    removeItem(id) {
        let { dispatch } = this.props
        dispatch({ type: "remove_cart", id })

        console.log("删除", this.props.goodslist)
        setTimeout(() => {
            this.getTotaprice()
        }, 10);
    }

    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })

        /* 拿到store的商品数据 */
        let { goodslist } = this.props

        /* 拿到复选框状态 */
        let { allChecked, change } = this.state

        return (
            <div id='cart'>
                <div className="header">
                    <Icon type="left" className="goback" onClick={this.gotoback.bind(this)} />
                    <div className="top-title">
                        购物车
                    </div>
                    <span className="change" onClick={this.onChange.bind(this)}>{change ? "编辑" : "完成"}</span>
                </div>
                <div className="main">
                    <ul className="goodslist">
                        {
                            goodslist.map((item, index) => {
                                return <li className="goods" key={item.id}>
                                    <div className="left">
                                        {
                                            change ?
                                                <Checkbox onChange={this.oneSelect.bind(this, item.id)} checked={item.checked} />
                                                :
                                                <Icon type="minus-circle" theme="twoTone" twoToneColor="#f00" onClick={this.removeItem.bind(this, item.id)} />
                                        }
                                    </div>
                                    <div className="right">
                                        <div className="info">
                                            <div className="item-img">
                                                <img src={item.image} />
                                            </div>
                                            <div className="info_ri">
                                                <div className="item-name">{item.name}</div>
                                                <InputNumber
                                                    min={1}
                                                    // value={item.qty}
                                                    defaultValue={item.qty}
                                                    onChange={this.changeQty.bind(this, item.id)}
                                                />
                                            </div>
                                        </div>
                                        <div className="goodsprice">￥{(item.default_price * 7).toFixed(2)}</div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="footer">
                    <div className="chceck">
                        {
                            change ? <Checkbox onChange={this.allSelect.bind(this, allChecked)} checked={allChecked}>全选</Checkbox> : <></>
                        }
                    </div>
                    <div className="totaprice">
                        <span className="tota">合计：</span>
                        <span className="price">￥{
                            this.state.totalPrice.toFixed(2)
                            // goodslist.map(item => {
                            //     item.default_price * item.qty * 7
                            // })
                        }</span>
                    </div>
                    <button className="buy">
                        <p>立即订购</p>
                    </button>
                </div>
            </div>
        )


    }


}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu,
        goodslist: state.cart.goodslist,
        // totalPrice: state.cart.goodslist.reduce((prev, item) => prev + item.default_price * 7 * item.qty, 0)
        // totalPrice: state.cart.totalPrice
    }
}

Cart = connect(mapStateToProps)(Cart)

export default Cart;