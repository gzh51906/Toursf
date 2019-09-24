import React, { Component } from "react"
import Api from "../../api"
import { connect } from "react-redux"

class Home extends Component {
    state = {
        banner: [],
        hot_destination: []
    }
    async componentDidMount() {
        /* 发送网络请求获取数据 */
        let { data } = await Api.get("/home", {});
        this.setState({
            banner: data[0].banner,
            hot_destination: data[0].banner
        })

    }
    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        return (
            <div>
                首页
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Home = connect(mapStateToProps)(Home)

export default Home