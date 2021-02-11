// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Container from "react-bootstrap/Container";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Container>
        <div>
          {this.props.todoList.map((item) => (
            <Todo
              item={item}
              markAsCompleted={this.props.markAsCompleted}
              key={item.id}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default TodoList;
