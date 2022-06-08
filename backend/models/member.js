'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
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
      });
    }
  }
  member.init({
    id_user: DataTypes.INTEGER,
    position: DataTypes.STRING,
    role: DataTypes.ENUM('leader','member'),
    id_project: DataTypes.INTEGER, 
  }, {
    sequelize,
    timestamps: false,
    modelName: 'member',
    tableName: 'member'
  });
  return member;
};