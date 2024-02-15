const mongoose=require('mongoose')
//Mongoose is an ODM(Object Document Mapping")
const myConnection=async()=>{
    try{
await mongoose.connect('mongodb://localhost:27017/cli')
console.log('connection successfull')
    }
   catch(err){
    console.log(err.message)

   }
}
module.exports=myConnection