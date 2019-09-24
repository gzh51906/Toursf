import React, { Component } from "react"
import { connect } from "react-redux"

class Dest extends Component {
    render() {
        /* 显示菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "show_menu" })
        return (
            <div className="pp">
                目的地
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