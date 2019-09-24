let initState = {
    userInfo: {},
    token: "",
    showMenu: true
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
                showMenu: true
            }
        case "hide_menu":
            return {
                ...state,
                showMenu: false
            }
        default:
            return state
    }
}

export default reducer