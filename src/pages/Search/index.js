import React, { Component } from "react"
import Api from "../../api"
import axios from "axios"
import { connect } from "react-redux"
import "./search.scss"

class Search extends Component {
    state = {
        td: []
    }
    async componentDidMount() {
        // axios.post("http://localhost:8888/goods/add", { id: 1, base: 3, info: 4, itinerary: 5, language: 6 })
        let { data } = await Api.get("/search", {})
        console.log(data)

        /*  let { td } = this.state;
         num.map((item, idx) => {
             axios.get(`https://app.toursforfun.com/api/product/${item}`).then(({ data }) => {
                 let { base, info, itinerary, language } = data.data
                 console.log({ id: item, base, info, itinerary, language })
             })
         }) */
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        console.log(window.scrollY)
    }
    render() {
        /* 隐藏菜单栏 */
        let { dispatch } = this.props
        dispatch({ type: "hide_menu" })
        return (
            <div id="search">
                搜索
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        showMenu: state.common.showMenu
    }
}

Search = connect(mapStateToProps)(Search)

export default Search