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
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      deadline: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('aktif','tidak-aktif'),
        allowNull: false
      },
      id_project: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('task');
  }
};