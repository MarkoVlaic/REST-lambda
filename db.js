const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://ywzsyuah:FrYOOjA3Ltr_o62Uy4KGtcrq2RyRsCu6@horton.elephantsql.com:5432/ywzsyuah');
//const sequelize = new Sequelize('postgres://Marko:123456789@todo-db.c3xztarorjnc.eu-central-1.rds.amazonaws.com:5432/todo_db');

const todo = require('./models/todo.js')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

console.log(`Type of ${typeof(db.sequelize.sync)}`);
db.sequelize.sync();

module.exports = db;
