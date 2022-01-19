const Express = require('express')
const Route = require('./api/routes')
const app = Express()
const Port = process.env.Port || 3000
app.use(Route)

app.listen(Port,()=>{console.log(`conectado a porta${Port}`)})