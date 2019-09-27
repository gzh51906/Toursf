import React, { Component } from "react"
import { connect } from "react-redux"

import { Icon } from 'antd';

import './destmore.css'

class destmore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [{
                src: "../../images/destmore/Rp(10).jpg",
                text: '华尔街'
            },
            {
                src: "../../images/destmore/Rp(11).jpg",
                text: '圣殿广场'
            }, {
                src: "../../images/destmore/Rp(12).jpg",
                text: '尼亚加拉战争古堡'
            }, {
                src: "../../images/destmore/Rp(13).jpg",
                text: '朝鲜战争老兵纪念碑'
            }, {
                src: "../../images/destmore/Rp(14).jpg",
                text: '杜莎夫人总统蜡像馆'
            }, {
                src: "../../images/destmore/Rp(15).jpg",
                text: '羚羊峡谷'
            }, {
                src: "../../images/destmore/Rp(16).jpg",
                text: '国际间谍博物馆'
            }, {
                src: "../../images/destmore/Rp(17).jpg",
                text: '圣地亚哥海洋世界'
            }, {
                src: "../../images/destmore/Rp(18).jpg",
                text: '大峡谷国家公园'
            }, {
                src: "../../images/destmore/Rp(19).jpg",
                text: '优胜美地新娘面纱瀑布'
            }, {
                src: "../../images/destmore/Rp(20).jpg",
                text: '马蹄湾'
            }, {
                src: "../../images/destmore/Rp(21).jpg",
                text: '波士顿港'
            }, {
                src: "../../images/destmore/Rp(22).jpg",
                text: '美国国会大厦'
            }, {
                src: "../../images/destmore/Rp(23).jpg",
                text: '船长岩'
            }, {
                src: "../../images/destmore/Rp(24).jpg",
                text: '胡佛大坝'
            }, {
                src: "../../images/destmore/Rp(25).jpg",
                text: '密德湖'
            }, {
                src: "../../images/destmore/Rp(26).jpg",
                text: '自由女神像'
            }, {
                src: "../../images/destmore/Rp(27).jpg",
                text: '拉斯维加斯大道'
            }, {
                src: "../../images/destmore/Rp(28).jpg",
                text: '华尔街铜牛'
            }, {
                src: "../../images/destmore/download.jpg",
                text: '越战纪念碑'
            }]
        }
    }

    gotoback() {
        this.props.history.goBack()
    }

    goto = () => {
        this.props.history.push('/list')
    }
    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        return (
            <div className='destmore'>
                <div className='logo'>
                    <span className='icon'
                    > <Icon type="left" style={{ fontSize: 18 }}
                        onClick={this.gotoback.bind(this)}
                        /></span>
                    <span className='logo_nm'>美国必去景点</span>
                </div>
                <div className='Dest_nav3'>
                    {
                        this.state.menu.map(item => {
                            return (
                                <div key={item.src} onClick={this.goto}>
                                    <img src={item.src} alt="" />
                                    <span>{item.text}</span>
                                </div>
                            )
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

destmore = connect(mapStateToProps)(destmore)

export default destmore