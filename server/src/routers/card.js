/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find,
    insert
} = require("../mongo/mongodb");

/* 引入数据返回格式模板 */
const {
    formData
} = require("../utils");

/* 添加兑换的卡密 */
Router.post("/", async (req, res) => {
    let {
        cardname,
        password,
    } = req.body;
    try {
        insert("card_list", {
            cardname,
            password
        });
        res.send(formData());
    } catch (err) {
        res.send(formData({
            code: 0,
            data: err
        }));
    }
})

module.exports = Router;