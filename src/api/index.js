import axios from "axios"

const nanshigou = axios.create({
    baseURL: ""
})

let get = async (params) => {
    let { data } = await nanshigou.get("", {
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