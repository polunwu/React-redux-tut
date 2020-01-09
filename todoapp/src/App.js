import React from 'react';
import Todos from './Todos'

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'walk my dog' }
    ]
  }
  deleteTodo = (id) => {
    const updateTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: updateTodos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
