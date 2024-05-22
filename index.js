const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const PORT =process.env.PORT;
const {MONGOURI} = require('./keys')
//febygAQryCzXjDJn

mongoose.set('strictQuery', true);
// mongoose.connect(MONGOURI)
mongoose.connect(process.env.MONGOURI)

mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo yeahh');
})
mongoose.connection.on('error', (err)=>{
    console.log("err connecting",err);
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

app.listen(PORT, ()=>{
    console.log("server is running on ",PORT);
})