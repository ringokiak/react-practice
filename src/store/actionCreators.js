// 引入 actionType 里得常量, 确保分发不出错
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODO_LIST
} from "./actionTypes";
import axios from "axios";

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
export const initTodoList = value => ({
  type: INIT_TODO_LIST,
  value
});
export const getTodoList = () => {
  return dispatch => {
    axios
      .get("/api/todolist")
      .then(res => {
        const action = initTodoList(res.data);
        dispatch(action);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
