import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class TodoForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      formData: {
        name: "",
        details: "",
      },
    };
    this.addTodo = props.addTodo;
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.addTodo(this.state.formData);
    this.setState((state) => {
      return { ...state, formData: { name: "", details: "" } };
    });
  };

  handleChange = (evt) => {
    evt.persist();
    this.setState((state) => {
      return {
        ...state,
        formData: {
          ...state.formData,
          [evt.target.name]: evt.target.value,
        },
      };
    });
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Add Todo</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Todo Name:</Form.Label>
                <Form.Control
                  name="name"
                  value={this.state.formData.name}
                  onChange={this.handleChange}
                />
                <Form.Text>* Required</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Todo Details:</Form.Label>
                <Form.Control
                  name="details"
                  value={this.state.formData.details}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit">Add</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default TodoForm;
