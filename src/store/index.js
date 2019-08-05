// 从 redux 引入方法
import { createStore, applyMiddleware, compose } from "redux";
// 从 reducer 拿取初始数据
import reducer from "./reducer";
// 引入 redux-thunk 中间件
// import thunk from "redux-thunk";
// 引入 redux-saga中间件
import createSagaMiddleware from "redux-saga";
// 引入 sage
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// 解决 devTools 和中间件的冲突
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// 使 中间件 和 devTools 能同时被使用
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// 生成仓库
const store = createStore(
  reducer,
  // 使用中间件
  enhancer
);

// 运行 saga
sagaMiddleware.run(mySaga);

// 导出仓库
export default store;
