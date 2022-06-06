'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: "id",
        as: "user"
      })
    }
  }
  time.init({
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'time',
    tableName: 'time',
  });
  return time;
};