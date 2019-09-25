import axios from "axios"

const toursf = axios.create({
    baseURL: "http://139.9.138.168:8888"
})

let get = async (item, params) => {
    let { data } = await toursf.get(item, {
        params
    })
    return data
}
let post = async (item, params) => {
    // console.log("api:", params)
    let { data } = await toursf.post(item, {
        params
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