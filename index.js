const express = require('express')
const Routes = require('./src/routes')


const Port = process.env.port||3000


const app = express()

app.use(express.json())
app.use(Routes)

app. listen(Port,(erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log(`Server connected on port ${Port}`)
    }
})