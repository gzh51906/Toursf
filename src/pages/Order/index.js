import React, { Component } from "react"
import { connect } from "react-redux"

class Order extends Component {


    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })

        return (
            <div>订单</div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Order = connect(mapStateToProps)(Order)

export default Order