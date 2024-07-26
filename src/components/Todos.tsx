import React from 'react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>ID: {todo.id} - </span>
          <span>Title: {todo.title} - </span>
          <span>Completed: {todo.completed ? "true" : "false"}</span>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
