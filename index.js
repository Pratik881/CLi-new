const express=require('express')
const app=express()
const myConnection=require('./dbConfig/config')
const mySchema=require('./schema/clischema')
myConnection().then(()=>{
    const newData=new mySchema({
        name:'hello',
        description:'hey'
    })
    newData.save().then(savedTask=>{
        console.log(savedTask)
    })
    .catch(err=>{
        console.log(err)
    })
    console.log(mySchema.find({}))
 
    app.listen(3000,()=>{
        console.log("I am listening")
    })
})