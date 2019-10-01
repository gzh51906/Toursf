/* 引入模块：express */
const express = require("express");

/* 配置路由中间件 */
const Router = express.Router();

/* 引入路由文件 */
const homeGoods = require("./goods");
const home = require("./home");
const user = require("./user");
const group = require("./group");
const card = require("./card");
const py = require("./py");
const search = require("./search");
const manger = require("./manger");

/* 利用中间件格式化请求 */
Router.use(express.json(), express.urlencoded({
    extended: false
}))

/* 设置响应头跨域请求 */
Router.use((req, res, next) => {
    /* 设置响应头 */
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    // res.header('Content-Type', 'application/x-www-form-urlencoded');
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
        // 等效于：res.status(200).send();
    } else {
        next();
    }
})

/* 配置路由接口 */
Router.use("/goods", homeGoods);
Router.use("/home", home);
Router.use("/user", user);
Router.use("/group", group);
Router.use("/card", card);
Router.use("/py", py)
Router.use("/search", search)
Router.use("/manger", manger)

module.exports = Router;