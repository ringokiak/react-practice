import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          unmountOnExit // 出场后移除 DOM
          classNames="fade" // 动画前缀, 自定义名称与 CSS 中相符
          in={this.state.show} // 判断依据, 布尔值
          timeout={300} // 执行时长
          onEntered={el => {
            el.style.color = "blue";
          }} // 动画入场后回调
          // onExited={} //动画出场后回调
          appear={true} // 为 true 时代表 DOM 第一次出现就执行入场动画
        >
          <div>hello</div>
        </CSSTransition>
        {/* 循环列表, 动画群 */}
        <TransitionGroup>{this.getItem()}</TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }

  // 点击切换隐藏显示
  handleToggle() {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  }

  // 抽取 Item 循环
  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <CSSTransition
          key={item + index}
          classNames="fade" // 动画前缀, 自定义名称与 CSS 中相符
          timeout={300} // 执行时长
          onEntered={el => {
            el.style.color = "blue";
          }} // 动画入场后回调
          // onExited={} //动画出场后回调
          appear={true} // 为 true 时代表 DOM 第一次出现就执行入场动画
        >
          <div>{item}</div>
        </CSSTransition>
      );
    });
  }

  // 点击增加 item
  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, "item"]
      };
    });
  }
}

export default App;
