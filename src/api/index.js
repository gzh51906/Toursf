import axios from "axios"

const toursf = axios.create({
    baseURL: "http://localhost:8888"
})

let get = async (item, params) => {
<<<<<<< HEAD
    let {
        data
    } = await toursf.get(item, {
=======
    let { data } = await toursf.get(item, {
>>>>>>> cxd
        params
    })
    return data
}
let post = () => {}
let patch = () => {}
let remove = () => {}

export default {
    get,
    post,
    patch,
    delete: remove
}