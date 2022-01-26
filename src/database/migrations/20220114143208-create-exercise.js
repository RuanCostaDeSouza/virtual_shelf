'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('exercises', {
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,  
        primaryKey:true,
        autoIncrement:true
      },
      name:{
        type:sequelize.STRING,
        allowNull:false,
      },
      video:{
        type:sequelize.STRING,
        allowNull:false,
      },
      description:{
        type:sequelize.TEXT,
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
   
     await queryInterface.dropTable('exercises');
  }
};
