import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo));
  };

  return (
    <li className="todo-item">
      <span className="todo-item__text">{todo}</span>
      <button
        className="btn danger"
        onClick={handleDelete}
        style={{ marginLeft: "1rem" }}
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default connect(null)(Todo);
