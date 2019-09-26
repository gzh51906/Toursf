import React, { Component } from "react"
import { connect } from "react-redux"
import { Icon, } from 'antd';
import './Dest.css'

class Dest extends Component {


    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        return (
            <div className="Dest">
                <div className='dest_top'>
                <Icon type="search" style={{
                    position:'absolute',
                    fontSize:24,
                    fontWeight:700,
                    color:"#ffffff",
                    top:15,
                    right:15,
                    zIndex:10
                }}/>
                    <img src="//cdn.tff.bz/f2/59/5f/美国2.jpg?imageView2/1/w/1125/h/1200/q/85/format/jpg" alt="" />
                    <div className='dest_t'>
                        <div style={
                            {
                                position: 'absolute',
                                top: "22%",
                                left: '35%',

                                textAlign: 'center'
                            }
                        }>
                            <h1>美国</h1>
                            <Icon type="check-circle" theme="filled" style={
                                {
                                    position: 'absolute',
                                    top: "40%",
                                    right: '-25%',
                                    fontSize: 18,
                                    color: '#fff'

                                }} />
                            <p className='dest_p'>黄石公园季</p>

                        </div>
                        <div className='dest_bg'></div>
                    </div>

                </div>
                <div className='Dest_main'>
                    <div className='Dest_main1'>
                        <h2>产品分类</h2>
                        <div className='Dest_nav1'>
                            <div className='de'>
                                <div>
                                    <img src="../../images/Dest01.png" alt="" />
                                    <p>精品游</p>
                                </div>
                                <div>
                                    <img src="../../images/Dest02.png" alt="" />
                                    <p>多日游</p>
                                </div>
                                <div>
                                    <img src="../../images/Dest03.png" alt="" />
                                    <p>一日游</p>
                                </div>
                                <div>
                                    <img src="../../images/Dest04.png" alt="" />
                                    <p>票务</p>
                                </div>
                                <div>
                                    <img src="../../images/Dest05.png" alt="" />
                                    <p>邮轮游</p>
                                </div>
                                <div>
                                    <img src="../../images/Dest06.png" alt="" />
                                    <p>制定旅行</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Dest_main2'>
                        <h2>热门推荐</h2>
                        <div className='Dest_nav2'>
                            <div>
                                <img src="//cdn.tff.bz/f2/91/20/黄石国家公园-标识.jpg?imageView2/1/w/324/h/182/q/80/format/jpg" alt="" />
                                <span>黄石公园大美天地</span>
                            </div>
                            <div>
                                <img src="//cdn.tff.bz/f1/05/66/grant-village-lake-house-restaurant-02-800x500.jpg?imageView2/1/w/324/h/182/q/80/format/jpg" alt="" />
                                <span>稀缺黄石小木屋</span>
                            </div>
                            <div>
                                <img src="//cdn.tff.bz/f1/05/66/grant-village-lake-house-restaurant-02-800x500.jpg?imageView2/1/w/324/h/182/q/80/format/jpg" alt="" />
                                <span>网红大棱镜俯视点</span>
                            </div>
                            <div>
                                <img src="//cdn.tff.bz/f1/c3/3f/西拇指.jpg?imageView2/1/w/324/h/182/q/80/format/jpg" alt="" />
                                <span>西雅图+黄石</span>
                            </div>
                        </div>
                    </div>
                    <div className='Dest_main3'>
                        <div style={{ overflow: "hidden" }}>
                            <h2 style={{ float: "left" }}>必去景点</h2>



                            {/*  */}
                            <span style={{ float: "right", display: 'inlineBlock', color: '#0090F2' }}>查看更多></span>
                            
                        </div>
                        <div className='Dest_nav3'>
                            <div>
                                <img src="//toursforfun.tff.bz/images/TourCity201604191461080699_5716527bc3847.jpg?imageView2/1/w/154/h/188/q/80/format/jpg" alt="" />
                                <span>羚羊峡谷</span>
                            </div>
                            <div>
                                <img src="//toursforfun.tff.bz/images/TourCity201406091402338510_5395fcce9069a.jpg?imageView2/1/w/154/h/188/q/80/format/jpg" alt="" />
                                <span>无畏号航舰博物馆</span>
                            </div>
                            <div>
                                <img src="//toursforfun.tff.bz/images/lincoln_memorial_washington_dc.jpg?imageView2/1/w/154/h/188/q/80/format/jpg" alt="" />
                                <span>林肯纪念堂</span>
                            </div>
                            <div style={{ margin: 0 }}>
                                <img src="//toursforfun.tff.bz/images/liberty_bell_philadelphia.jpg?imageView2/1/w/154/h/188/q/80/format/jpg" alt="" />
                                <span>自由钟</span>
                            </div>
                        </div>
                    </div>
                    <div className='Dest_main4'>
                        <img src="//cdn.tff.bz/f2/windtour/e0/fb/banner-%E4%BC%98%E6%83%A0%E4%B8%93%E5%8C%BA.jpg?imageView2/1/w/1332/h/634/q/90/format/jpg" alt="" />
                    </div>
                    <div className='Dest_main5'>
                        <h2>跟团游销量榜</h2>
                        <div className='Dest_nav5' style={{overflow: 'hidden',display: "flex",justifyContent:"space-between"}}>
                            <div className='Dest_nav5it'>
                                <div className='Dest_nav5-img'>
                                    <img src="//cdn.tff.bz/f1/windtour/22/17/图片1.jpg?imageView2/1/w/660/h/440/q/75/format/jpg" alt="" />
                                </div>
                                <div className='Dest_nav5-title'>
                                    <h4> &lt;14人精致小团&gt;【美国历史文化之旅】4天亲身体验《飘》中的南北往事：探秘比特摩尔庄园+可口可乐世界+乔治亚水族馆+CNN总部+海伦德国村+地下亲手淘金探险；全程含酒店早餐</h4>
                                    <p>
                                        <span style={{ color: '#fb5f10', fontSize: 20, fontWeight: 700,marginRight:7 }}>￥1902</span>
                                        <span>起</span>
                                    </p>
                                </div>
                            </div>
                            <div className='Dest_nav5it'>
                                <div className='Dest_nav5-img'>
                                    <img src="//cdn.tff.bz/f1/windtour/22/17/图片1.jpg?imageView2/1/w/660/h/440/q/75/format/jpg" alt="" />
                                </div>
                                <div className='Dest_nav5-title'>
                                    <h4> &lt;14人精致小团&gt;【美国历史文化之旅】4天亲身体验《飘》中的南北往事：探秘比特摩尔庄园+可口可乐世界+乔治亚水族馆+CNN总部+海伦德国村+地下亲手淘金探险；全程含酒店早餐</h4>
                                    <p>
                                        <span style={{ color: '#fb5f10', fontSize: 20, fontWeight: 700 ,marginRight:7}}>￥1902</span>
                                        <span>起</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <span className='but'>显示所有跟团游</span>
                    </div>
                    <div className='Dest_main5'>
                        <h2>当地玩乐销量榜</h2>
                        <div className='Dest_nav5' style={{overflow: 'hidden',display: "flex",justifyContent:"space-between"}}>
                            <div className='Dest_nav5it'>
                                <div className='Dest_nav5-img'>
                                    <img src="//tffimg.tff.bz/72/15/88d/8e6/2cd5e949c7ddcb9eee5ed0.jpg?imageView2/1/w/660/h/440/q/75/format/jpg" alt="" />
                                </div>
                                <div className='Dest_nav5-title'>
                                    <h4> 【电子票】美国自然历史博物馆(American Museum of Natural History)</h4>
                                    <p>
                                        <span style={{ color: '#fb5f10', fontSize: 20, fontWeight: 700,marginRight:7 }}>￥93</span>
                                        <span>起</span>
                                    </p>
                                </div>
                            </div>
                            <div className='Dest_nav5it'>
                                <div className='Dest_nav5-img'>
                                    <img src="//tffimg.tff.bz/72/15/88d/8e6/2cd5e949c7ddcb9eee5ed0.jpg?imageView2/1/w/660/h/440/q/75/format/jpg" alt="" />
                                </div>
                                <div className='Dest_nav5-title'>
                                    <h4> 【电子票】美国自然历史博物馆(American Museum of Natural History)</h4>
                                    <p>
                                        <span style={{ color: '#fb5f10', fontSize: 20, fontWeight: 700 ,marginRight:7}}>￥93</span>
                                        <span>起</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <span className='but'>显示所有当地玩乐</span>
                    </div>
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

Dest = connect(mapStateToProps)(Dest)

export default Dest