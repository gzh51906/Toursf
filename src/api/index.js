import axios from "axios"

const toursf = axios.create({
    // baseURL: "http://139.9.138.168:8888"
    baseURL: "http://localhost:8888"
})

let get = async (item, params) => {
    // console.log(params)
    let { data } = await toursf.get(item, {
        params
    })
    return data
}
let post = () => { }
let patch = () => { }
let remove = () => { }

export default {
    get,
    post,
    patch,
    delete: remove
}