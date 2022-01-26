const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const User = require('../models/user')
const Payment = require('../models/payment')
const Exercises = require('../models/exercises')
const Modules_exercises = require('../models/modules_exercises')
const Comments = require('../models/comments')
const Mural = require('../models/mural')
const connection = new Sequelize(dbConfig)

User.init(connection)
Exercises.init(connection)
Modules_exercises.init(connection)
Payment.init(connection)
Comments.init(connection)
Mural.init(connection)



User.associate(connection.models)
Comments.associate(connection.models)
Exercises.associate(connection.models)
Modules_exercises.associate(connection.models)
Payment.associate(connection.models)

module.exports = connection