const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    }
})
const Task=mongoose.model('task',taskSchema)
module.exports=Task