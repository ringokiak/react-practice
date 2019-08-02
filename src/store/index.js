// 从 redux 引入方法
import { createStore } from "redux";
// 从 reducer 拿取初始数据
import reducer from "./reducer";

// 生成仓库
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 导出仓库
export default store;
