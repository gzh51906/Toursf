import React, { Component } from "react"
import { connect } from "react-redux"

class Discover extends Component {
    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        return (
            <div>
                发现
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Discover = connect(mapStateToProps)(Discover)

export default Discover