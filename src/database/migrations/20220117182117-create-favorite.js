'use strict';
const sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('favorite', { 
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      user_id:{
        type:sequelize.INTEGER,
        allowNull:false,
        references:{model:'users',key:'id'},
        onUpdete:'CASCADE',
        onDelete:'CASCADE',
      },
      Exercise_id:{
        type:sequelize.INTEGER,
        allowNull:false,
        references:{model:'exercises',key:'id'},
        onUpdete:'CASCADE',
        onDelete:'CASCADE',
      },
      created_at:{
        type:sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:sequelize.DATE,
        allowNull:false,
      },

    });
},

  down: async (queryInterface, Sequelize) => {
    	await queryInterface.dropTable('favorite');
  }
};
