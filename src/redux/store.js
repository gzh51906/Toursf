import { createStore, applyMiddleware, compose } from "redux";

import allReducer from "./reducer"

import createSagaMiddleware from "redux-saga"

// 引入chrome调试工具
import { composeWithDevTools } from 'redux-devtools-extension';

// 4.引入自定义saga配置文件
import rootSaga from "./rootSaga.js";

// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 2.将 中间件 连接至 Store
let enhancer = applyMiddleware(sagaMiddleware)

enhancer = compose(enhancer, composeWithDevTools())
const store = createStore(allReducer, enhancer)

// const store = createStore(allReducer, composeWithDevTools(enhancer))

// 4.运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store