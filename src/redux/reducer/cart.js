// 初始state
let defaultState = {
    goodslist: [],
    totalPrice: 0
}
function reducer(state = defaultState, action) {
    switch (action.type) {
        case "change_total_price":
            return {
                ...state,
                totalPrice: action.price
            }

        case "add_to_cart":
            return {
                ...state,
                goodslist: [action.payload, ...state.goodslist]
            }

        case "change_qty":
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.id === action.id) {
                        item.qty = action.qty
                    }
                    return item
                })
            }

        case "change_checked":
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.id === action.id) {
                        item.checked = !item.checked
                    }
                    return item
                })
            }

        case "change_allchecked":
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    item.checked = action.allChecked
                    return item
                })
            }

        case "remove_cart":
            // console.log(action.id)
            return {
                ...state,
                goodslist: state.goodslist.filter(item => item.id != action.id)
            }

        case "clear_cart":
            return {
                ...state,
                goodslist: []
            }

        default:
            return state
    }
}

export default reducer