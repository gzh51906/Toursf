/* 引入模块：express */
const express = require("express")

/* 使用路由中间件 */
const Router = express.Router()

/* 引入数据库查询方法 */
const {
    find
} = require("../mongo/mongodb");

/* 引入数据返回模板 */
const {
    formData
} = require("../utils")

/* 管理者登陆 */
Router.post("/login", async (req, res) => {
    let {
        username,
        password
    } = req.body
    let data
    try {
        data = await find("manger", {
            username,
            password
        })
        data = data[0];
        if (data) {
            res.send(formData({}));
        } else {
            res.send(formData({
                code: 0
            }));
        }
    } catch (err) {
        res.send(formData({
            code: 0
        }));
    }
})

module.exports = Router