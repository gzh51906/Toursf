import React, {
    Component
} from 'react'


import { Icon, Button } from 'antd';
import './login.css'

import axios from "axios"

class Login extends Component {

    // -表单验证
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: ""
        }
    }


    //监听input中的数据，保存到state中
    changeUsername(e) {
        let uname = e.target.value;
        this.setState({
            userName: uname
        });
        // console.log(this.state.userName);
    }

    changePassword(e) {
        let upwd = e.target.value;
        this.setState({
            userPassword: upwd
        })
    }
    // 表单验证和正则
    handleClick() {
        if (this.state.userName === "" || this.state.userName === null) {
            this.setState({
                unameHelp: "* 用户名不能为空"
            })
        } else if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(this.state.userName))) {
            this.setState({
                unameHelp: "* 手机格式不正确"
            })
        } else if (this.state.userPassword === "" || this.state.userPassword === null) {
            this.setState({
                unameHelp: "",
                upwdHelp: "* 密码不能为空"
            })
        } else {
            this.setState({ //清除help-block提示文字
                unameHelp: "",
                upwdHelp: ""
            });
        }

        axios.post('http://139.9.138.168:8888/user/login')
            .then((item) => {
                console.log(item);

            })
    }
    // 登录请求
    // componentDidMount() {
    //     // 在这里请求相关接口判断用户是否完成登录
    //     axios.post('http://139.9.138.168:8888/user/login')
    //         .then((item) => {
    //             console.log(item);

    //         })
    // }

    // ---------

    goto = () => {
        this.props.history.push('/reg')
    }
    mine = () => {
        this.props.history.push('/mine')
    }
    render() {

        return (
            <div className='login'>
                <div className='logo'>
                    <span className='icon'
                    > <Icon type="left" style={{ fontSize: 18 }}
                        onClick={this.mine}
                        /></span>
                    <span className='logo_nm'>登录</span>
                </div>
                <div className='input_box'>
                    <div style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>账号登录</div>
                    <div className='input'>
                        <div className='input_ho'>
                            <span style={{ marginRight: 10, fontSize: 18 }}><Icon type="user" /></span>
                            <input type="text" placeholder='手机号/邮箱' name="username" id="uname" ref="uname" onChange={this.changeUsername.bind(this)} className="form-control" />
                            <p className="help-block">{this.state.unameHelp}</p>
                            {/* -------- */}
                        </div>
                        <div className='input_ho'>
                            <span style={{ marginRight: 10, fontSize: 18 }}><Icon type="key" /></span>
                            <input type="password" placeholder='密码' name="password" id="upwd" ref="upwd" onChange={this.changePassword.bind(this)} className="form-control" />
                            <p className="help-block">{this.state.upwdHelp}</p>
                        </div>
                    </div>
                    <div className='button'>
                        <Button type="primary" onClick={this.handleClick.bind(this, this.state.userName, this.state.userPassword)}>
                            登录
                    </Button>
                    </div>
                    <div>
                        <span style={{ float: "left", marginLeft: 25 }}
                            onClick={this.goto}
                        >注册账号</span>
                        <span style={{ float: "right", marginRight: 25 }}>忘记密码</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;