const schema=require('../schema/clischema')
const {myConnection}=require('../dbConfig/config')
const prompt=require('../prompt')
const deleteId=async()=>{
    try{
    await myConnection()
    const idToDelete=await prompt('Enter the id to delete')
    const deleted=await schema.deleteOne({
        goalId:idToDelete
     })
     
     if(deleted.deletedCount){
        console.log('Congrats on completing old goal!')
     }
     else{
        throw new Error("No such goalId exists")
     }
    }
    catch(err){
        console.log(err.message)
    }

}
module.exports=deleteId