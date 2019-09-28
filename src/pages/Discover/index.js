import React, { Component } from "react"
import { connect } from "react-redux"
import Api from "../../api"
import "./discover.scss";
import { Tabs } from 'antd';

const { TabPane } = Tabs;
class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left',
            arealist: []
        }
    }
    async componentDidMount() {
        /* 发送网络请求获取数据 */
        let { data } = await Api.get('/search/discover', {});
        this.setState({
            arealist: data
        });console.log(this.state.arealist);
    };
    goto=()=>{
        this.props.history.push('/list')
    }
    render() {
        return <div className="bigbox" style={{width:'100%',height:'100%',background:'#fff' }}>
            <div className="title">
               <h4 >发现</h4>
            </div>
            <Tabs defaultActiveKey="1" type='card' tabPosition={"left"}  tabBarGutter={0}>
                
                {this.state.arealist.map((item, idx) => {
                    return <TabPane tab={item.name} key={idx} className="
                    discover-city">
                        {
                            item.children.map(it => {
                                return <a href=" javascript: void ( 0 );" className="discover-city-item" onClick={this.goto}>{it.name}</a>
                            })
                        }
                    </TabPane>
                })
            }
        </Tabs>
        </div>


        // <div>
        //     <Tabs tabPosition={this.state.mode}
        //         type='card'
        //         tabBarGutter={0}>
        //         <div className="title">
        //             <h4 >发现</h4>
        //         </div>
        //         {
        //             this.state.arealist.map((item, idx) => {
        //                 return <TabPane tab={item.name} key={idx}>
        //                     {
        //                         item.children.map((it) => {
        //                             return (
        //                                 <a href="" className="discover-city-item">{it.city}</a>
        //                             )
        //                         })
        //                     }
        //                 </TabPane>
        //             })
        //         }
        //     </Tabs>
        // </div>
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Discover = connect(mapStateToProps)(Discover)

export default Discover


// return <div className="discover-box" style={{ background: "#fff", height: "100%" }}>
        //     <div className="title">
        //         <h4 >发现</h4>
        //     </div>
        //     <div className="discover-area">
        //         {
        //             arealist.map((item, index) => {
        //                 return <div className="discover-area-item item" key={index}>{item.area}</div>
        //             })
        //         }
        //     </div>
        //    <div className="discover-city">
        //     <a href="" className="discover-city-item discover-city-item-active">纽约</a>
        //     <a href="" className="discover-city-item">纽约</a>
        // </div>
        // </div >