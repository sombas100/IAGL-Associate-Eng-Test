
let todoList = {
  todos: [
    {
      id: 1,
      task: "This is a todo example"
    }
  ]
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  getTodo: (id) => {
    const foundTask = todoList.todos.find(t => t.id === parseInt(id))
    return Promise.resolve(foundTask);
  },
  addTodo: (task) => {
  const newId = todoList.todos.length > 0 
    ? Math.max(...todoList.todos.map(t => t.id)) + 1 
    : 1;

  const newTodo = { id: newId, task };
  todoList.todos.push(newTodo);
  return Promise.resolve(newTodo);
  },

  deleteTodo: (task) => {
    const index = todoList.todos.findIndex(t => t.task === task);
  if (index === -1) {
    return Promise.resolve(null); 
  }
  const removedTodo = todoList.todos.splice(index, 1); 
  return Promise.resolve(removedTodo[0]);
  }
};