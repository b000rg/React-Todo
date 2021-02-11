import React from "react";
import Button from "react-bootstrap/Button";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
    this.addTodo.bind(this);
    this.markAsCompleted.bind(this);
  }

  addTodo = (todo) => {
    this.setState((state) => {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { ...todo, completed: false, id: Date.now() },
        ],
      };
    });
  };

  markAsCompleted = (id) => {
    let todoCopy = [...this.state.todoList];
    let todoToMark = todoCopy.find((item) => item.id === id);
    todoToMark.completed = true;
    this.setState((state) => {
      return { ...state, todoList: todoCopy };
    });
  };

  removeCompleted = () => {
    this.setState((state) => {
      return {
        ...state,
        todoList: state.todoList.filter((item) => !item.completed),
      };
    });
  };

  render() {
    return (
      <div>
        <h2>
          Welcome to your Todo App!
          <Button onClick={this.removeCompleted}>Remove Completed Tasks</Button>
        </h2>
        <TodoList
          todoList={this.state.todoList}
          markAsCompleted={this.markAsCompleted}
        />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
