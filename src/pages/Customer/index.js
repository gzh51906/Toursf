import React, { Component } from "react"
import { connect } from "react-redux"

import './customer.css'

class customer extends Component {

    login = () => {
        // console.log(666);

        this.props.history.push('/login')
    }
    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })

        return (
            <div className='customer'>
                <div className='customer_box'>
                    <div className='customer_img'>
                        <img src="https://avatars2.githubusercontent.com/u/52444450?s=460&v=4" alt="" />
                        <p>您还没有登录，请登录后查看订单</p>
                    </div>

                    <div className='but'>
                        <div className='but_login' >
                            <p className='but_p' onClick={this.login}>登录或者注册</p>
                        </div>
                        <div className='but_cu'>
                            <p>产品咨询</p>
                        </div>
                    </div>
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

customer = connect(mapStateToProps)(customer)

export default customer