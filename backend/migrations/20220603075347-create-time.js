'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('time', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('time');
  }
};