import React, { Component } from "react"
import Api from "../../api"

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
        return (
            <div>
                首页
            </div>
        )
    }
}

export default Home