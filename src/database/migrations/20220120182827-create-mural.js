'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('murals', {
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,  
        primaryKey:true,
        autoIncrement:true
      },
      title:{
        type:sequelize.STRING,
        allowNull:false,
      },
      md_document:{
        type:sequelize.STRING,
        allowNull:false,
      },
      created_at:{
        type:sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:sequelize.DATE,
        allowNull:false,
      }
      });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('murals');
     
  }
};

