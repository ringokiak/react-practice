import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // 当父组件的 render 函数执行时，子组件的 render 也全部会执行
  render() {
    console.log("render - 子组件渲染");
    const { content, word } = this.props;
    // JSX语法，简单的生成虚拟 DOM
    return (
      <Fragment>
        <div onClick={this.deleteItem}>
          {word} - {content}
        </div>
      </Fragment>
    );
    // React 方法圣城虚拟 DOM
    // return (
    //   React.createElement('div',{},'123')
    // );
  }

  // 判断是否需要重新渲染
  shouldComponentUpdate(nextProps, nextState) {
    // 如果新的 props 与之前的不同, 则重新渲染
    if (nextProps.content !== this.props.content) {
      return true;
    }
    // 否则阻止重新渲染
    else {
      return false;
    }
  }

  // 组件要从父组件接收参数, 并且父组件的 render 函数被重新执行后, 进入此声明周期
  componentWillReceiveProps() {
    // console.log("componentWillReceiveProps - 接收参数前");
  }
  // 当组件即将被销毁
  componentWillUnmount() {
    // console.log("componentWillUnmount - 即将销毁");
  }

  deleteItem() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

// 对属性做校验
TodoItem.propTypes = {
  // 字符串，必传
  content: PropTypes.string.isRequired,
  // 数字或字符串，非必传
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // 函数，非必传
  deleteItem: PropTypes.func,
  // 要求必传但是没传的属性
  word: PropTypes.string.isRequired
};

// 给属性默认值
TodoItem.defaultProps = {
  word: "占位"
};

export default TodoItem;
