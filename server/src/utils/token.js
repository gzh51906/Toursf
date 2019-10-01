/* 引入tonken */
const jwt = require("jsonwebtoken")

const secret = "egu"
/* 创建 */
function create(data, expiresIn = 60 * 60 * 24) {
    let token = jwt.sign({
        data
    }, secret, {
        expiresIn
    })
    return token;
}

/* 校验 */
function vertify() {}

module.exports = {
    create
}