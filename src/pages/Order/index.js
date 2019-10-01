import React, { Component } from "react"
import { connect } from "react-redux"


import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                text: "全部订单",
                src: "./images/01D.jpg",
            }, {
                text: "待付款",
                src: "./images/03D.png",
            }, {
                text: "未出行",
                src: "./images/01D.jpg",
            }, {
                text: "待评价",
                src: "./images/04D.jpg",
            }, {
                text: "退款",
                src: "./images/01D.jpg",
            }]
        }
    }




    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })

        return (
            <div style={{
                width: "100%",
                background: "#fff",
                height: "100%"
            }}>
                <Tabs defaultActiveKey="1" tabBarGutter={0}>
                    {
                        this.state.data.map(item => {
                            return <TabPane tab={item.text} key={item.text} >
                                <img src={item.src}
                                    style={{
                                        display: " block",
                                        width: "48%",
                                        margin: " 26px auto"
                                    }}
                                />
                                <p
                                    style={{
                                        textAlign: "center"
                                    }}>暂无订单信息</p>
                            </TabPane>

                        })
                    }
                </Tabs>
            </div>
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