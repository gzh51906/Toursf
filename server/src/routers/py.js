/* 引入模块：express */
const express = require("express")

/* 使用路由中间件 */
const Router = express.Router()

/* 引入数据库方法 */
const {
    find
} = require("../mongo/mongodb")

/* 引入数据返回格式模板 */
const {
    formData
} = require("../utils")

/* 引入爬虫模块 */
const request = require("request")
const fs = require("fs")
const path = require("path")

Router.get("/splider", (req, res) => {
    fs.readFile('E:/chen_data/Project_toursf/server/src/Data/goods_1.json', function (err, data) {
        if (err) {
            return console.error(err);
        }
        var person = data.toString(); //将二进制的数据转换为字符串
        person = JSON.parse(person); //将字符串转换为json对象

        let dd = person.map((item, idx) => {
            /* 获取文件名 */
            let filename = path.basename(item.image)
            let url = item.image

            /* 下载图片 */
            // if (idx < 50) {

            /*  let data = []
             request(url).on('data', (chunk) => {
                 // console.log(chunk)
                 // data += chunk
                 data.push(chunk)
             }).on('end', () => {
                 console.log(data)
                 // .pipe(fs.createWriteStream('./images/' + filename))
                 var writerStream = fs.createWriteStream('./images/' + filename);
                 data.forEach(item => {
                     writerStream.write(item);
                 })
                 writerStream.end();
             }); */
            // }

            /* 修改文件名 */
            // item.image = filename;

            return item.image
        })
        res.send(dd)


    })
})

Router.get('/images/*', function (req, res) {
    // res.send("hello")
    res.sendFile("E:/chen_data/Project_toursf/server/src/" +
        req.url);
    // console.log("request for " + req.url + " received.");
})

Router.get("/msg", (req, res) => {
    fs.readFile('./images/1.jpg', function (err, data) {
        if (err) {
            res.end('file not exist')
        } else {
            res.writeHeader(200, {
                'Context-Type': 'image/jpeg'
            })
            res.end(data)
        }
    })
})

module.exports = Router