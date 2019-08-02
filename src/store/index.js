// 从 redux 引入方法
import { createStore, applyMiddleware, compose } from "redux";
// 从 reducer 拿取初始数据
import reducer from "./reducer";
// 引入 redux-thunk 中间件
import thunk from "redux-thunk";

// 解决 devTools 中间件和 thunk 中间件的冲突
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// 使 thunk 和 devTools 能同时被使用
const enhancer = composeEnhancers(applyMiddleware(thunk));

// 生成仓库
const store = createStore(
  reducer,
  // 使用中间件
  enhancer
);

// 导出仓库
export default store;
