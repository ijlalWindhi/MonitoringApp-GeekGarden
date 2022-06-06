'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.time, {
        foreignKey: "id_user",
        as: "time"
      })

      this.hasMany(models.report, {
        foreignKey: "id_user",
        as: "report"
      })
    }
  }
  user.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM('hrd','manajer','karyawan'),
    position: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'user',
    tableName: 'user',
  });
  return user;
};