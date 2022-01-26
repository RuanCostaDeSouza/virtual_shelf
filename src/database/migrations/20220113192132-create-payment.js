'use strict';
const sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('payments', { 
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      card:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      cvv:{
        type:sequelize.STRING,
        allowNull:false,
      },
      cpf:{
        type:sequelize.STRING,
        allowNull:false,
      },
      name_card:{
        type:sequelize.STRING,
        allowNull:false,
      },
      user_id:{
        type:sequelize.INTEGER,
        allowNull:false,
        references:{model:'users',key:'id'},
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
    	await queryInterface.dropTable('payments');
  }
};
