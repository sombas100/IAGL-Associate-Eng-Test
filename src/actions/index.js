import axios from "axios";
import { FETCH_TODOS, CREATE_TODO } from "./types";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export const addTodo = (task) => {
  return function(dispatch) {
    return axios.post("http://localhost:9091/api/todo/create", { task }).then(({ data }) => {
      dispatch(createTodo(data))
      dispatch(fetchTodos())
    })
  }
}

export const deleteTodo = (id) => {
  return function (dispatch) {
    return axios
      .delete(`http://localhost:9091/api/todo/${id}`)
      .then(() => {
        dispatch(fetchTodos());
      });
  };
};

function createTodo(data) {
  return {
    type: CREATE_TODO,
    payload: data,
  }
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}

