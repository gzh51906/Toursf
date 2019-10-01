import React, { Component } from "react"
import Api from "../../api"
import axios from "axios"
import { connect } from "react-redux"
import "./search.scss"


import { Tabs, Select, Icon } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;
class Search extends Component {
    state = {
        tabPosition: 'left',
        td: [],
    }
    async componentDidMount() {
        let { data } = await Api.get("/search", {})
        // console.log(data)
        this.setState({
            td: data
        })

    }
    gotoback(path) {
        this.props.history.push(path)
    }

    changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
    };
    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        return (
            <div id="search">
                <div className='search_top' >
                    <span className='icon-r' onClick={this.gotoback.bind(this, '/dest')}><Icon type="left" /></span>
                    <div className="icon-list search-input" >
                        <Icon type="search" className="icon-search" />
                        <span onClick={this.gotoback.bind(this, '/searchpage')}>城市、景点、产品、关键字</span>
                    </div>
                </div>
                <div className='search_bottom'>
                    <Tabs tabPosition={this.state.tabPosition}
                        type='card'
                        tabBarGutter={0}>
                        {
                            this.state.td.map((item, idx) => {
                                return (
                                    // 左边导航菜单
                                    <TabPane tab={item.name} key={idx}>
                                        {/* 右边内容 */}
                                        <div className="city">热门城市</div>
                                        {
                                            item.city.map((it, i) => {
                                                return (
                                                    // 右边内容上半部分
                                                    <React.Fragment key={it.name} >
                                                        <div className="search_img">
                                                            <div><img src={it.image_url} /></div>
                                                            <div key={i} className='hot'>{it.name}</div>
                                                        </div>
                                                    </React.Fragment>
                                                );
                                            })
                                        }
                                        {/* 右边内容下半部分 */}
                                        {item.country.length === 0
                                            ?
                                            <div></div>
                                            :
                                            <div
                                                style={{ marginBottom: 8 }}
                                            >热门国家</div>
                                        }
                                        {
                                            item.country.map((itx, ix) => {
                                                return (
                                                    <div key={ix} className='stateHot'>
                                                        {itx.name}</div>
                                                );
                                            })

                                        }
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
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

Search = connect(mapStateToProps)(Search)

export default Search