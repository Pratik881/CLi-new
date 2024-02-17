// process.stdin.setEncoding('utf8');
// // console.log(process.stdin)


// process.stdin.on('data', function(data) {
//   console.log('User input:', data.trim());
//   // Do something with the user input
// });

// process.stdin.on('end', function() {
//   console.log('End of input');
// });
const readline=require('readline')
/**
 * @param {string} question
 * @param {object} options
 * @returns {Primise<string>}
 */
function prompt(question,options={}){
    const r1=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })

//the above fn creates a readline interface r1
  return new Promise((resolve,reject)=>{
    //add default value to question if needed
   if(options.default){
    question=`${question} (${options.default})`
   }
   r1.question(question,(answer)=>{//yo linema pugesi balla prompt garxa 
    if(!answer.trim() && options.default){
        answer=options.default
    }
    if(!answer){
        r1.close()
        reject(new Error("Some value needs to be provided"))
        //return
    }
    if(options.validate && !options.validate(answer)){
        r1.close();
        reject(new Error('input validation failed'))
       // return

    }
    r1.close()
    resolve(answer)
   })
   //ask user the question
})
}
module.exports=prompt