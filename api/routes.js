const express = require('express')

const Route = express.Router()

Route.get('/',(req,res)=>{
    res.send('este deploy esta funcionando perfeitamente!')

})

module.exports = Route