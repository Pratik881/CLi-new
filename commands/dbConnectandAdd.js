// const express=require('express')
// const app=express()
const mongoose=require('mongoose')
const {myConnection,trydisconnect}=require('../dbConfig/config')
const mySchema=require('../schema/clischema')
const prompt=require('../prompt')
const myAdder=async ()=>{
const goals= await prompt('Write your goals')
const goalsDescription=await prompt('Write your goals description')
await myConnection()
mySchema.create({
    goalId:Math.floor(Math.random()*10000),
    name:goals,
    description:goalsDescription
})
console.log("successfully inserted to the database")
const moreTask=await prompt('Do you want to add more goals:(Y/N)')
const regex=/^[yY]$/;//match any of the single characters
if(regex.test(moreTask)){
    myAdder()
}
}

module.exports=myAdder