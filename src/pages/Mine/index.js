import React, { Component } from 'react'
import { Icon } from 'antd';
import { connect } from "react-redux"

import './Mine.css'





class Login extends Component {
    state = {

        naem: [
            {
                key: '1',
                // path: '/home',
                text: '购物车',
                icon: 'shopping-cart',
                // name: 'home'

            }, {
                key: '2',
                // path: '/home',
                text: '常用旅客',
                icon: 'idcard',
                // name: 'home'

            }, {
                key: '3',
                // path: '/home',
                text: '消息',
                icon: 'bell',
                // name: 'home'

            }, {
                key: '4',
                // path: '/home',
                text: '在线客服',
                icon: 'smile',
                // name: 'home'

            }, {
                key: '5',
                // path: '/home',
                text: '意见反馈',
                icon: 'edit',
                // name: 'home'

            }, {
                key: '6',
                // path: '/home',
                text: '福利中心',
                icon: 'gift',
                // name: 'home'

            }, {
                key: '7',
                // path: '/home',
                text: '设置',
                icon: 'setting',
                // name: 'home'

            }
        ]
    };




    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        return (
            <div className='boxs'>
                <div className='portrait'>
                    <img src="https://avatars2.githubusercontent.com/u/52444450?s=460&v=4" alt="" className='imgs' />
                    <div className='name'>登录/注册</div>
                </div>
                <div className='list'>
                    <div className='list_p'>
                        <p className='number'>0</p>
                        <p>积分</p>
                    </div>
                    <div className='list_p'>
                        <p className='number'>0</p>
                        <p>优惠券</p>
                    </div>
                    <div className='list_p'>
                        <p className='number'>0</p>
                        <p>收藏</p>
                    </div>
                    <div className='list_p'>
                        <p className='number'>0</p>
                        <p>浏览历史</p>
                    </div>
                </div>
                <div className='bg'></div>
                <div className='foo'>

                    {
                        this.state.naem.map(item => {
                            return <div className='foo_p' key={item.key}>
                                <p className='icon'><Icon type={item.icon} style={{ fontSize: 25 }} /></p>
                                <p>{item.text}</p>
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

Login = connect(mapStateToProps)(Login)


export default Login;