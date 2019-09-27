import React, { Component } from "react"
import { connect } from "react-redux"
import { Tabs, Radio } from 'antd';
import "./discover.scss";


const { TabPane } = Tabs;
class Discover extends Component {
    render() {
        return <div className="discover-box" style={{ background: "#fff", height: "100%" }}>
            <div className="title">
                <h4 >发现</h4>
            </div>
            <div className="discover-area">
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
                <div className="found-area-item">美国东海岸</div>
            </div>
            <div className="discover-city">
                <a href="">纽约</a>
                <a href="">纽约</a>
                <a href="">纽约</a>
                <a href="">纽约</a>
                <a href="">纽约</a>

            </div>
        </div>
    }
}
// let mapStateToProps = (state) => {
//     return {
//         showMenu: state.common.showMenu
//     }
// }

// Discover = connect(mapStateToProps)(Discover)

export default Discover