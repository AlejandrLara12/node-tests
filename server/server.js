// server app
const express = require('express');

let app = express();

app.get('/', (req, res) => { // request, respond
  res
    .status(404)
    .send({
      error: 'Page not found.',
      name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
  res
    .status(200)
    .send([
      {
        name: 'Ricardo Lara',
        age: 21
      },
      {
        name: 'Moises Altamirano',
        age: 21
      },
      {
        name: 'Oscar Gutierrez',
        age: 22
      },
    ]);
});

app.listen(3000);
module.exports.app = app;