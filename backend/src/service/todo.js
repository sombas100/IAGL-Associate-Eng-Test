const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    getTodo: async (task) => {
      return await repository.getTodo(task);
    },
    addTodo: async (task) => {
      return await repository.addTodo(task);
    },
    deleteTodo: async (task) => {
      return await repository.deleteTodo(task);
    }
  };
};

module.exports = todoService;