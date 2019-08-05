import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
// 自动找到 store 下的 index.js, 如果命名不是 index, 则需要写全
import store from "./store";
// 引入 actionType 里得常量, 确保分发不出错
// import {
//   CHANGE_INPUT_VALUE,
//   ADD_TODO_ITEM,
//   DELETE_TODO_ITEM
// } from "./store/actionTypes";
// 统一分发 action
import {
  changeInputValue,
  addTodoItem,
  deleteTodoItem,
  getInitList
} from "./store/actionCreators";
import TodoListUI from "./todoListUI";
// import axios from "axios";

class newTodoList extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    // 从仓库拿取数据并赋值
    this.state = store.getState();
    // 订阅 store 的改变
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <TodoListUI
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleAddItem={this.handleAddItem}
          deleteItem={this.deleteItem}
        />
      </Fragment>
    );
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // axios
    //   .get("/api/todolist")
    //   .then(res => {
    //     const action = initTodoList(res.data);
    //     store.dispatch(action);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  // 输入框改变
  handleInputChange(e) {
    // 创建行为, 告诉仓库需要做的事
    const action = changeInputValue(e.target.value);
    // 分发请求
    store.dispatch(action);
  }

  // store 发生变化后, 重新渲染数据
  handleStoreChange() {
    // 重新获取仓库数据
    this.setState(store.getState());
  }

  // 提交时增加列表
  handleAddItem() {
    // 创建行为, 告诉仓库需要做的事
    const action = addTodoItem(this.state.inputValue);
    // 分发请求
    store.dispatch(action);
  }

  // 删除
  deleteItem(index) {
    const action = deleteTodoItem(index);
    store.dispatch(action);
  }
}

export default newTodoList;
