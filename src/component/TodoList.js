import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../actions";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.data?.todos || []);


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]); 

  return (
    <ul className="todo-list">
      {todos.length ? (
        todos.map((todo, index) => (
          <Todo key={`todo-${index}`} todo={todo.task} />
        ))
      ) : (
        <p>No todos, yay!</p>
      )}
    </ul>
  );
};

export default TodoList;
