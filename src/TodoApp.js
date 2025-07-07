import React from "react";
import TodoList from "./component/TodoList";
import Form from './component/Form'
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1 className="title">IAG Loyalty Todo List</h1>
      <TodoList />
      <Form />
    </div>
  );
}