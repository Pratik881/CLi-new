const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
  goalId:{
    type:Number

  },
    name:{
        type:String
    },
    description:{
        type:String
    }
})
const Task=mongoose.model('task',taskSchema)
module.exports=Task