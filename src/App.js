import React, { Component } from "react"

/* 路由 */
import { Route, Redirect, Switch, withRouter } from "react-router-dom"

/* UI框架 */
import { Menu } from 'antd';

import { connect } from "react-redux"

/* 全局样式 */
import "./style/appstyle.scss"
import "./style/base.css"

/* 组件 */
import Home from "./pages/Home"
// import Dest from "./pages/Dest"
import Discover from "./pages/Discover"
import Order from "./pages/Order"
import Mine from "./pages/Mine"
import Login from './pages/Login'
import Reg from './pages/Reg'
import Cart from './pages/Cart'

import Search from "./pages/Search"
import List from "./pages/List"

class App extends Component {
    state = {
        current: "/home",
        menu: [
            { path: "/home", text: "首页", name: "home", bgpositon: { backgroundPositionX: -40, backgroundPositionY: -144 }, bgactive: { backgroundPositionX: 0, backgroundPositionY: -144 } },
            { path: "/dest", text: "目的地", name: "dest", bgpositon: { backgroundPositionX: -120, backgroundPositionY: -144 }, bgactive: { backgroundPositionX: -80, backgroundPositionY: -144 } },
            { path: "/discover", text: "发现", name: "discover", bgpositon: { backgroundPositionX: -200, backgroundPositionY: -144 }, bgactive: { backgroundPositionX: -160, backgroundPositionY: -144 } },
            { path: "/order", text: "订单", name: "order", bgpositon: { backgroundPositionX: -280, backgroundPositionY: -144 }, bgactive: { backgroundPositionX: -240, backgroundPositionY: -144 } },
            { path: "/mine", text: "我的", name: "mine", bgpositon: { backgroundPositionX: -360, backgroundPositionY: -144 }, bgactive: { backgroundPositionX: -320, backgroundPositionY: -144 } },
        ]
    }
    goto = (key) => {
        this.props.history.push(key)
    }
    changeMenu = ({ key }) => {
        this.setState({
            current: `/${key}`
        })
        this.goto(key)
    }
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        return (
            <>
                <main className="main">
                    <Switch>
                        <Route path="/home" component={Home} />
                        {/* <Route path="/dest" component={Dest} /> */}
                        <Route path="/discover" component={Discover} />
                        <Route path="/order" component={Order} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/cart" component={Cart} />


                        {/* 登录/注册 */}
                        <Route path="/login" component={Login} />
                        <Route path="/reg" component={Reg} />
                        {/* 购物车 */}


                        <Route path="/search" component={Search} />
                        <Route path="/list" component={List} />
                        <Route path="/notfound" render={() => <div>404</div>} />
                        {/* 精确匹配 */}
                        <Redirect path="/" to="/home" exact />
                        <Redirect path="*" to="/notfound" />
                    </Switch>
                </main>
                {
                    this.props.showMenu
                        ?
                        <div className="footer">
                            <Menu>
                                {this.state.menu.map(item => {
                                    return <Menu.Item key={item.name} onClick={this.changeMenu}>
                                        <i style={item.path === this.state.current ? item.bgactive : item.bgpositon}></i>
                                    </Menu.Item>
                                })}
                            </Menu>
                        </div>
                        :
                        <></>
                }
            </>
        )
    }
}
App = withRouter(App)

let mapStateToPrpps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

App = connect(mapStateToPrpps)(App)

export default App