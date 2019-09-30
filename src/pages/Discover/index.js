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
        });
        // console.log(this.state.arealist);
    };
    goto=()=>{
        this.props.history.push('/list')
    }
    render() {
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        return <div className="bigbox" style={{width:'100%',height:'100%',background:'#fff' }}>
            <div className="title">
               <h4 >发现</h4>
            </div>
            <Tabs  type='card' tabPosition={"left"}  tabBarGutter={0} >
                
                {this.state.arealist.map((item, idx) => {
                    return <TabPane tab={item.name} key={idx} className="
                    discover-city">
                        {
                            item.children.map(it => {
                                return <p  className="discover-city-item" onClick={this.goto} key={it.name}>{it.name}</p>
                            })
                        }
                    </TabPane>
                })
            }
        </Tabs>
        </div>


       
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Discover = connect(mapStateToProps)(Discover)

export default Discover


