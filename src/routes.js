const express=require('express')
const UserController = require('./controller/userController')
const PaymentController = require('./controller/paymentController')
const AccessController = require('./controller/AccessController')
const ExercisesController = require('./controller/ExerciseController')
const ModulesController = require('./controller/ModulesController')
const MuralController = require('./controller/MuralController')



const routes = express.Router()
//user
routes.get('/users',UserController.index)
routes.post('/users',UserController.store)
//access
routes.post('/users/login',AccessController.login)
//mural
routes.get('/mural',MuralController.allPub)
routes.get('/mural/:publi_id',MuralController.index)
routes.post('/publication/create',MuralController.store)
//exercises
routes.get('/:user_id/exercises',ExercisesController.userFavorites)
routes.post('/:user_id/exercises',ExercisesController.favoriteRegistrationUser)
routes.post('/exercise/create',ExercisesController.createNewExercise)
//modules
routes.get('/:module_id/module',ModulesController.index)
routes.get('/modules',ModulesController.allModules)
routes.post('/module/create',ModulesController.store)
routes.post('/module/:module_id/associateExercise',ModulesController.associationExercise)
//payment
routes.get('/:user_id/payment',PaymentController.index)
routes.post('/:user_id/payment',PaymentController.store)





module.exports = routes