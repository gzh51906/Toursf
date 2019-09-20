let initState = {
    userInfo: {},
    token: ""
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
        default:
            return state
    }
}

export default reducer