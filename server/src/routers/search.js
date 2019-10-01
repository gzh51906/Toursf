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

Router.get("/", async (req, res) => {
    // res.send("hello")
    let data = await find("search", {})
    res.send(formData({
        data
    }))
})

Router.get("/discover", async (req, res) => {
    let data = await find("discover", {})
    res.send(formData({
        data
    }))
})

module.exports = Router