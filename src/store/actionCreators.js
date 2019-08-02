// 引入 actionType 里得常量, 确保分发不出错
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from "./actionTypes";

export const changeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const addTodoItem = value => ({
  type: ADD_TODO_ITEM,
  value
});
export const deleteTodoItem = value => ({
  type: DELETE_TODO_ITEM,
  value
});
