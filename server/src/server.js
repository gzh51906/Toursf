/* 引入express模块 */
const express = require("express")

/* 引入配置文件：端口号 */
const {
    PORT
} = require("./config.json")

/* 配置路由 */
const router = require("./routers");

/* 配置静态资源服务器 */
const app = express()

/* 设置当前目录为静态资源服务器 */
app.use(express.static("./"))

/* 使用路由接口 */
app.use(router);

/* 解决history路由跳转问题 */
const fs = require('fs');
app.use((req, res) => {
    let content = fs.readFileSync("./index.html");
    res.set('Content-Type', 'text-html;charset=utf-8');
    res.send(content)
});

/* 监听静态资源服务器 */
app.listen(PORT, () => {
    console.log(PORT, "服务器启动成功！")
})