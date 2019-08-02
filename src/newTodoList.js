import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List, Icon } from "antd";
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
  deleteTodoItem
} from "./store/actionCreators";

class newTodoList extends Component {
  constructor(props) {
    super(props);
    // 从仓库拿取数据并赋值
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    // 订阅 store 的改变
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
          <Input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="todo info"
            style={{ width: "300px", marginRight: "10px" }}
          />
          <Button type="primary" onClick={this.handleAddItem}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px", marginLeft: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Icon
                  type="delete"
                  onClick={this.deleteItem.bind(this, index)}
                />
              ]}
            >
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    );
  }

  // 输入框改变
  handleInputChange(e) {
    // 创建行为, 告诉仓库需要做的事
    const action = changeInputValue(e.target.value)
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
    const action = addTodoItem(this.state.inputValue)
    // 分发请求
    store.dispatch(action);
  }

  // 删除
  deleteItem(index) {
    const action = deleteTodoItem(index)
    store.dispatch(action);
  }
}

export default newTodoList;
