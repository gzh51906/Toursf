import cartReducer from "./cart"

import commonReducer from "./common"

import { combineReducers } from "redux"

export default combineReducers({
    cart: cartReducer,
    common: commonReducer
})