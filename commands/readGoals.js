const { myConnection } = require('../dbConfig/config')
//const prompt=require('../prompt')
const schema=require('../schema/clischema')
const read=async()=>{
   await  myConnection()
   try{
   const documents=await schema.find({})
   const goals=Object.values(documents)
   let i=1
   goals.forEach(element => {
    console.log(`goal ${i}: `,element.name)
    console.log(`goalId : `,element.goalId)
    i++
   });
//    const delteCount=await schema.deleteMany({})
//    console.log(delteCount.deletedCount)
}
   catch(err){
    console.log(err.message)
   }
 
}
module.exports=read