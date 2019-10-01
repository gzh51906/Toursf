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
    formData
} = require("../utils");

/* 查询商品页码 */
Router.get("/page", async (req, res) => {
    let data = await find("goods", {})
    data = Math.ceil(data.length / 10)
    res.send(formData({
        data
    }))
})

/* 查询所有商品 */
Router.get("/", async (req, res) => {
    let {
        page,
        id
    } = req.query

    let data
    if (id) {
        data = await find("goods", {
            id
        })
    } else if (page) {
        data = await find("goods", {}, {
            skip: page * 10,
            limit: 10,
        });
    } else {
        data = await find("goods", {})
    }
    /* 修改图片路径 */
    data.forEach(item => {
        item.image = "http://localhost:8888/py/images/" + item.image
    })
    res.send(formData({
        data
    }))
})

/* 插入 */
Router.post("/add", async (req, res) => {
    let {
        id,
        name,
        departure_desc,
        order_count,
        default_price,
        origin_price
    } = req.body;
    // console.log(id,
    //     name,
    //     departure_desc,
    //     order_count,
    //     default_price,
    //     origin_price)
    try {
        insert("goods", {
            id,
            name,
            departure_desc,
            order_count,
            default_price,
            origin_price
        });
        res.send(formData());
    } catch (err) {
        res.send(formData({
            code: 0,
            data: err
        }));
    }
})

/* 删除商品 */
Router.delete("/remove", async (req, res) => {
    let {
        id
    } = req.query
    try {
        remove("goods", {
            id
        })
        res.send(formData({}))
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

/* 修改商品 */
Router.patch("/patch", (req, res) => {
    let {
        id,
        name,
        image,
        departure_desc,
        order_count,
        default_price,
        origin_price
    } = req.body
    try {
        update('goods', {
            id: id
        }, {
            name,
            image,
            departure_desc,
            order_count,
            default_price,
            origin_price
        })
        res.send(formData())
    } catch (err) {
        res.send(formData({
            code: 0
        }))
    }
})

module.exports = Router;