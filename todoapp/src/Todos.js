import React from 'react';

const Todos = (props) => {
  let todoList = this.props.todos.map(todo => {
    return <li key={todo.id} id={todo.id}>{todo.content}</li>;
  })
  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
}
export default Todos;