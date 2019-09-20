import { call, apply, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

// import { changeQty } from "../redux/actions/cart"

import api from '../api';

function* helloSaga() {
    yield console.log("hello saga")
}

function* getStore({ type, goods_id, qty }) {
    const data = yield call(api.getStore)
    // console.log(goods_id, qty)
    if (qty > data.data) {
        qty = data.data
    }
    // yield put({ type: "change_qty", goods_id, qty })
    yield put(changeQty(goods_id, qty))
}

function* rootSaga() {
    yield takeLatest("HELLO_SAGA", helloSaga)
    yield takeLatest("CHANGE_QTY_ASYNC", getStore)
}

export default rootSaga