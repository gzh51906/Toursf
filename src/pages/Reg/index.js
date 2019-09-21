import React, {
    Component
} from 'react'
import { Icon, Button } from 'antd';
import './reg.css'


class Reg extends Component {

    // -表单验证
    constructor(props) {

        super(props);
        // 生成随机数
        // this.handleR = this.handleR.bind(this);
        this.state = {
            userName: "",
            userPassword: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: "",
            random: ""
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
                        <Button type="primary" onClick={this.handleClick.bind(this, this.state.userName, this.state.userPassword)}>
                            注册
                    </Button>
                    </div>

                </div>
                {/*  */}
            </div>
        )
    }
}

export default Reg;