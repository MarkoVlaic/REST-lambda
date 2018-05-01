'use strict';

const db = require('../db.js');

module.exports.updateTodo = (event, context, callback) => {
  const { id } = event.pathParameters;
  const body = JSON.parse(event.body);

  db.todo.update(body, { where: { id }, returning: true })
  .then(res => {
    console.log(res);
    const [ rowsAffected, todoArray ] = res;
    const response = {
      statusCode: 200,
      body: JSON.stringify({todo:todoArray[0]})
    };

    callback(null, response);
  }).catch(err => callback(null, {statusCode: 500, body: JSON.stringify({error: 'Error updating your TODO!'})}));
}
