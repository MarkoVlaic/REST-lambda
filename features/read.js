'use strict'

const db = require('../db.js');

module.exports.getTodo = (event, context, callback) => {
  const { id } = event.pathParameters;

  db.todo.findOne({ where: {id}, attributes: ['id', 'title', 'complete'] }).then(todo => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({todo})
    };
    callback(null, response);
  }).catch(err => callback(null, {statusCode:500, body: JSON.stringify({error: 'Error fetching your TODO'})}));
};

module.exports.listTodos = (event, context, callback) => {
  db.todo.findAll({
    attributes: ['id', 'title', 'complete']
  }).then(todos => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        todos
      })
    };

    callback(null, response);
  }).catch(err => callback(null, {statusCode:500, body:JSON.stringify({error: 'Error fetching your TODOs'})}));
};
