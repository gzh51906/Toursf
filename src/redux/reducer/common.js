let initState = {
    userInfo: {},
    token: "",
    showMenu: true,
    goodsid: "",
    // islogin:false,
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "login":
            return {
                ...state,
                userInfo: action.userInfo,
                token: action.token
            }
        case "logout":
            return {
                ...state,
                userInfo: {},
                token: ""
            }

        case "show_menu":
            return {
                ...state,
                showMenu: true,
                
            }
        case "hide_menu":
            return {
                ...state,
                showMenu: false
            }
        case "goods_id":
            return {
                ...state,
                goodsid: action.id
            }
        default:
            return state
    }
}

export default reducer