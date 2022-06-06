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
        foreignKey: 'id_member',
        as: 'project'
      });
    }
  }
  member.init({
    id_user: DataTypes.INTEGER,
    position: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'member',
    tableName: 'member'
  });
  return member;
};