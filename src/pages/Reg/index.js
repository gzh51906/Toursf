import React, {
    Component
} from 'react'
import { Icon, Button } from 'antd';
import './reg.css'

import axios from "axios"
import { connect } from "react-redux"


class Reg extends Component {

    // -表单验证
    constructor(props) {

        super(props);
        // 生成随机数
        // this.handleR = this.handleR.bind(this);
        this.state = {
            phone: "",
            password: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: "",
            random: ""
        }
    }

    //监听input中的数据，保存到state中
    changeUsername(e) {
        let phone = e.target.value;
        this.setState({
            phone
        });
        // console.log(this.state.userName);
    }

    changePassword(e) {
        let upwd = e.target.value;
        this.setState({
            password: upwd
        })
    }
    // 表单验证和正则
    handleClick = async () => {
        if (this.state.phone === "" || this.state.phone === null) {
            this.setState({
                unameHelp: "* 用户名不能为空"
            })
        } else if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(this.state.phone))) {
            this.setState({
                unameHelp: "* 手机格式不正确"
            })
        } else if (this.state.password === "" || this.state.password === null) {
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

        if (this.state.phone && (/^1[3|4|5|7|8][0-9]{9}$/.test(this.state.phone)) && this.state.password) {
            let {
                data
            } = await axios.get('http://139.9.138.168:8888/user/check', {
                params: {
                    phone: this.state.phone,
                    password: this.state.password
                }
            })
            console.log("666",data);
            if (data.code === 1) {
                alert("用户名已存在!");
                this.props.history.push('/login')
            } else {
                let {
                    data
                } = await axios.post('http://139.9.138.168:8888/user/reg', {
                    phone: this.state.phone,
                    password: this.state.password
                })
                console.log(data);
                if (data.code === 1) {
                    alert("注册成功!");
                    this.props.history.push('/login')
                } else {
                    console.log("error!!");
                }
            }

        }


    }



    // 生成随机数
    handleR() {
        const min = 1000;
        const max = 9999;
        const rand = min + Math.random() * (max - min);
        this.setState({ random: Math.floor(rand) });
        console.log('11', this.state.random);

    }



    mine = () => {
        this.props.history.push('/login')
    }


    render() {

        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        return (
            <div className='reg'>
                <div className='reg_log'>
                    <span className='icon'
                    > <Icon type="left" style={{ fontSize: 18 }}
                        onClick={this.mine}
                        /></span>
                    <span className='reg_nm'>注册</span>
                </div>

                {/*  */}


                <div className='input_box'>
                    <div style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>账号注册</div>
                    <div className='input'>
                        <div className='input_ho'>
                            <span style={{ marginRight: 10, fontSize: 18 }}><Icon type="user" /></span>
                            <input type="text" placeholder='输入手机号' name="username" id="uname" ref="uname" onChange={this.changeUsername.bind(this)} className="form-control" />
                            <p className="help-block">{this.state.unameHelp}</p>
                        </div>

                        <div className='input_ho'>
                            <span style={{ marginRight: 10, fontSize: 18 }}><Icon type="mail" /></span>
                            <input type="text" placeholder='短信验证' className='reg_inp' value={this.state.random} onChange={this.handleR} />
                            <span className='reg_sp' onClick={this.handleR.bind(this)}>
                                获取验证码
                            </span>
                        </div>
                        <div className='input_ho'>
                            <span style={{ marginRight: 10, fontSize: 18 }}><Icon type="key" /></span>
                            <input type="password" placeholder='密码'
                                name="password" id="upwd" ref="upwd" onChange={this.changePassword.bind(this)} className="form-control"
                            />
                            <p className="help-block">{this.state.upwdHelp}</p>
                        </div>
                    </div>
                    <div className='button'>
                        <Button type="primary" onClick={this.handleClick.bind(this, this.state.username, this.state.Password)}>
                            注册
                    </Button>
                    </div>

                </div>
                {/*  */}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Reg = connect(mapStateToProps)(Reg)
export default Reg;