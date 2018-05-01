const db = require('../db.js');

module.exports.createTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { title } = body;
  //db.sequelize.sync();

  if(!title){
    return callback(null, {statusCode: 500, body: JSON.stringify({error: 'Please provide the title for creating a TODO!'})})
  }

  db.todo.create({ title })
  .then(todo => {
    console.log('Created');
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        todo
      })
    });
  }).catch(err => {
    console.log('Error');
    return callback(JSON.stringify(err), {statusCode: 500, body:JSON.stringify({error: 'There was an error creating your TODO'})})
  });
}
