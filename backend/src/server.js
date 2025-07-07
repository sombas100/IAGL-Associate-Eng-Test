const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    const todoList = await todoService.getTodos();
    if (todoList.length === 0) return res.status(404).json({ message: 'No todos found' })
    res.json(todoList);
  });

  server.get('/api/todo/:id', async (req, res) => {
    const { id } = req.params
    try {
      const foundTask = await todoService.getTodo(id)
      if (!foundTask) return res.status(404).json({ message: 'Task not found' })
        res.status(200).json(foundTask)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })

  server.post('/api/todo/create', async (req, res) => {
    const { task } = req.body
    try {
      if (!task) return res.status(400).json({ message: 'A task is still required' })
        const newTask = await todoService.addTodo(task)
      res.status(201).json(newTask)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  server.delete('/api/todo/:id', async (req, res) => {
    const { id } = req.params
    try {
      const deleted = await todoService.deleteTodo(id)
      if (!deleted) return res.status(404).json({ message: 'Todo not found' });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })


  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;