'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('report', {
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
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('report');
  }
};