import React, { Component } from "react"
import Api from "../../api"
import { Row, Col, Carousel, Icon } from 'antd';
import './home.scss';
import 'antd/dist/antd.css';
import { connect } from "react-redux"
import { relative } from "path";

class Home extends Component {
    state = {
        banner: [],
        hot_destination: [],
        goodlist: []
    }

    async componentDidMount() {
        /* 发送网络请求获取数据 */
        let data1 = await Api.get("/home", {});
        this.setState({
            banner: data1.data[0].banner,
            hot_destination: data1.data[0].hot_destination
        });
        // console.log(data1);
        // console.log(this.state.hot_destination)
        // console.log(this.state.banner);
        let data2 = await Api.get("/goods", { page: 0 })
        // console.log(data2)
        this.setState({
            goodlist: data2.data.slice(0, 2)
        });
        // console.log(this.state.goodlist);
    };
    gotos(id) {
        this.props.history.push(`/goods/${id}`)
    }

    goto = (path) => {
        this.props.history.push(path)
    }



    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        let { banner, hot_destination, goodlist } = this.state
        return (
            <div style={{ width: '100%', background: '#fff', position: 'relative' }}>
                {/* 顶部轮播图 */}
                <div className="header-search">
                    <div className="icon-list search-input" onClick={this.goto.bind(this, '/searchpage')}>
                        <Icon type="search" className="icon-search" />
                        <span>城市、景点、产品、关键字</span>
                    </div>
                    <Icon type="customer-service" className="icon-service" />
                </div>
                <Carousel autoplay style={{ height: '75vw' }}>

                    {
                        banner.map(item => {
                            return <a href="" style={{ height: '75vw' }} key={item.id}>
                                <img src={item.picture} alt="" style={{ width: '100%', height: '100%' }} />
                            </a>
                        })
                    }
                </Carousel>

                {/* 分类 */}
                <div className="gutter-example nav-box">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img" onClick={this.goto.bind(this, '/list')} style={{ backgroundPosition: "-144px -72px" }} ></div >
                            <h4>途风精品</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img" onClick={this.goto.bind(this, '/list')} style={{ backgroundPosition: "0 -72px" }}></div>
                            <h4>多日游</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img" onClick={this.goto.bind(this, '/list')} style={{ backgroundPosition: "-72px 0" }}></div>
                            <h4>一日游</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img"
                                onClick={this.goto.bind(this, '/list')}
                                style={{ backgroundPosition: "background-position: -144px 0" }}></div>
                            <h4>定制旅行</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img" onClick={this.goto.bind(this, '/list')} style={{ backgroundPosition: "-216px 0" }}></div>
                            <h4>邮轮游</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img" onClick={this.goto.bind(this, '/list')} style={{ backgroundPosition: "-72px -72px" }}></div>
                            <h4>票务</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img" onClick={this.goto.bind(this, '/list')} ></div>
                            <h4>签证</h4>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box class-img" onClick={this.goto.bind(this, '/list')} style={{ backgroundPosition: "-216px -72px" }}></div>
                            <h4>接送</h4>
                        </Col>
                    </Row>
                </div>

                {/* 签证 */}
                <div className="home-activity">
                    <img src="./images/750×180.jpg" alt="" />
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
                                    return <div className="dest-hot-item" onClick={this.goto.bind(this, '/list')} key={item.title}>
                                        <img src={item.image} alt="" />
                                        <h4>{item.title}</h4>
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </div>

                {/* 优惠专区 */}
                <div className="discount-area">
                    <img src="./images/banner-优惠专区.jpg" alt="" />
                </div>

                {/* 新品 */}
                <div className="gutter-example new" >
                    <div className="mode-title">
                        <h3>新品上线</h3>
                        <span>查看更多></span>
                    </div>
                    <Row gutter={16}>
                        {goodlist.map(item => {
                            return <Col className="gutter-row" span={12} key={item.id} onClick={this.gotos.bind(this, item.id)}>
                                <div className="gutter-box" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <h4>{item.name}</h4>
                                    <div className="price-box">
                                        <span className="price">￥{item.origin_price}</span>
                                        <span>起</span>
                                    </div>
                                </div>
                            </Col>
                        })}
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