module.exports = (sequelize, DataTypes) => {
  return sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
    }
  }, {
    paranoid: true,
  }); // Create a 'todo' model with columns and table description
}
