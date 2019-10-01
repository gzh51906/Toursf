/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find,
    remove,
    update
} = require("../mongo/mongodb");

/* 引入数据返回格式模板 */
const {
    formData
} = require("../utils");

/* 查询首页信息 */
Router.get("/", async (req, res) => {
    let data = await find("home", {});
    res.send(formData({
        data
    }))
    // console.log(data)
})

module.exports = Router;