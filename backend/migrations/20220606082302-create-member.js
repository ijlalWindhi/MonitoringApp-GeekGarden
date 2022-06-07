'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('member', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.ENUM('leader', 'member')
      },
      position: {
        type: Sequelize.STRING
      },
      id_project: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('member');
  }
};