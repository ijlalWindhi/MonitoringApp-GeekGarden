'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('task', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      member: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      deadline: {
        type: Sequelize.DATE,
        allowNull: false
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('task');
  }
};