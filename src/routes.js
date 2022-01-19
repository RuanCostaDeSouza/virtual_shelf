const express = require("express");


const Routes = express.Router();

Routes.get('/',(req,res)=>{
    res.json({
        Hello:"world"
    })
})

module.exports = Routes