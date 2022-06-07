'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.project, {
        foreignKey: 'id_project',
        as: 'project'
      });
      this.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'user'
      })
    }
  }
  task.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    id_user: DataTypes.INTEGER,
    deadline: DataTypes.STRING,
    id_project: DataTypes.INTEGER,
    status: DataTypes.ENUM('aktif','tidak-aktif')
  }, {
    sequelize,
    timestamps: false,
    modelName: 'task',
    tableName: 'task',
  });
  return task;
};