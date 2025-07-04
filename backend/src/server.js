const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
    const server = express();
    server.use(express.json());
    server.use(cors());

    server.get('/api/todo', async (req, res) => {
        res.json(await todoService.getTodos());
    });

    server.post('/api/todo', async (req, res) => {
        try {
            const newTodo = req.body;
            const createdTodo = await todoService.addTodo(newTodo);
            res.status(201).json(createdTodo);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add todo' });
        }
    });

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
