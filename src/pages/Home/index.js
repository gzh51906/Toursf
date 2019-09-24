import React, { Component } from "react"
import Api from "../../api"
<<<<<<< HEAD
import { Row, Col,Carousel,Icon} from 'antd';
// import './home.scss';
=======
import { connect } from "react-redux"
>>>>>>> cxd

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
                {/* 顶部轮播图 */}
                <div>
                    <div className="icon-list search">
                        <Icon  type="search"style={{ fontSize: 24 }}></Icon>
                        <span></span>
                        <Icon></Icon>
                    </div>
                </div>
                <Carousel autoplay>
                    <a href="">
                        <img src="" alt="" />
                    </a>
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
                        <div className="dest-item">
                            <img src="" alt=""/>
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