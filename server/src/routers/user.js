/* 引入模块：express */
const express = require("express");

/* 使用路由中间件 */
const Router = express.Router();

/* 引入数据库查询方法 */
const {
    find,
    insert,
    remove,
    update
} = require("../mongo/mongodb");

/* 引入数据返回格式模板 */
const {
    formData,
    token
} = require("../utils");

/* 查询用户 */
Router.get("/", async (req, res) => {
    let data = await find("user", {});
    res.send(data);
})

/* 增加用户：请求放在body里面 */
Router.post("/reg", async (req, res) => {

    let {
        phone,
        password
    } = req.body;
    // console.log(username, password, phone)
    try {
        insert("user", {
            phone,
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

// 查看用户是否存在：请求放在Params中
Router.get("/check", async (req, res) => {
    let {
        phone
    } = req.query;
    // console.log(username)
    // res.send("hello")
    let data
    try {
        data = await find("user", {
            phone
        });
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

// 用户登陆
Router.post("/login", async (req, res) => {
    let {
        phone,
        password
    } = req.body;
    let data;
    try {
        data = await find("user", {
            phone,
            password
        });
        data = data[0];
        let authorization = token.create(phone);
        if (data) {
            res.send(formData({
                data: {
                    authorization
                }
            }));
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

// 删除用户
Router.delete("/", (req, res) => {
    let {
        id
    } = req.query;
    // res.send(id);
    try {
        remove('user', {
            _id: id
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

// 修改用户
Router.patch("/", (req, res) => {

    let {
        id,
        username,
        password
    } = req.body.params;
    // res.send(id);
    // console.log(id)
    // console.log(req.body.params)
    try {
        update('user', {
            _id: id
        }, {
            username,
            password
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

module.exports = Router;