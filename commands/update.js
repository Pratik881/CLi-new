const schema=require('../schema/clischema')
const {myConnection}=require('../dbConfig/config')
const prompt=require('../prompt')
const update=async()=>{
    try{
    await myConnection()
    const idToUpdate=await prompt('Enter the id to update')
    const updated=await schema.findOne({ //returns an array
        goalId:idToUpdate
     })
     //findOne returns an object
    let {name,description}=updated
    name=await prompt('Update your goal name')
    description=await prompt('Update your goal description')
    await updated.updateOne({
        name,
        description
    })
    console.log('successfully updated')
    }
    catch(err){
        console.log(err.message)
    }

}
module.exports=update