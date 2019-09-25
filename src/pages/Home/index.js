import React, { Component } from "react"
import Api from "../../api"
import { Row, Col, Carousel, Icon } from 'antd';
import './home.scss';
import { connect } from "react-redux"

class Home extends Component {
    state = {
        banner: [],
        hot_destination: [],

    }
    async componentDidMount() {
        /* 发送网络请求获取数据 */
        let { data } = await Api.get("/home", {});
        this.setState({
            banner: data[0].banner,
            hot_destination: data[0].hot_destination
        });
        // console.log(this.state.banner);
        // console.log(this.state.hot_destination)
        // console.log(this.state);
    }
    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        let { banner, hot_destination } = this.state
        console.log(hot_destination);
        return (
            <div style={{ width: '100%', height: '100%', background: '#fff', }}>
                {/* 顶部轮播图 */}
                <div>
                    <div className="icon-list search">
                        <Icon type="search" style={{ fontSize: 24 }}></Icon>
                        <span></span>
                        <Icon></Icon>
                    </div>
                </div>
                
                <Carousel style={{ height: '75vw' }}>
                    {
                        banner.map(item => {
                            return <a href="" style={{ height: '75vw' }}>
                                <img src={item.picture} alt="" key={item.id} style={{ width: '100%', height: '100%' }} />
                            </a>
                        })
                    }
                </Carousel>

                {/* 分类 */}
                <div className="gutter-example nav-box">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>途风精品</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>多日游</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>一日游</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>定制旅行</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>邮轮游</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>票务</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>签证</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"></div>
                            <h4>接送</h4>
                        </Col>
                    </Row>
                </div>

                {/* 签证 */}
                <div className="home-activity">
                    <img src="/images/750×180.jpg" alt="" />
                </div>

                {/* 热门目的地 */}
                <div className="dest-hot">
                    <div className="mode-title">
                        <h3>热门目的地</h3>
                    </div>
                    <div className="dest-scroll">
                        <div className="dest-hot-items">
                            {
                                hot_destination.map(item => {
                                    return<div className="dest-hot-item">
                                        <img src={item.image} alt="" />
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </div>

                {/* 优惠专区 */}
                <div className="discount-area">
                    <img src="/images/banner-优惠专区.jpg" alt="" />
                </div>

                {/* 新品 */}
                <div className="gutter-example new">
                    <div className="mode-title">
                        <h3>新品上线</h3>
                        <span>查看更多></span>
                    </div>
                    <Row gutter={32}>
                        <Col className="gutter-row" span={12}>
                            <div className="gutter-box">
                                <img src="" alt="" />
                                <h4></h4>
                                <p></p>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div className="gutter-box">
                                <img src="" alt="" />
                                <h4></h4>
                                <p></p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
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