const express=require('express')
const app=express()
const myConnection=require('./dbConfig/config')
app.listen(3000,()=>{
    console.log('I am listening')
})
myConnection()