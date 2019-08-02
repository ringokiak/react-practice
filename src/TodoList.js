import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
import axios from "axios";

class TodoList extends Component {
  // 生命周期

  // 1. 初始化
  //  设置 props 和 state
  constructor(props) {
    // console.log("constructor - 构造初始化");
    super(props);
    this.state = {
      value: "",
      list: []
    };
    // 将函数中 this 的指向绑定到顶层 this
    this.getInpValue = this.getInpValue.bind(this);
    this.addNew = this.addNew.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // 2. 挂载
  // 在组件即将被挂载到页面时执行
  componentWillMount() {
    // console.log("componentWillMount - 挂载前");
  }
  // render 函数介于挂载前后执行
  render() {
    console.log("render - 父组件渲染");
    return (
      <Fragment>
        <div>
          <label htmlFor="input">输入</label>
          <input
            id="input"
            className="input"
            value={this.state.value}
            placeholder="请输入"
            onChange={this.getInpValue}
            // 让 this.inp 指向当前 input
            ref={inp => {
              this.inp = inp;
            }}
          />
          <button onClick={this.addNew}>提交</button>
        </div>
        {/* 让 this.myDiv 指向当前 DOM */}
        <div
          ref={myDiv => {
            this.myDiv = myDiv;
          }}
        >
          {this.getTodoItem()}
        </div>
      </Fragment>
    );
  }
  // 组件被挂载到页面后执行
  componentDidMount() {
    // console.log("componentWillMount - 挂载后");
    // 在此处写只执行一次的 ajax 请求
    axios
      .get("/api/todolist")
      .then(res => {
        // 将获取的数据加入 list
        this.setState(() => {
          return {
            list: [...res.data]
          };
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // 3.更新
  // 组件被更新之前执行
  shouldComponentUpdate() {
    // console.log("shouldComponentUpdate - 变更前");
    // 必须返回一个布尔值的内容
    // 返回 true 则成功更新, 返回 false 则不允许更新, 并且不再执行之后的声明周期钩子
    return true;
  }
  // 上一步返回 true 时, 则继续执行剩余生命周期函数
  // 即将变更
  componentWillUpdate() {
    // console.log("componentWillUpdate - 即将变更");
  }
  // 变更后
  componentDidUpdate() {
    // console.log("componentDidUpdate - 变更后");
  }

  // 双向绑定输入框 value 与 this.state.value 的值
  getInpValue() {
    this.setState(() => {
      return {
        value: this.inp.value
      };
    });
  }

  // 点击提交按钮，清空输入框，添加到列表
  addNew() {
    this.setState(
      prev => {
        return {
          list: [...prev.list, prev.value],
          value: ""
        };
      },
      () => {
        // 回调函数，setState 完成后执行
        // console.log(this.myDiv.querySelectorAll("div").length);
      }
    );
  }

  // 删除某一项
  deleteItem(index) {
    this.setState(prev => {
      let list = [...prev.list];
      list.splice(index, 1);
      return {
        list
      };
    });
  }

  // 抽取含有逻辑运算的结构组件
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          content={item}
          key={"todo" + index}
          index={index}
          deleteItem={this.deleteItem}
        />
      );
    });
  }
}

export default TodoList;
