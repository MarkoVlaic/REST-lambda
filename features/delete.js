'use strict'
const db = require('../db.js');

module.exports.deleteTodo = (event, context, callback) => {
  const { id } = event.pathParameters;

  db.todo.destroy({ where: {id} })
  .then(deleted=>{
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        deleted
      })
    });
  }).catch(err => callback(null, {statusCode: 500, body: JSON.stringify({error: 'Error deleting your TODO'})}));
};
