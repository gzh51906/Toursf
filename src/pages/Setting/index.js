import React, { Component } from 'react'
import { connect } from "react-redux"


import './setting.css'
import { Icon, Modal, Button } from 'antd';


const { confirm } = Modal;
class Setting extends Component {

    showConfirm = () => {
        confirm({
            title: '退出确认',
            content: '您确定退出当前账号么？',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                localStorage.removeItem('token')
                this.props.history.push('/mine')
            },

        });
    }

    mine = () => {
        this.props.history.push('/mine')
    }


    render() {
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        return (
            <div className='setting'>
                <div className='setting_log'>
                    <span className='icon'
                        onClick={this.mine}
                    > <Icon type="left" style={{ fontSize: 18 }}
                        onClick={this.mine}
                        /></span>
                    <span className='setting_nm'>设置</span>
                </div>
                <div className='setting_co'>
                    <img src="../../images/download.png" alt="" />
                    <p>途风旅游 </p>
                </div>
                <div className='setting_bottom'>
                    <div style={{
                        width: '100%',
                        borderTop: '1px solid #ccc',
                        display: "flex",
                        justifyContent: "space-between",
                        lineHeight: '50px',
                        fontSize: 16,

                    }}>
                        <span style={{ fontWeight: 700, }}>系统货币</span>
                        <span style={{ fontSize: 14, color: "#b4b4b4" }}>人民币(¥) &gt;</span>
                    </div> <div style={{
                        width: '100%',
                        borderTop: '1px solid #ccc',
                        display: "flex",
                        justifyContent: "space-between",
                        lineHeight: '50px',
                        fontSize: 16,
                        borderBottom: '1px solid #ccc'
                    }}>
                        <span style={{ fontWeight: 700, }}>系统货币</span>
                        <span style={{ fontSize: 14, color: "#b4b4b4" }}>人民币(¥) &gt;</span>
                    </div>
                </div>
                {
                    localStorage.getItem('token') === null
                        ?
                        <div></div>
                        :
                        <div className='setting_logs'>
                            <Button onClick={this.showConfirm}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                    color: "#fb5f10",
                                    fontSize: 18,
                                    fontWeight: 700
                                }}
                            >退出登录</Button>
                        </div>
                }
            </div>
        )

    }

}
let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Setting = connect(mapStateToProps)(Setting)

export default Setting;