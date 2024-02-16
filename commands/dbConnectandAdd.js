// const express=require('express')
// const app=express()
const {myConnection,trydisconnect}=require('../dbConfig/config')
const mySchema=require('../schema/clischema')
const myAdder=()=>{
myConnection().then(()=>{
    const newData=new mySchema({
        name:'hello',
        description:'hi'
    })
    newData.save().then(()=>{
        console.log(newData)
        trydisconnect()
    }) 
})
}
module.exports=myAdder