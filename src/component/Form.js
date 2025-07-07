import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodoForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task)); 
      setTask("");  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="btn" type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
