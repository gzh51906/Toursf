// 初始state
let defaultState = {
    goodslist: [{
        goods_id: 1,
        goods_image: 'https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095303389813607_360.jpg',
        goods_name: 'xxxx',
        goods_price: 998,
        qty: 1
    }, {
        goods_id: 2,
        goods_image: 'https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095303389813607_360.jpg',
        goods_name: 'oooo',
        goods_price: 198,
        qty: 5
    }],
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
                    if (item.goods_id === action.goods_id) {
                        item.qty = action.qty
                    }
                    return item
                })
            }

        case "remove_cart":
            return {
                ...state,
                goodslist: state.goodslist.filter(item => item.goods_id != action.goods_id)
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