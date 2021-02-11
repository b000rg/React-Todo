import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import X from "../icons/x.svg";
import Check from "../icons/check.svg";

class Todo extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>
            <img width="25" src={this.props.item.completed ? Check : X} />
            {this.props.item.name}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {this.props.item.details || (
            <Card.Text>{this.props.item.details}</Card.Text>
          )}
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={() => this.props.markAsCompleted(this.props.item.id)}
          >
            Mark as Completed
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default Todo;
