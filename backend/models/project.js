'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.task, {
        foreignKey: 'id',
        as: 'task'
      });
      this.hasMany(models.member, {
        foreignKey: 'id',
        as: 'Member'
      })
    }
  }
  project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    leader: DataTypes.STRING,
    id_member: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'project',
    tableName: 'project',
  });
  return project;
};