/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find
} = require("../mongo/mongodb");

/* 引入数据返回格式模板 */
const {
    formData
} = require("../utils");

/* 查询首页轮播图 */
Router.get("/list", async (req, res) => {
    let data = await find("group_list", {});
    res.send(data)
})

module.exports = Router;