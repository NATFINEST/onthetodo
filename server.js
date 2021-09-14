const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const LISTINGS_DATA_FILE = path.join(__dirname, 'server-todos.json');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/todos', (_req, res) => {
  setTimeout(() => {
    fs.readFile(LISTINGS_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  }, 1000);
});

app.post('/todos', (req, res) => {
  fs.readFile(LISTINGS_DATA_FILE, (err, data) => {
    const todoItems = JSON.parse(data);

    const updatedTodoItems = [...todoItems, req.body];

    fs.writeFile(
      LISTINGS_DATA_FILE,
      JSON.stringify(updatedTodoItems, null, 3),
      () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(updatedTodoItems);
      }
    );
  });
});

app.post('/todos/:id/delete', (req, res) => {
  fs.readFile(LISTINGS_DATA_FILE, (err, data) => {
    const id = parseInt(req.params.id);
    let todoItems = JSON.parse(data);

    const itemIndex = todoItems.findIndex((item) => item.id === id);

    todoItems.splice(itemIndex, 1);

    fs.writeFile(LISTINGS_DATA_FILE, JSON.stringify(todoItems, null, 3), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(todoItems);
    });
  });
});

app.post('/todos/:id/update', (req, res) => {
  fs.readFile(LISTINGS_DATA_FILE, (err, data) => {
    const id = parseInt(req.params.id);
    let todoItems = JSON.parse(data);

    for (const todoItem of todoItems) {
      if (todoItem.id === id) {
        todoItem.completed = true;
      }
    }

    fs.writeFile(LISTINGS_DATA_FILE, JSON.stringify(todoItems, null, 3), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(todoItems);
    });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
