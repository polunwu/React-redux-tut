import React from 'react';

const Todos = (props) => {
  const todoList = props.todos.length ? (
    props.todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <a href="#!"><span onClick={() => { props.deleteTodo(todo.id) }}>{todo.content}</span></a>
        </div>)
    })
  ) : (
      <p className="center">You have no todo's left, yay</p>
    );
  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
}
export default Todos;