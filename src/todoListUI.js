import React, { Fragment } from "react";
import { Input, Button, List, Icon } from "antd";

// 无状态组件 ———— 只有 render 函数并且性能很高
const TodoListUI = props => {
  return (
    <Fragment>
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <Input
          value={props.inputValue}
          onChange={props.handleInputChange}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button type="primary" onClick={props.handleAddItem}>
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px", marginLeft: "10px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Icon
                type="delete"
                onClick={() => {
                  props.deleteItem(index);
                }}
              />
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    </Fragment>
  );
};

export default TodoListUI;

// 普通 UI 组件
// export default class todoListUI extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div style={{ marginTop: "10px", marginLeft: "10px" }}>
//           <Input
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//             placeholder="todo info"
//             style={{ width: "300px", marginRight: "10px" }}
//           />
//           <Button type="primary" onClick={this.props.handleAddItem}>
//             提交
//           </Button>
//         </div>
//         <List
//           style={{ marginTop: "10px", width: "300px", marginLeft: "10px" }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               actions={[
//                 <Icon
//                   type="delete"
//                   onClick={index => {
//                     this.props.deleteItem(index);
//                   }}
//                 />
//               ]}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </Fragment>
//     );
//   }
// }
