import React, { Component } from 'react'
import { Icon } from 'antd';
import { connect } from "react-redux"

import './Mine.css'





class Mine extends Component {
    state = {
        naem: [
            {
                key: '1',
                path: '/cart',
                text: '购物车',
                icon: 'shopping-cart',
                name: 'cart'

            }, {
                key: '2',
                path: '/cart',
                text: '常用旅客',
                icon: 'idcard',
                name: 'cart'

            }, {
                key: '3',
                path: '/cart',
                text: '消息',
                icon: 'bell',
                name: 'cart'

            }, {
                key: '4',
                path: '/cart',
                text: '在线客服',
                icon: 'smile',
                name: 'cart'

            }, {
                key: '5',
                path: '/cart',
                text: '意见反馈',
                icon: 'edit',
                name: 'cart'

            }, {
                key: '6',
                path: '/cart',
                text: '福利中心',
                icon: 'gift',
                name: 'cart'

            }, {
                key: '7',
                path: '/setting',
                text: '设置',
                icon: 'setting',
                name: 'setting'

            }
        ]
    };

    componentDidMount() {
        console.log(this.props);
    }


    goto = (path) => {
        // console.log(path)
        this.props.history.push(path)

    }
    change = (path, el) => {
        // console.log(path, el, 111);
        this.goto(path)
    }
    login = () => {
        this.props.history.push('/login')
    }
    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        return (
            <div className='boxs'>
                <div className='portrait'>
                    <img src="https://avatars2.githubusercontent.com/u/52444450?s=460&v=4" alt="" className='imgs' />
                    <div className='name'>
                        {
                            this.props.userInfo.phone
                                ?
                                this.props.userInfo.phone
                                : "登录/注册"
                        }
                    </div>
                    {
                        localStorage.getItem('token') === null ?
                            <div className='name' onClick={this.login}>登录/注册</div> :
                            <div className='name'>尊敬的会员</div>
                    }

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
                            return <div className='foo_p' key={item.key}
                                // 同一组件跳转不同路由
                                onClick={this.change.bind(this, item.path)}
                            >
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
        showMenu: state.common.showMenu,
        userInfo: state.common.userInfo
        login: state.common.login
    }
}

Mine = connect(mapStateToProps)(Mine)


export default Mine;
