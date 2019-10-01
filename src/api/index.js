import axios from "axios"

const toursf = axios.create({
    // baseURL: "http://52.78.186.217:8811"//修改、
    baseURL: "http://119.3.166.163:8888"
})

let get = async (item, params) => {
    let { data } = await toursf.get(item, {
        params
    })
    return data
}
let post = async (item, params) => {
    let { phone, password } = params
    let { data } = await toursf.post(item, {
        phone, password
    })
    return data
}
let patch = () => { }
let remove = () => { }

export default {
    get,
    post,
    patch,
    delete: remove
}