'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class report extends Model {
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
  report.init({
    date: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {
    sequelize,
    timestamps: false,
    modelName: 'report',
    tableName: 'report',
  });
  return report;
};