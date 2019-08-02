// 引入 actionType 里得常量, 确保分发不出错
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODO_LIST
} from "./actionTypes";

// 创建默认数据
const defaultState = {
  inputValue: "",
  list: []
};

// 导出数据
export default (state = defaultState, action) => {
  // 判断行为
  if (action.type === CHANGE_INPUT_VALUE) {
    // 深拷贝, 因为不能直接修改 state
    const newState = JSON.parse(JSON.stringify(state));
    // 改变行为想要达成的值
    newState.inputValue = action.value;
    // 将改变后的值发送给仓库
    return newState;
  }
  // 判断行为
  if (action.type === ADD_TODO_ITEM) {
    // 深拷贝, 因为不能直接修改 state
    const newState = JSON.parse(JSON.stringify(state));
    // 改变行为想要达成的值
    newState.list.push(action.value);
    newState.inputValue = "";
    // 将改变后的值发送给仓库
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  if (action.type === INIT_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.value;
    return newState;
  }
  return state;
};
