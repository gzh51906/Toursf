import React, {
    Component
} from 'react'

import { Icon, Button } from 'antd';

class Cart extends Component {

  

    render() {
        return (
            <div className='cart'>
                <div className='logo'>
                    <span className='icon'
                    > <Icon type="left" style={{ fontSize: 18 }}
                        onClick={this.mine}
                        /></span>
                    <span className='logo_nm'>登录</span>
                </div>
            </div>
        )


    }


}

export default Cart;